import React, { useContext } from 'react'
import "./styles.css";
import { OrderContext } from './ContextPro';


const ContentPackage = ({ handleChange, nextStep, prevStep }) => {
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
        <div className="content-package">
            <div className="input-container">
                <label>Content Package</label>
                <textarea type="text" cols='30' rols="5" placeholder="Kindly describe the content of your package" autoComplete='off' name="description" required value={form.description} onChange={handleChange}></textarea>
            </div>
            {/* <div>
                <label>Content Package</label>
                <TextField placeholder="Kindly describe the content of your package" autoComplete='off' name="description" required value={form.description} onChange={handleChange} />
            </div> */}
            <a onClick={Continue}>Next</a>
            <a onClick={BackCon}>Back</a>
        </div>
    )
}

export default ContentPackage
