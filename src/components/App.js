import React from "react";
import "./App.scss";
import pokemonsFromApi from "../data/pokemon.json"; 
import PokeList from "./PokeList";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: pokemonsFromApi
    }
  }

  render(){
    return (
      <div className="page">
        <h1 className="page__title">Mi lista de pokemon</h1>
        <PokeList dataList={this.state.data}/>
        <small className= "page__footer">&copy; Ana Martínez Fernández</small>
      </div>
    );
  }
}

export default App;
