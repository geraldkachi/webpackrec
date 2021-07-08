import React, { useContext } from 'react'
import { OrderContext } from './ContextPro';
import "./styles.css";
// import {TextField} from "@material-ui/core"


const RecipientName = ({ handleChange, nextStep, prevStep }) => {
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
                <label>Drop off details:</label>
                <input type="text" placeholder="Please enter the recipient's name" autoComplete='off' name="recipientName" required value={form.recipientName} onChange={handleChange} />
            </div>
            <a onClick={Continue}>Next</a>
            <a onClick={BackCon}>Back</a> 
        </div>
    )
}

export default RecipientName
