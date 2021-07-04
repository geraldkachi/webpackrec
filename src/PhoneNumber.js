import React from 'react'
import "./styles.css";

const PhoneNumber = ({values, nextStep, prevStep, handleChange}) => {
    // const {} = values

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }

    return (
        <div className="phonenumber">
            <div className="input-container">
                <label>Pickup Phone Number</label>
                <input type="text" name="phonenumber" placeholder="pickup-number" autoComplete='off' name="phonenumber" required value={values.phonenumber} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a> 
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default PhoneNumber