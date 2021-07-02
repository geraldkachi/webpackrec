import React from 'react'
import "./styles.css";

const PhoneNumber = () => {
    return (
        <div className="phonenumber">
            <div className="input-container">
                <label>Pick Address</label>
                <input type="text" placeholder="Phone Number" autoComplete='off' name="phonenumber" required value={form.phonenumber} onChange={handleChange} />
            </div>
        </div>
    )
}

export default PhoneNumber
