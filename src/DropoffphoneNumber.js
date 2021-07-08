import React, { useContext } from 'react'
import "./styles.css";
import { OrderContext } from './ContextPro';


const DropoffphoneNumber = ({ handleChange, nextStep, prevStep }) => {
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
        <div>
            <div className="input-container">
                <label>Drop off phone number</label>
                <input type="tel" placeholder="Drop off phone number" autoComplete='off' name="dropOffPhoneNumber" required value={form.dropOffPhoneNumber} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default DropoffphoneNumber
