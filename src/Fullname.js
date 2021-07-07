import React from 'react'
import "./styles.css";
import {TextField} from "@material-ui/core"
import { OrderContext } from './ContextPro';
// import {MuiThemeProvider} from "@material-ui/core"

const Fullname = ({form, handleChange, nextStep, prevStep }) => {
    // const { form } = React.useContext(OrderContext); 

    const { fullName } = form
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }
    


    // console.log(form)
    return (
        <>
        <div className='fullName'>
            <div className="input-container">
                <label>Full Name</label>
                <input type="text" placeholder="full-name" autoComplete='off' name="fullName" required value={fullName} onChange={handleChange} />
            </div>
        </div>
        <a onClick={Continue}>Next</a> 
        <a onClick={BackCon}>Back</a>  
    </>
    )
}

export default Fullname
