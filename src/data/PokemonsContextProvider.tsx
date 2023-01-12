import React,{useEffect, useState} from "react";
import { types } from "util";
import PokemonsContext, { PokemonContextModel, Pokemon} from "./pokemons-context";
interface Props {
    children: React.ReactNode;
}
const PokemonsContextProvider:React.FC<Props>=(props)=>{
    const [pokemons,setPokemons]=useState<Pokemon[]>([]);
    useEffect(()=>{
        leerP(100,0);
    },[])
    const leerP=(hasta:number,desde:number)=>{
        //RESETEA ARRGELO DE POKEMONS PARA CARGAR SOLO LOS QUE ESTAN EN EL RANGO ASIGNADO
        // DE LO CONTRARIO SIMPLEMENTE SE AÑADEN A LA COLECCION YA EXISTENTE
        let p:Pokemon[]=[]
        setPokemons(p);
        fetch('https://pokeapi.co/api/v2/pokemon?limit='+(hasta??100)+'&offset='+(desde??0))
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
    }
    const pokemonsContext:PokemonContextModel={
        pokemons,
        leerP
    };
    return(
        <PokemonsContext.Provider value={pokemonsContext}>
            {props.children}
        </PokemonsContext.Provider>
    )
};
export default PokemonsContextProvider;