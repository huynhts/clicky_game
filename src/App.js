import React, { Component } from "react";
import ClickCards from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
    score: 0,
    topScore: 0,
    maxScore: 12
  };

  shuffleCharacter = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.setState({
      characters: this.state.characters[Math.floor(Math.random() * this.state.characters.length)]
    })


    // Set this.state.friends equal to the new friends array
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(characters);
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
