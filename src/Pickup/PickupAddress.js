import React, { Component } from 'react'
import "../styles.css"
import { NavLink } from "react-router-dom"
// import PropTypes from 'prop-types'

 const PickupAddress = ({form, handleChange, nextStep}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }

    const { pickaddress } = form

        return (
            <div>
                <div className="name">
                    <div className="input-container">
                        <label>Pick Address</label>
                        <input type="text" autoComplete='off' name="pickaddress" required value={pickaddress} onChange={handleChange("pickaddress")} />
                    </div>
                    <a onClick={Continue}>Next</a>
                </div>
            </div>
        )
    
}

export default PickupAddress