import React,{useEffect, useState} from "react";
import { types } from "util";
import PokemonsContext, { PokemonContextModel, Pokemon} from "./pokemons-context";
interface Props {
    children: React.ReactNode;
}
const PokemonsContextProvider:React.FC<Props>=(props)=>{
    const [pokemons,setPokemons]=useState<Pokemon[]>([]);
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response => response.json())
        .then(data =>{
            let result = data.results;
            //console.log('RESULTADOS GENERALES',result);
            result.forEach((element:any)=> {
                //console.log(element);
                fetch(element.url)
                .then(res=>res.json())
                .then(data=>{
                    fetch(data.forms[0].url).then(r=>r.json()).then(img=>{
                        let tipo = '';
                        for(var i=0;i<data.types.length;i++){
                            tipo+=" "+data.types[i].type.name;
                        }
                        let pokemon:Pokemon={
                            id:data.id,
                            base_experience:data.base_experience,
                            name:data.name,
                            type:tipo,
                            weight:data.weight,
                            imgUrl:img.sprites.front_default
                        }
                        setPokemons(currPok=>{
                            return[...currPok,pokemon];
                        });
                    });
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