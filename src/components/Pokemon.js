import React from "react";
import "./Pokemon.scss";
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render(){
    console.log(this.props);
    const pokemonTypes = this.props.pokemon.types.map((pokemonType, index) => {
      return (
        <li key={index} className="pokemonItem__types--type">
        {pokemonType}
        </li>)
    });
    return (
      <div className="App">
        <div>
          <img className="pokemonItem__image" alt={this.props.pokemon.name} src={this.props.pokemon.url}></img>
        </div>
        <div>
          <h1 className="pokemonItem__name">{this.props.pokemon.name}</h1>
        </div>
        <ul className="pokemonItem__types">{pokemonTypes}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object
};

export default Pokemon;