import React from 'react'
import "./styles.css";

const DropoffphoneNumber = () => {
    return (
        <div>
            <div className="input-container">
                <label>Drop off phone number</label>
                <input type="text" placeholder="Drop off phone number" autoComplete='off' name="dropoffphone" required value={form.fullname} onChange={handleChange} />
            </div>
        </div>
    )
}

export default DropoffphoneNumber
