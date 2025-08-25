import React from "react";
import Question from "./Question";

function Worksheet({ questions, inputs, handleInputChange }) {
  return (
    <div className="worksheet">
      {questions.map((q) => (
        <Question
          key={q.id}
          id={q.id}
          number={q.number}
          value={inputs[q.id]}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
}

export default Worksheet;
