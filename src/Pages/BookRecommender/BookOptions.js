// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "../scss/books.scss";
import "../scss/desktopbooks.scss";

const BookOptions = (props) => {
  const options = [
    { text: "Science + Technology", handler: props.actionProvider.handleScience1, id: 1 },
    { text: "History + Biographies", handler: props.actionProvider.handleHistory, id: 2 },
    { text: "Meditation", handler: props.actionProvider.handleMeditation, id: 3 },
    { text: "Startups", handler: props.actionProvider.handleStartups, id: 4 },
    { text: "Fiction", handler: props.actionProvider.handleFiction, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default BookOptions;

// in src/components/LearningOptions/LearningOptions.css
