import React, { Component } from "react";
import { allEmojis, startAnimation, stopAnimation } from "../emoji-animate";

class Intro extends Component {
  componentDidMount() {
    // Pressing any key will start the emoji game
    document.body.onkeyup = e => {
      this.props.setIntro(false);
    };
    startAnimation();
  }

  componentWillUnmount() {
    stopAnimation();
  }

  render() {
    const emojis = allEmojis.map((i, k) => {
      const id = "animate-" + k;
      return (
        <div className="intro-smiley" key={k} id={id}>
          {i}
        </div>
      );
    });
    return (
      <div className="intro-container">
        {emojis}
        <div className="intro-text">
          <span className="quiz-title">
            <span role="img" aria-label="emoji">
              🎥
            </span>
            <span> emoji film quiz #2 </span>
            <span role="img" aria-label="emoji">
              🍿
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Intro;
