import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Pokedex /> */}
        <Pokecard id="4" name="Charmander" type="fire" base_experience="62" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
