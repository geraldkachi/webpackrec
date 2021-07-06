import React from 'react'
import "./styles.css";

const DropoffphoneNumber = ({form, handleChange, nextStep, prevStep }) => {

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
                <label>Drop off phone number</label>
                <input type="text" placeholder="Drop off phone number" autoComplete='off' name="dropoffphone" required value={form.dropoffphone} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default DropoffphoneNumber
