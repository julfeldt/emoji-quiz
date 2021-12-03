import React, { Component } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Puzzle from "./components/Puzzle";
import Intro from "./components/Intro";
import movies from "./2/movies.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      round: 0,
      scores: [0, 0],
      movies,
      hearts: 3,
      endGame: false,
      intro: true
    };
  }

  previousPuzzle() {
    const { round } = this.state;
    if (round > 0) {
      this.setState({
        round: round -1
      });
      return true;
    }
    return false;
  }

  nextPuzzle() {
    const { round } = this.state;
    if (this.state.movies.length > round + 1) {
      this.setState({
        round: round + 1
      });
      return true;
    }
    return false;
  }

  increaseScore(team) {
    this.changeScore(team, "+");
  }

  decreaseScore(team) {
    this.changeScore(team, "-");
  }

  changeHearts(hearts) {
    this.setState({
      hearts
    });
  }

  changeScore(team, direction) {
    this.setScore(team, direction === "+" ? 1 : -1);
  }

  addCurrentHeartsAsScore(team) {
    this.setScore(team, this.state.hearts);
  }

  setScore(team, score) {
    let { scores } = this.state;
    const value = scores[team] + score;
    if (value >= 0) {
      this.setState({
        scores: Object.assign([...scores], { [team]: value })
      });
    }
  }

  setIntro(status) {
    this.setState({ intro: status });
  }

  endGame() {
    this.setState({
      endGame: true
    });
  }

  showIntro() {
    return <Intro setIntro={this.setIntro.bind(this)} />;
  }

  showEndGame() {
    return (
      <div className="end-game">
        <img src="images/the_end.gif" height="735" width="1000" alt="the end" />
      </div>
    );
  }

  showGame() {
    return (
      <div>
        <Puzzle
          movie={this.state.movies[this.state.round]}
          next={this.nextPuzzle.bind(this)}
          previous={this.previousPuzzle.bind(this)}
          increaseScore={this.increaseScore.bind(this)}
          decreaseScore={this.decreaseScore.bind(this)}
          changeHearts={this.changeHearts.bind(this)}
          addScore={this.addCurrentHeartsAsScore.bind(this)}
          endGame={this.endGame.bind(this)}
        />
        <div className="round">#{this.state.round + 1}/{this.state.movies.length}</div>
      </div>
    );
  }

  render() {
    let component = "";
    if (this.state.intro) {
      component = this.showIntro();
    } else {
      component = !this.state.endGame ? this.showGame() : this.showEndGame();
    }
    return (
      <div className="app">
        {!this.state.intro && (
          <Scoreboard
            scores={this.state.scores}
            hearts={this.state.hearts}
            endGame={this.state.endGame}
          />
        )}
        {component}
      </div>
    );
  }
}

export default App;
