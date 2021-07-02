import React, { useState } from 'react'
import {  NavLink  } from "react-router-dom";
import './styles.css    '


const DeliveryPlan = ({ form, handleChange }) => {

    const [isActive, setActive] = useState(false)
    const [isActive1, setActive1] = useState(false)

    const toggleClass = () => {
        setActive(!isActive)
      };
      const toggleClass1 = () => {
        setActive1(!isActive1)
      };

      const backgroundColor = "red"

    return (
        <div>
            <div className="plan">
                <p className="para">Are you subscribed to any of our delivery plans?</p>
                <div className="btnbody">
                    <NavLink to="/" onClick={toggleClass} activeStyle={backgroundColor} className={isActive && "active"} >Yes</ NavLink>
                    <NavLink to="/" onClick={toggleClass1} className={isActive1 && "active1"} >No</ NavLink>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPlan
