import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BodyRoute from "./BodyRoute"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BodyRoute} />
      </Switch>
    </Router>
  );
};

export default App;

// const bodyStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };
// const stylebtn = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

{
  /* <button onClick={() => setState((state) => !state)}>see me</button>
<div style={{ backgroundColor: "red" }}>{state} can you see me</div>

<div style={stylebtn}>
<button onClick={() => setCount((prev) => prev + 1)}>+</button>
<div style={{ margin: "12px" }}>{count}</div>
<button onClick={() => setCount((prev) => prev - 1)}>-</button>
</div> */
}
