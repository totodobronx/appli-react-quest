import React from 'react';
import PropTypes from "prop-types";

const PokemonCard = ({pokemon}) => {
  const{ name, imgSrc } = pokemon;
  return (
    <figure className="card">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} className="card-img" />
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