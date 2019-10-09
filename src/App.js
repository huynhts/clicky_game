import React, { Component } from "react";
import ClickCards from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0
  };

  shuffleCharacter = function () {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = [];

    for (i = 0; i < this.state.characters.length; i++) {
      let ranNum = Math.random() * (this.state.characters.length - 1) + 1;

      characters.push(this.state.characters[ranNum])
    }

    // Set this.state.friends equal to the new friends array
    console.log(id);

    this.setState({ characters });
    console.log(characters);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dragon Ball Z Pick Em</Title>
        {this.state.characters.map(characters => (
          <ClickCards
            shuffleCharacter={this.shuffleCharacter}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
