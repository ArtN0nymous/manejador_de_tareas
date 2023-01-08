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
    addActivity:(title:string,description:string,hour:string)=>void;
    completeActivity:(activityId:string)=>void;
}
const PokemonsContext=React.createContext<PokemonContextModel>({
    pokemons:[],
    addActivity:()=>{},
    completeActivity:()=>{}
});
export default PokemonsContext;