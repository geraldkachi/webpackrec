import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectBody from "./ProjectBody";

const App = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(10);

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProjectBody} />
      </Switch>
    </Router>
  );
};

export default App;

const bodyStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const stylebtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

{
  /* <button onClick={() => setState((state) => !state)}>see me</button>
<div style={{ backgroundColor: "red" }}>{state} can you see me</div>

<div style={stylebtn}>
<button onClick={() => setCount((prev) => prev + 1)}>+</button>
<div style={{ margin: "12px" }}>{count}</div>
<button onClick={() => setCount((prev) => prev - 1)}>-</button>
</div> */
}
