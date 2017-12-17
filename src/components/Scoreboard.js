import React from "react";
import { HEARTS_MAX } from "./Puzzle";

const Scoreboard = props => {
  return (
    <div className="header">
      <span className="score">
        {props.scores[0]}:{props.scores[1]}
      </span>
      <span className="hearts">
        {!props.endGame && getHearts(props.hearts)}
      </span>
    </div>
  );
};

const getHearts = hearts => {
  return "💔".repeat(HEARTS_MAX - hearts) + "❤️".repeat(hearts);
};

export default Scoreboard;
