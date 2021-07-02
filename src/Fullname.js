import React from 'react'
import "./styles.css";

const Fullname = ({ form, handleChange, nextStep, nextPrev }) => {
    const { fullname } = form
    const Continue = e => {
        e.preventDefault();
        nextStep()
    }
console.log(nextPrev)
    const BackCon = e => {
        e.preventDefault();
        nextPrev()
    }
    // console.log(form)
    return (
        <div className='fullname'>
            <div className="input-container">
                <label>Full Name</label>
                <input type="text" autoComplete='off' name="fullname" required value={fullname} onChange={handleChange("fullname")} />
            </div>
            <a onClick={BackCon}>Prev</a> 
            <a onClick={Continue}>Next</a> 
        </div>
    )
}

export default Fullname
