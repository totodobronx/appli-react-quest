import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import PokemonCard from './components/PokemonCard';

const App = () => {
   const pokemonList = [    
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

  return (
     <div>
       <PokemonCard pokemonList={pokemonList} />
     </div>
   );
};

export default App
