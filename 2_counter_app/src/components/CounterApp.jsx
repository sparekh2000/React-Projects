import React, {useState} from "react";
import './CounterApp.css';

function CounterApp ({initVal, offsetVal}){
    const [counter, setCounter] = useState(initVal || 0);
    const [offset, setOffset] = useState(offsetVal || 1);
    
    const incrementCounter = () => {
        setCounter(counter + offset);
    }

    const decrementCounter = () => {
        setCounter(counter - offset);
    }

    const onChangeCounter = e => {
        setCounter(Number(e.target.value));
    }

    const onChangeOffset = e => {
        setOffset(Number(e.target.value));
    }

    return (
      <div className="counterContainer">
        <h2>COUNTER APP </h2>
        <span>
          Initial Value : <strong>{initVal}</strong> Offset Value :{" "}
          <strong>{offsetVal}</strong>
        </span>
        <h1>{counter}</h1>

        <div className="inputButtons">
          <input
            type="number"
            value={counter}
            onChange={onChangeCounter}
          ></input>
          <input type="number" value={offset} onChange={onChangeOffset}></input>
        </div>
        <div className="actionButtons">
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
        </div>
      </div>
    );
}

export default CounterApp;