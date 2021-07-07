import React from 'react'
import "./styles.css";
import {TextField} from "@material-ui/core"


const MonetaryPackage = ({form, handleChange, nextStep, prevStep }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }
    return (
        <div className="monetary">
            <div className="input-container">
                <label>What is the monetary value of your package?</label>
                <input type="text" placeholder="Value of item" autoComplete='off' name="monetary" required value={form.monetary} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a>
            <a onClick={BackCon}>Prev</a> 
        </div>
    )
}

export default MonetaryPackage
