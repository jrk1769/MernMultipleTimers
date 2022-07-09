import { useState } from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch';

function App() {
  const [counter, setCounter] = useState(0);
  const getStopWatches = () => {
    return Array(counter).fill(0).map((Elem, index) => <Stopwatch key={index} /> );
  }
  return (
    <div className="App">
      <div className='header'>
        <div><h1 style={{ color: 'black'}}>React Multiple Timers</h1></div>
        <div className='addBtn' onClick={() => setCounter(counter => counter + 1)}><p>+</p></div>
      </div>
      <div className='watchContainer'>{getStopWatches()}</div>
    </div>
  );
}

export default App;
