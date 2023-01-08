import React, { useEffect, useState } from "react";
import PokemonsContext, { Pokemon} from "./pokemons-context";
interface Props{
    children:React.ReactNode;
}
const PokemonContextProvider:React.FC<Props>=(props)=>{
    const [pokemons,setPokemon]=useState<Pokemon[]>([{
        base_experience:10,
        id:'1',
        name:'prueba',
        weight:10,
        type:'tipo',
        imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    }]);
    // useEffect(()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //     .then(response => response.json())
    //     .then(data =>{
    //         let result = data.results;
    //         console.log('RESULTADOS GENERALES',result);
    //         result.forEach((element:any)=> {
    //             fetch(element.form.url)
    //             .then(res=>res.json())
    //             .then(data=>{
    //                 let img:string=data.results.front_default
    //                 console.log('Imagen de pokemon: '+element.name,'Imagen: '+img);
    //                 let pokemon:Pokemon={
    //                     id:element.id,
    //                     base_experience:element.base_experience,
    //                     name:element.name,
    //                     type:element.type,
    //                     weight:element.weight,
    //                     imgUrl:img
    //                 };
    //                 setPokemon(curreP=>{
    //                     return[...curreP,pokemon];
    //                 });
    //             });
    //         });
    //     });
    // },[]);
    const detailsPokemon=(id:string)=>{

    }
    const pokemonsContext={
        pokemons,
        detailsPokemon
    }
    return(
        <>
        </>
    )
};
export default PokemonContextProvider;