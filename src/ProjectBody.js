import React, { useState } from 'react'
import {  NavLink  } from "react-router-dom";
import ProjectForm from './ProjectForm';
import "./styles.css";


const ProjectBody = () => {

    // const [isActive, setActive] = useState(false);
    // const [isActive1, setActive1] = useState(false);

    
    // const toggleClass = () => {
    //     setActive(!isActive);
    //   };
    //   const toggleClass1 = () => {
    //     setActive1(!isActive1);
    //   };
    //   className={isActive && "active"}  className={isActive1 && "active1"}
    return (
        <>
          <div style={bodyStyle}>
            <div>
              <div className="orderform">
                <h1 style={{textAlign:'center'}}>☘️ Order Form ☘️</h1>
                <hr className="headline" />
                <h2>Welcome to Home Page</h2>
              </div>
              <form className="form">
                <ProjectForm />
              </form>
            </div>
          </div>
        </>
      );
}


const bodyStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    margin: "30px",
    height: '70vh',
    // textAlign: 'center',
  };

export default ProjectBody
