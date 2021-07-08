import React, { useContext } from 'react'
import "./styles.css";
import { OrderContext } from './ContextPro';

const PickupPhoneNumber = ({ nextStep, prevStep, handleChange}) => {
    const { form, setForm } = useContext(OrderContext)

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
                <input type="tel" name="pickUpPhoneNumber" placeholder="pickup-number" autoComplete='off' name="pickUpPhoneNumber" required value={form.pickUpPhoneNumber} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a> 
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default PickupPhoneNumber