import React from "react";

function Score({ name, score }) {
  return (
    <div className="score">
      <h2>Well done, {name}!</h2>
      <p>Your Score: {score} / 12</p>
    </div>
  );
}

export default Score;
