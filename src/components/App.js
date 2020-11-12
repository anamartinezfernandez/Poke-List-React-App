import React from "react";
import '../stylesheet/index.scss';
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
      < >
        <h1 className="page__title">Mi lista de pokemon</h1>
        <PokeList dataList={this.state.data}/>
      </>
    );
  }
}

export default App;
