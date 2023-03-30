import React from 'react';
import PropTypes from "prop-types";

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

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;