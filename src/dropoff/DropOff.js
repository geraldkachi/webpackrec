import React, { useState } from 'react'
import "./styles.css"

const DropOff = ({form, handleChange}) => {

    const [isActive, setActive] = useState(false);
    const [isActive1, setActive1] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };
      const toggleClass1 = () => {
        setActive1(!isActive1);
      };

    return (
        <div>
            <div className="dropoff">

            <p className="para">Does your order include multiple pickup or drop off addresses?</p>
            <div className="btnbody">
                <Link to="/" onClick={toggleClass} className={isActive && "active"} >Yes</ Link>
                <Link to="/" onClick={toggleClass1} className={isActive1 && "active1"} >No</ Link>
            </div>
            </div>
        </div>
    )
}

export default DropOff
