import React from 'react';

const PokemonCard = (props) => {
  const pokemonList = props.pokemonList;
  const pokemon = pokemonList[0];
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

export default PokemonCard;