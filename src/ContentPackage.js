import React from 'react'
import "./styles.css";

const ContentPackage = () => {
    return (
        <div className="content-package">
            <div className="input-container">
                <label>Content Package</label>
                <input type="text" autoComplete='off' name="contentpackage" required value={form.contentpackage} onChange={handleChange} />
            </div>
        </div>
    )
}

export default ContentPackage
