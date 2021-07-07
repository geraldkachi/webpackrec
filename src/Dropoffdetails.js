import React from 'react'
import "./styles.css";
import {TextField} from "@material-ui/core"


const Dropoffdetails = ({ form, handleChange, nextStep, prevStep }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }

    return (
        <div>
             <div className="input-container">
                <label>Drop off details:</label>
                <input type="text" placeholder="Please enter the recipient's name" autoComplete='off' name="recipientName" required value={form.recipientName} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a>
            <a onClick={BackCon}>Prev</a> 
        </div>
    )
}

export default Dropoffdetails
