import React from 'react'

const Main = () => {
    return (
      <>
        <div className='main'>
          {timeOut || finished ? (
            <>
              {finished ? (
                <h1 className='endText'>
                  {" "}
                  You Are The Founding Titan , Rumble The World!
                </h1>
              ) : (
                <h1 className='endText'>
                  {" "}
                  {username.toUpperCase()} IS A: {earned}
                </h1>
              )}
              {finished ? win() : aot()}
            </>
          ) : (
            <>
              <div className='top'>
                <div className='timer'>
                  <Timer
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                  />
                </div>
              </div>
              <div className='bottom'>
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
        <div className='score'>
          <ul className='scoreList'>
            {score.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "scoreListItem active"
                    : "scoreListItem"
                }>
                <span className='scoreListItemNumber'>{m.id}</span>
                <span className='scoreListItemAmount'>{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default Main
