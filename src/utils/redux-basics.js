// Note:
// =====
// This is not for the project, but for learning Redux

//                   ReducerFunction (change data) - (B)
//                         |
//                         | change in store
//   Action (D)          State (A)
//                         | subscribe (C)
//                         |
//     dispatch        Component
//

// Praparation (file which is empty: redux-demo.js)
// execution with node.js

// RUN --> npm init -y within this folder
// THEN --> npm install redux

// You can run it in the terminal: rode redux-demo.js

const redux = require("redux");

// B
// Input: old state + dispatched Action =>Output=>  return NEW STATE ---> pure function
// default value for the forst time: 'state = 0'
const counterReducer = (state = 0, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// A
// store needs to know which reducer is responsible for changing that store!
const store = redux.createStore(counterReducer);

// C
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subcribe(counterSubscriber);

// D
// you get the action as second argument (now, in the reducer - B we do an if...)
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
