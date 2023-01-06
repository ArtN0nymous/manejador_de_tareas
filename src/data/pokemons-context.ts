import React, { useState } from "react";
let pokemons:string[] = [];
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then(data => pokemons=data.results);
//export type PokemonType='agua'|'fuego'|'planta';
export interface Pokemon{
    id:string,
    name:string,
    type:string,
    imgUrl:string
}
export interface PokemonsContextModel{
    pokemons:Pokemon[];
}
const PokemonsContext = React.createContext<PokemonsContextModel>({
    pokemons:[],
});

export default PokemonsContext;