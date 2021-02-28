import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

import './App.scss';

function App() {
  const count = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogger);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => { dispatch(increment(10)) }}> + </button>
      <button className="btn" onClick={() => { dispatch(decrement(10)) }}> - </button>

      <div>
        <button className="btn" onClick={() => dispatch(signIn())}>Sign In</button>
      </div>
      <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quos!</p>
      {isLogged ? <h1>Welcome</h1> : <h1>You need to sign in!</h1>}

    </div>
  );
}

export default App;
