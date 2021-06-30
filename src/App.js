import React, { useState } from "react";
import "./styles.css"

const App = () => {
    const [state, setState] = useState(false)
    const [count, setCount] = useState(10)
  return (
    <div style={bodyStyle} className="red"> 
      <h1>Create React App Without CRA ☘️</h1>


     <div> i love woman</div>

      <button onClick={() => setState(state => !state)}>see me</button>
      <div style={{backgroundColor: 'red'}}>{state} can you see me</div>

      <div style={stylebtn}>
          <button onClick={() => setCount(prev => prev + 1)}>+</button>
          <div style={{margin: '12px'}}>{count}</div>
          <button onClick={() => setCount(prev => prev - 1)}>-</button>
      </div>
    </div> 
  );
};

export default App;


const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const stylebtn = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
