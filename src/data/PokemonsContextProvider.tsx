import React,{useEffect, useState} from "react";
import PokemonsContext, { PokemonContextModel, Pokemon} from "./pokemons-context";
interface Props {
    children: React.ReactNode;
}
const PokemonsContextProvider:React.FC<Props>=(props)=>{
    const [pokemons,setPokemons]=useState<Pokemon[]>([
        {
            base_experience:10,
            id:'1',
            name:'prueba',
            weight:10,
            type:'tipo',
            imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        },
    ]);
    useEffect(()=>{
        let pokemon_base:Pokemon[]=[];
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then(response => response.json())
        .then(data =>{
            let result = data.results;
            //console.log('RESULTADOS GENERALES',result);
            result.forEach((element:any)=> {
                //console.log(element);
                fetch(element.url)
                .then(res=>res.json())
                .then(data=>{
                    let pokemon:Pokemon={
                            id:data.id,
                            base_experience:data.base_experience,
                            name:data.name,
                            type:data.type,
                            weight:data.weight,
                            imgUrl:''
                        }
                    //pokemon_base.push(pokemon);
                    setPokemons(currPok=>{
                        return[...currPok,pokemon];
                    })
                });
            });
        });
    },[])
    const addActivity=(title:string,description:string,hour:string)=>{
        // let imageUrl='';
        // const newActiviy:Activity={
        //     id:Math.random().toString(),
        //     title,
        //     description,
        //     hour,
        //     activityType,
        //     imageUrl,
        //     isCompleted:false
        // }
        // setActivities(currActivities=>{
        //     return[...currActivities,newActiviy];
        // })
    }
    const completeActivity=(activityId:string)=>{
        // setActivities(currActivities=>{
        //     const updatedActivities =[...currActivities];
        //     const selectedActivityIndex=activities.findIndex(act=>act.id===activityId);
        //     const updatedActivity={...updatedActivities[selectedActivityIndex],iscompleted:true};
        //     updatedActivities[selectedActivityIndex]=updatedActivity;
        //     return updatedActivities;
        // });
    }
    const pokemonsContext:PokemonContextModel={
        pokemons,
        addActivity,
        completeActivity
    };
    return(
        <PokemonsContext.Provider value={pokemonsContext}>
            {props.children}
        </PokemonsContext.Provider>
    )
};
export default PokemonsContextProvider;