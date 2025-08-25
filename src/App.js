import React, { useState } from "react";
import Question from "./components/question";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "23 rounded to the nearest 10 is..",
    options: ["20", "30", "25"],
    correctAnswer: "20",
  },
  {
    id: 2,
    question: "67 rounded to the nearest 10 is..",
    options: ["60", "70", "65"],
    correctAnswer: "70",
  },
  {
    id: 3,
    question: "81 rounded to the nearest 10 is..",
    options: ["80", "90", "85"],
    correctAnswer: "80",
  },
  {
    id: 4,
    question: "49 rounded to the nearest 10 is..",
    options: ["40", "50", "45"],
    correctAnswer: "50",
  },
  {
    id: 5,
    question: "5 rounded to the nearest 10 is..",
    options: ["0", "10", "5"],
    correctAnswer: "10",
  },
  {
    id: 6,
    question: "134 rounded to the nearest 10 is..",
    options: ["130", "140", "135"],
    correctAnswer: "130",
  },
  {
    id: 7,
    question: "156 rounded to the nearest 10 is..",
    options: ["150", "160", "155"],
    correctAnswer: "160",
  },
  {
    id: 8,
    question: "300 rounded to the nearest 10 is..",
    options: ["300", "310", "290"],
    correctAnswer: "300",
  },
  {
    id: 9,
    question: "2 rounded to the nearest 10 is..",
    options: ["0", "10", "5"],
    correctAnswer: "0",
  },
  {
    id: 10,
    question: "99 rounded to the nearest 10 is..",
    options: ["90", "100", "95"],
    correctAnswer: "100",
  },
  {
    id: 11,
    question: "111 rounded to the nearest 10 is..",
    options: ["110", "100", "120"],
    correctAnswer: "110",
  },
  {
    id: 12,
    question: "875 rounded to the nearest 10 is..",
    options: ["870", "880", "875"],
    correctAnswer: "880",
  },
];

function App() {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name before submitting.");
      return;
    }

    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const handleReset = () => {
    setAnswers({});
    setScore(null);
    setName("");
  };

  return (
    <div className="container">
      <h1>Rounding to the Nearest 10</h1>
      <div className="info">
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {score !== null && <div className="score">Score: {score}/12</div>}
      </div>

      {questions.map((q) => (
        <Question
          key={q.id}
          id={q.id}
          question={q.question}
          options={q.options}
          selectedOption={answers[q.id] || ""}
          onChange={handleOptionChange}
        />
      ))}

      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <footer>
        <small>copyright: www.mathinenglish.com</small>
      </footer>
    </div>
  );
}

export default App;
