import React, { Component } from 'react'
import "../styles.css"
import { NavLink } from "react-router-dom"
// import PropTypes from 'prop-types'

 const PickupAddress = ({values, handleChange, nextStep, prevStep }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }
    
    const { pickupaddress } = values

        return (
            <div>
                <div className="name">
                    <div className="input-container">
                        <label>Pick Address</label>
                        <input type="text" placeholder="pick-up-address" autoComplete='off' name="pickupaddress" required value={pickupaddress} onChange={handleChange} />
                        
                    </div>
                    <a onClick={Continue}>Next</a>
                    <a onClick={BackCon}>Prev</a> 
                </div>
            </div>
        )
    
}

export default PickupAddress