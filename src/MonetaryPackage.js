import React from 'react'
import "./styles.css";

const MonetaryPackage = () => {
    return (
        <div className="monetary">
            <div className="input-container">
                <label>What is the monetary value of your package?</label>
                <input type="text" placeholder="Value of item" autoComplete='off' name="monetary" required value={form.monetary} onChange={handleChange} />
            </div>
        </div>
    )
}

export default MonetaryPackage
