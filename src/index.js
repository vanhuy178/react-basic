import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App.js';
import './style/global.scss'
import reportWebVitals from './reportWebVitals';

// // import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// // import { RootReducer } from './store/reducers/rootReducer.js';
// const initialState = 0;

// const reducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return state + action.payload;
//   }
//   else if (action.type === 'DECREMENT') {
//     return state - action.payload;
//   }
//   return state;
// }
// const store = createStore(reducer);
// store.subscribe(() => console.log('current state: ', store.getState()))
// store.dispatch(
//   {
//     type: 'INCREMENT',
//     payload: 2
//   }
// )
// store.dispatch(
//   {
//     type: 'INCREMENT',
//     payload: 3
//   }
// )
// store.dispatch(
//   {
//     type: 'DECREMENT',
//     payload: 1
//   }
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
