import { store } from './reduxDemoForBeginners/index';
import './App.scss';

function App() {
  console.log('Initial State: ', store.getState())
  return (
    <h1>Hello everyone</h1>
  );
}

export default App;
