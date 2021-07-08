import React, { useContext } from 'react'
import "../styles.css"
import { NavLink } from "react-router-dom"
// import PropTypes from 'prop-types'
import {TextField} from "@material-ui/core"
import { OrderContext } from '../ContextPro'


 const PickupAddress = ({ handleChange, nextStep, prevStep }) => {
    const { form, setForm } = useContext(OrderContext)

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }
    
    const { pickUpAddress } = form

        return (
            <div>
                <div className="name">
                    <div className="input-container">
                        <label>Pick Address</label>
                    <input type="text" placeholder="pick-up-address" autoComplete='off' name="pickUpAddress" required value={pickUpAddress} onChange={handleChange} />
                        
                    </div>
                    <a onClick={Continue}>Next</a>
                    <a onClick={BackCon}>Back</a> 
                </div>
            </div>
        )
    
}

export default PickupAddress