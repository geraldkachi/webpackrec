import React from 'react'
import "./styles.css";

const PickupPhoneNumber = ({form, nextStep, prevStep, handleChange}) => {
    // const {} = form

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }

    return (
        <div className="pickUpPhoneNumber">
            <div className="input-container">
                <label>Pickup Phone Number</label>
                <input type="text" name="pickUpPhoneNumber" placeholder="pickup-number" autoComplete='off' name="pickUpPhoneNumber" required value={form.pickUpPhoneNumber} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a> 
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default PickupPhoneNumber