import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./styles.css";
import ProjectBody from "./ProjectBody";

const BodyRoute = () => {
    let [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, []);

    return (
        <div>
            {loading ?
            <div className="slash" style={{display:'flex', backgroundColor: "#282c34", textAlign:"center", justifyContent:'center', alignItems:'center', height: "100vh"}}>
                <ClimbingBoxLoader color={'#F37A24'} loading={loading}  size={30} />
            </div>
            :
            <ProjectBody />
            }
        </div>
    )
}

const bodyStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    margin: "30px",
    height: '70vh',
    // textAlign: 'center',
  };

export default BodyRoute
