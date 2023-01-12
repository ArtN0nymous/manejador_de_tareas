import React from "react";
//export type ActiviyType='rest'|'work'|'hobby';
export interface Pokemon{
    base_experience:number,
    id:string,
    name:string,
    weight:number,
    type:string,
    imgUrl:string
}
export interface PokemonContextModel{
    pokemons:Pokemon[];
    leerP:(inicio:number,final:number)=>void;
}
const PokemonsContext=React.createContext<PokemonContextModel>({
    pokemons:[],
    leerP:()=>{},
});
export default PokemonsContext;