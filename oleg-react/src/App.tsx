import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './style/buttons.css'
import './style/counter.css'
import {Counter} from "./components/counter/counter";
import {IncrementButton} from "./components/button/Increment";
import {IDecrementButton} from "./components/button/Decrement";
import internal from "stream";



function App() {

  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{display: 'flex', columnGap: 10}}>
          <IncrementButton
              onClick={() => {
                setValue(
                    (prevState) => ++prevState
                )
              }}
          />
          <Counter value={value}></Counter>
          <IDecrementButton
              onClick={() => {
                setValue(
                  (pevState) => --pevState
                )
              }}
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
