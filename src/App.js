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
    maxScore: 12,
    firstClick: true,
    clickedChar: []
  };

  shuffleCharacter = (array) => {
    var currentIndex = array.length;
    var temporaryValue;
    var randIndex;

    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temporaryValue;
    }

    return array;
  };

  handleInitClick = (id) => {
    console.log("clicked: " + id);
    this.checkIfClicked(id);
  }

  checkIfClicked = (id) => {
    const firstClick = this.state.firstClick;
    const clickedChar = this.state.clickedChar;
    console.log("Current Score:" + this.state.score);
    console.log(clickedChar);

    if (firstClick) {
      this.setState({
        characters: this.shuffleCharacter(characters),
        score: this.state.score + 1,
        firstClick: false,
        clickedChar: clickedChar.concat(id)
      });
    } else {
      for (let i = 0; i < clickedChar.length; i++) {
        if (id === clickedChar[i]) {
          this.setState({
            characters: this.shuffleCharacter(characters),
            score: 0,
            clickedChar: [],
            firstClick: true
          });
          console.log("You Lose");
        } else {
          this.setState({
            characters: this.shuffleCharacter(characters),
            score: this.state.score + 1,
            clickedChar: clickedChar.concat(id)
          });
        }
      }
    };
  }

  //add function to check for top score and reset game if top score hits. call in first click and if characters dont match
  // checkScore = (score) => {

  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dragon Ball Z Pick Em</Title>
        {this.state.characters.map(characters => (
          <ClickCards
            handleInitClick={this.handleInitClick}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            clicked={characters.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
