import React from 'react';

const NavBar = ({ goToPreviousPokemon, goToNextPokemon, pokemonIndex, pokemonList }) => {
    return (
      <div>
        <button onClick={goToPreviousPokemon} disabled={pokemonIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>
          Next
        </button>
      </div>
    );
  };

export default NavBar;