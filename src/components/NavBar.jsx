import React from 'react';

const NavBar = ({ goToPreviousPokemon, goToNextPokemon, pokemonIndex, pokemonList }) => {
  const pokemon = pokemonList[pokemonIndex];
  const isPreviousDisabled = pokemonIndex === 0;
  const isNextDisabled = pokemonIndex === pokemonList.length - 1;

  const handleClickNext = () => {
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
    goToNextPokemon();
  };

  return (
      <div>
        <button onClick={goToPreviousPokemon} disabled={isPreviousDisabled}>
          Previous
        </button>
        <button onClick={goToNextPokemon} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    );
  };

export default NavBar;