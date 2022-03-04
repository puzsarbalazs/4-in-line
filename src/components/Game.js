import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";


const Game = () => {
  const [history, setHistory] = useState([Array(16).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  //const xO = xIsNext ? "X" : "O";
  const xO = xIsNext ? "Red" : "Yellow";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const squares = historyPoint[stepNumber];
    //const squares = [...current];
    // return if won or occupied
    if (winner || squares[i] || (i<12 && !squares[i+4])) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    //setStepNumber((prevState => prevState+1));
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  /*const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });*/

    const goToStart = () => {
        setHistory([Array(16).fill(null)]);
      setStepNumber(0);
      setXisNext(true);
    }
  /*
    const startButton = () => {
        return <button onClick={alert('asd')}>start gomb</button>;
    }*/

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
      <button onClick={goToStart} className="start">Restart</button>
    </>
  );
};

export default Game;
