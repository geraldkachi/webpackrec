import React from 'react'
import "./styles.css";

const Dropoffdetails = () => {
    return (
        <div>
             <div className="input-container">
                <label>Drop off details:</label>
                <input type="text" placeholder="Please enter the recipient's name" autoComplete='off' name="dropoffaddress" required value={form.dropoffaddress} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Dropoffdetails
