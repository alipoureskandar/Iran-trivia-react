import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What is the capital of Iran?",
    answer: "The capital of Iran is Tehran.",
  },
  {
    id: 2,
    question: "What is the official language of Iran?",
    answer: "The official language of Iran is Persian (Farsi).",
  },
  {
    id: 3,
    question: "What is the currency of Iran?",
    answer: "The currency of Iran is the Iranian Rial (IRR).",
  },
  {
    id: 4,
    question: "What is the largest city in Iran?",
    answer: "The largest city in Iran is Tehran.",
  },
  {
    id: 5,
    question: "What is the dominant religion in Iran?",
    answer:
      "The dominant religion in Iran is Islam, with the majority being Shia Muslims.",
  },
  {
    id: 6,
    question: "What is the famous historical site in Iran?",
    answer:
      "Persepolis is a famous historical site in Iran, representing the ancient Persian civilization.",
  },
  {
    id: 7,
    question: "What is the largest desert in Iran?",
    answer:
      "The largest desert in Iran is the Dasht-e Kavir (Great Salt Desert).",
  },
  {
    id: 8,
    question: "What mountain range runs along the northern border of Iran?",
    answer: "The Alborz mountain range runs along the northern border of Iran.",
  },
  {
    id: 9,
    question: "Which body of water is located to the north of Iran?",
    answer: "The Caspian Sea is located to the north of Iran.",
  },
  {
    id: 10,
    question: "What is the traditional Iranian New Year called?",
    answer:
      "The traditional Iranian New Year is called Nowruz, celebrated on the first day of spring.",
  },
  {
    id: 11,
    question: "Which ancient city is known for its intricate windcatchers?",
    answer:
      "Yazd is known for its intricate windcatchers, traditional Persian architectural elements.",
  },
  {
    id: 12,
    question: "What is the famous Persian dish made of rice and meat?",
    answer:
      "Chelow Kebab is a famous Persian dish made of rice and grilled meat, often served with saffron.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
