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
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={ProjectBody} /> */}
        {loading ? 
        <div className="slash" style={{display:'flex', backgroundColor: "#282c34", textAlign:"center", justifyContent:'center', alignItems:'center', height: "100vh"}}>
          <ClimbingBoxLoader color={'#F37A24'} loading={loading}  size={30} />
        </div>
        : 
        <ProjectBody />
        }
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
