import React, { useState } from 'react';

const Quiz = ({ question, options, selected }) => {

  const [answer, setAnswer] = useState(options);
  const [selectedAnswer, setSelectedAnswer] = useState();

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer && answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer();
            setSelectedAnswer(text);
            selected(text);
          }}> {text}
        </button>
      ))}
      {selectedAnswer &&
        <p>{selectedAnswer}</p>
      }
    </div>
  )
}

export default Quiz;