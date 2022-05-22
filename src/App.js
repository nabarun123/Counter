import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Some valuable information you should not see</h3> : ""}
    </div>
  );
}

export default App;

//dispatch() is the method used to dispatch actions and trigger state changes to the store.
//The useDispatch hook is used to dispatch an action while useSelector hook is used to
//get the state from the redux store.
