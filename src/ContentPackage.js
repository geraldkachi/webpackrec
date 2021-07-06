import React from 'react'
import "./styles.css";
// import {TextField} from "@material-ui/core"


const ContentPackage = ({form, handleChange, nextStep, prevStep }) => {
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
                <input type="text" placeholder="Kindly describe the content of your package" autoComplete='off' name="description" required value={form.description} onChange={handleChange} />
            </div>
            {/* <div>
                <label>Content Package</label>
                <TextField placeholder="Kindly describe the content of your package" autoComplete='off' name="description" required value={form.description} onChange={handleChange} />
            </div> */}
            <a onClick={Continue}>Next</a>
            <a onClick={BackCon}>Prev</a> 
        </div>
    )
}

export default ContentPackage
