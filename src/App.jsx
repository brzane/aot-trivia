import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import useSound from "use-sound";
import Aot from "./sounds/aot.mp3";
import Win from "./sounds/win.mp3"
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Normal Human Bakaaa!");
  const [aot] = useSound(Aot,{volume:0.3});
  const [win] = useSound(Win,{volume:0.1});

  const data = [
    {
      id: 1,
      question: "What is the Japanese name for ‘Attack on Titan’?",
      answers: [
        {
          text: "Yu Yu Hakusho",
          correct: false,
        },
        {
          text: "Shingeki no Kyojin",
          correct: true,
        },
        {
          text: "Shingeki no",
          correct: false,
        },
        {
          text: "Shingeki  Kyojin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "While in his Pure Titan form, who eats Bertholdt Hoover?",
      answers: [
        {
          text: "Armin Arlert",
          correct: true,
        },
        {
          text: "Reiner Braun ",
          correct: false,
        },
        {
          text: "Eren Yeager",
          correct: false,
        },
        {
          text: "Porco Galliard",
          correct: false,
        },
      ],
    },
    { 
      id: 3,
      question: "What is the method that turns the Subjects of Ymir into Titans?",
      answers: [
        {
          text: "Eaten by an existing Titan",
          correct: false,
        },
        {
          text: "Torture",
          correct: false,
        },
        {
          text: "Shot by a PSA rifle",
          correct: false,
        },
        {
          text: " Injection",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The 3 walls were named after which king’s daughters?",
      answers: [
        {
          text: "Uri",
          correct: false,
        },
        {
          text: "Rod",
          correct: false,
        },
        {
          text: "Fritz",
          correct: true,
        },
        {
          text: "Eren Yeager",
          correct: false,
        },
      ],
    },
    {  
      id: 5,
      question: "What relation is Kenny the Ripper to Levi Ackerman?",
      answers: [
        {
          text: "His father",
          correct: false,
        },
        {
          text: "His uncle",
          correct: true,
        },
        {
          text: "His brother",
          correct: false,
        },
        {
          text: "His father-in-law",
          correct: false,
        },
      ],
    },
    { // Dancing // Jumping // Whistling
      id: 6,
      question: "The Founding Titan allows its user to gain control of other titans by doing what?",
      answers: [
        {
          text: "Screaming",
          correct: true,
        },
        {
          text: "Dancing",
          correct: false,
        },
        {
          text: "Jumping",
          correct: false,
        },
        {
          text: "Whistling",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who was Jean Kirschtein disguised as when he was taken to the Imperial Capital for judgment?",
      answers: [
        {
          text: "Levi Ackermann ",
          correct: false,
        },
        {
          text: "Connie Springer",
          correct: false,
        },
        {
          text: "Sasha Braus",
          correct: false,
        },
        {
          text: "Eren Yeager",
          correct: true,
        },
      ],
    },
    {  
      id: 8,
      question: "What did Levi find in the false bottom of Eren’s basement desk?",
      answers: [
        {
          text: "Books",
          correct: true,
        },
        {
          text: "A key",
          correct: false,
        },
        {
          text: "An amulet",
          correct: false,
        },
        {
          text: "A gun",
          correct: false,
        },
      ],
    },
    { 
      id: 9,
      question: "How did Eren accidentally trigger his Titan transformation?",
      answers: [
        {
          text: "shooting",
          correct: false,
        },
        {
          text: "Riding a horse",
          correct: false,
        },
        {
          text: "pick up a spoon",
          correct: true,
        },
        {
          text: "Sneezing",
          correct: false,
        },
      ],
    },
    {  
      id: 10,
      question: "What was the last gift that Kenny Ackermann gave to Levi?",
      answers: [
        {
          text: "A gun",
          correct: false,
        },
        {
          text: "necklace",
          correct: false,
        },
        {
          text: "His favourite hat",
          correct: false,
        },
        {
          text: "A Titan injection",
          correct: true,
        },
      ],
    },
    {  
      id: 11,
      question: "How long does someone live for after eating a person controlling one of the 9 Titans?",
      answers: [
        {
          text: "10 years",
          correct: false,
        },
        {
          text: "19 years",
          correct: false,
        },
        {
          text: "15 years",
          correct: false,
        },
        {
          text: "13 years",
          correct: true,
        },
      ],
    },
    {   
      id: 12,
      question: "In the ruined village of Ragako, Conny Springer found a Titan lying where?",
      answers: [
        {
          text: "his family’s house",
          correct: true,
        },
        {
          text: "In a stream",
          correct: false,
        },
        {
          text: " Inside the library",
          correct: false,
        },
        {
          text: "In the candy shop",
          correct: false,
        },
      ],
    },
    { 
      id: 13,
      question: "The ‘D’ in ODM gear stands for what?",
      answers: [
        {
          text: "Destructive",
          correct: false,
        },
        {
          text: "Determined",
          correct: false,
        },
        {
          text: "Directional",
          correct: true,
        },
        {
          text: "Deadly",
          correct: false,
        },
      ],
    },
    { //  //  // 

      id: 14,
      question: "The Battle of Shiganshina District took place in what year?",
      answers: [
        {
          text: "820",
          correct: false,
        },
        {
          text: "875",
          correct: false,
        },
        {
          text: "850",
          correct: true,
        },
        {
          text: "890",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the GOAT character in AOT?",
      answers: [
        {
          text: "Levi Ackerman",
          correct: false,
        },
        {
          text: "Eren Yeager",
          correct: true,
        },
        {
          text: "Mikasa Ackerman",
          correct: false,
        },
        {
          text: "Erwin Smith",
          correct: false,
        },
      ],
    },
  ];
  let finished=  questionNumber > data.length ;
  const score = useMemo(
    () =>
      [
        { id: 1, amount: "Pure Titan" },
        { id: 2, amount: "Hanji Zoe" },
        { id: 3, amount: "Armin Arlert" },
        { id: 4, amount: "Erwin Smith" },
        { id: 5, amount: "Cart Titan" },
        { id: 6, amount: "Jaw Titan" },
        { id: 7, amount: "Female Titan" },
        { id: 8, amount: "Boulder Titan" },
        { id: 9, amount: "Beast Titan" },
        { id: 10, amount: "War Hammer Titan" },
        { id: 11, amount: "Mikasa Ackerman" },
        { id: 12, amount: "Levi Ackerman" },
        { id: 13, amount: "Attack Titan" },
        { id: 14, amount: "Colossal Titan" },
        { id: 15, amount: "Founding Titan" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(score.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, score]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || finished ? (
              <>
              {finished ? (
                <h1 className="endText"> You Are The Founding Titan , Rumble The World!</h1>
              ):(
                <h1 className="endText"> {username.toUpperCase()} IS  A: {earned}</h1>
              )}
              {finished ? win(): aot()}
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
      
                  />
                </div>
              </>
            )}
          </div>
          <div className="score">
            <ul className="scoreList">
              {score.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "scoreListItem active"
                      : "scoreListItem"
                  }
                >
                  <span className="scoreListItemNumber">{m.id}</span>
                  <span className="scoreListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
