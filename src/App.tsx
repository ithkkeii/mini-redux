import React, { useContext } from "react";
import { StoreContext, useDispatch } from "./mini-redux";
import "./App.css";
import { counterActions } from "./counter";

function App() {
  const store = useContext(StoreContext);
  console.log(store);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <span>Counter</span>
        <p>{(store as any).value}</p>
        <div>
          <button
            onClick={() => {
              dispatch({ type: counterActions.increment });
              dispatch({ type: counterActions.increment });
              dispatch({ type: counterActions.increment });
              dispatch({ type: counterActions.increment });
              dispatch({ type: counterActions.increment });
              dispatch({ type: counterActions.increment });
            }}
          >
            Increment
          </button>
          <button onClick={() => dispatch({ type: counterActions.decrement })}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
