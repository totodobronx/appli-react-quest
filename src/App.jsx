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

return (
     <div>
       <PokemonCard pokemon={pokemon} />
       <div>
        <button onClick={goToPreviousPokemon} disabled={pokemonIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>
          Next
        </button>
        </div>
     </div>
   );
};

export default App
