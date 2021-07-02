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

              {/* plan */}
              <form className="form">
    
                {/* adressess */}
                {/* <div className="address">
                    <p className="para">Does your order include multiple pickup or drop off addresses?</p>
                    <div className="btnbody">
                      <NavLink to="/" onClick={toggleClass}  >Yes</ NavLink>
                      <NavLink to="/" onClick={toggleClass1}  >No</ NavLink>
                    </div>
                </div> */}
    
                {/* form not */}
                <ProjectForm />
                {/*  */}
              </form>
    
                
    
              <div className="pagination">  
                {/* <Link to="" onClick={nextStep}>Next</Link> */}
                {/* <Link to="" onClick={prevStep}>Previous</Link> */}
              </div>
    
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
