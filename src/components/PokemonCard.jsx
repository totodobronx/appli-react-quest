import React from 'react';

const PokemonCard = () => {
  const pokemon = pokemonList[0]
  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img"/>
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

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

export default PokemonCard;