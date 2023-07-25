import React, {useState, useEffect} from 'react';
import './App.css';
import CounterApp from './components/CounterApp';

  const initCounterList = [
    { initVal: 2, offsetVal: 1 },
    { initVal: 6, offsetVal: -5 },
    { initVal: -3, offsetVal: -2 },
  ];

function App() {

  const [counterList, setCounterList] = useState([]);

  useEffect(() =>{
    setCounterList(initCounterList);
  },[]);

  const addCounterApp = () => {
    let newCounterList = [...counterList];
    newCounterList.push({initVal:1, offsetVal:1});
    setCounterList(newCounterList);
  }

  return (
    <div className="App">
      <div className="counterAppContainer">
        {counterList.map(({ initVal, offsetVal }) => {
          return <CounterApp initVal={initVal} offsetVal={offsetVal} />;
        })}
      </div>
      <div className="addContainer">
        <h2>Add A new Counter App with the default values</h2>
        <button className='btnClass' onClick={addCounterApp}>ADD</button>
      </div>
    </div>
  );
}

export default App;
