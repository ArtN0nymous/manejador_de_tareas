import React from "react";
export interface Pokemon{
    base_experience:number,
    id:string,
    name:string,
    weight:number,
    type:string,
    imgUrl:string
}
export interface PokemonsContextModel{
    pokemons:Pokemon[];
    detailsPokemon:(pokemonId:string)=>void;
}
const PokemonsContext = React.createContext<PokemonsContextModel>({
    pokemons:[],
    detailsPokemon:()=>{}
});

export default PokemonsContext;