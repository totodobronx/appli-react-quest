import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

const App = () => {
  const pokemonList = [    
 {
   name: "bulbasaur",
   imgSrc:
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
 },
 
 {
   name: "charmander",
   imgSrc:
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
 },

 {
   name: "squirtle",
   imgSrc:
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
 },

 {
   name: "pikachu",
   imgSrc:
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
 },

 {
   name: "mew",
 },
];

const [pokemonIndex, setPokemonIndex] = useState(0);

 const goToPreviousPokemon = () => {
   setPokemonIndex(pokemonIndex => pokemonIndex - 1);
 };

 const goToNextPokemon = () => {
   setPokemonIndex(pokemonIndex => pokemonIndex + 1);
 };

 const pokemon = pokemonList[pokemonIndex];
 const isPreviousDisabled = pokemonIndex === 0;
 const isNextDisabled = pokemonIndex === pokemonList.length - 1;


 return (
   <div>
     <PokemonCard pokemon={pokemon} />
     <NavBar
        goToPreviousPokemon={goToPreviousPokemon}
        goToNextPokemon={goToNextPokemon}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
     />
   </div>
 );
};

export default App;
