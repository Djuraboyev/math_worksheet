import React from "react";

function Question({ id, question, options, selectedOption, onChange }) {
  return (
    <div className="question">
      <p>
        {id}. {question}
      </p>
      {options.map((option, index) => (
        <label key={index} className="option">
          <input
            type="radio"
            name={`question-${id}`}
            value={option}
            checked={selectedOption === option}
            onChange={(e) => onChange(e, id)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;
