import React from 'react'
import "./styles.css";
import {TextField} from "@material-ui/core"
// import {MuiThemeProvider} from "@material-ui/core"

const Fullname = ({ values, handleChange, nextStep }) => {
    const { fullname } = values
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    


    // console.log(form)
    return (
        <>
        <div className='fullname'>
            <div className="input-container">
                <label>Full Name</label>
                <input type="text" placeholder="full-name" autoComplete='off' name="fullname" required value={fullname} onChange={handleChange} />
            </div>
        </div>
        <a onClick={Continue}>Next</a> 
    </>
    )
}

export default Fullname
