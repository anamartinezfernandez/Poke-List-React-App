import React from "react";
import "./PokeList.scss";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';


class PokeList extends React.Component {
  render(){
    const pokemons = this.props.dataList.map((pokemon) => {
      return(
      <li key={pokemon.id} className="pokemonList__item">
        <Pokemon pokemon= {pokemon}/>
      </li>)
    });
    return <ul className="pokemonList">{pokemons}</ul>;
  };
}

PokeList.propTypes = {
  dataList: PropTypes.array,
};


export default PokeList;

