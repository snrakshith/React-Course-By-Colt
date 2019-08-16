import React from "react";
import "./Pokecard.css";

const PokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends React.Component {
  render() {
    const imgSrc = `${PokeAPI}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h2>{this.props.name}</h2>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type:{this.props.type}</div>
        <div>Expo:{this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
