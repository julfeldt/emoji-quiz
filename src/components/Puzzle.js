import React, { Component } from "react";
import sound from "../sound";

export const HEARTS_MAX = 3;
export const HEARTS_MEDIUM = 2;
export const HEARTS_MIN = 1;
export const HEARTS_NONE = 0;

class Puzzle extends Component {
  constructor() {
    super();
    this.setupKeys();
    this.state = {
      clue: 1,
      showCast: false,
      showAnswer: false
    };
  }

  render() {
    let puzzle = "";
    const { clue } = this.state;
    for (let i = 0; i < clue; i++) {
      puzzle += this.props.movie.emoji[i];
    }
    const title = this.props.movie.answer;
    let cast = "";
    if (this.state.showCast) {
      const castMembers = this.props.movie.cast.map((item, index) => {
        return (
          <span className="cast-member" key={index}>
            {item}
          </span>
        );
      });
      cast = <div className="cast hero">{castMembers}</div>;
    }

    let answer = "";
    if (this.state.showAnswer) {
      answer = (
        <div className="answer hero">
          <div className="title">{title}</div>
          <div className="poster">
            <img
              src={`images/2/${this.props.movie.imdb}`}
              height="500px"
              width="320px"
              alt={title}
            />
          </div>
        </div>
      );
    }

    let noMoreHints = "";
    if (
      !this.state.showCast &&
      !this.state.showAnswer &&
      this.props.movie.emoji.length === this.state.clue
    ) {
      noMoreHints = (
        <div className="cast hero cast-member">
          Ikke flere emojis
          <span role="img" aria-label="emoji" className="no-more-hints">
            🤔
          </span>
        </div>
      );
    }

    //let answer = this.state.showAnswer && <img src={this.props.movie.imdb} alt={title} width="320px" height="500px"/>;
    return (
      <div className="main">
        <div className="puzzle">{puzzle}</div>
        {noMoreHints}
        {cast}
        {answer}
      </div>
    );
  }

  setupKeys() {
    document.body.onkeyup = e => {
      const { emoji } = this.props.movie;
      const { clue } = this.state;
      if (e.keyCode === 32) {
        if (this.state.showAnswer) {
          return;
        }
        // Next clue
        if (clue < emoji.length) {
          let hearts = clue < emoji.length / 2 ? HEARTS_MAX : HEARTS_MEDIUM;

          this.setState({ clue: clue + 1 });

          this.props.changeHearts(hearts);

          if (clue === emoji.length) {
            // TODO: show indicator if it is the last clue before the cast..
            console.log("Next is the actors");
          }
        } else {
          if (!this.state.showCast) {
            this.setState({ showCast: true });
            this.props.changeHearts(HEARTS_MIN);
          }
        }
      } else if (e.keyCode === 13) {
        // Show answer
        this.setState({
          clue: emoji.length,
          showCast: false,
          showAnswer: true
        });
        this.props.changeHearts(HEARTS_NONE);
      }
      else if (e.keyCode === 79) {
        if (this.props.previous()) {
          this.setState({ clue: 1, showCast: false, showAnswer: false });
          this.props.changeHearts(HEARTS_MAX);
        }
      } else if (e.keyCode === 80) {
        // Go to next round
        if (this.props.next()) {
          this.setState({ clue: 1, showCast: false, showAnswer: false });
          this.props.changeHearts(HEARTS_MAX);
        } else {
          if (this.state.showAnswer) {
            this.props.endGame();
          }
        }
      } else if (e.keyCode === 81) {
        // Increase score for team 1
        this.props.increaseScore(0);
      } else if (e.keyCode === 65) {
        // decrease score for team 1
        this.props.decreaseScore(0);
      } else if (e.keyCode === 69) {
        // Increase score for team 2
        this.props.increaseScore(1);
      } else if (e.keyCode === 68) {
        // decrease score for team 2
        this.props.decreaseScore(1);
      } else if (e.keyCode === 49) {
        this.props.addScore(0);
      } else if (e.keyCode === 51) {
        this.props.addScore(1);
      } else if (e.keyCode === 8) {
        sound.playNope();
      }
    };
  }
}

export default Puzzle;
