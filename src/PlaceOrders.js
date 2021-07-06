import React, { useState } from 'react'
import "./styles.css"

const PlaceOrders = ({ nextStep }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showYes, setShowYes] = useState(true);
	const [showNo, setShowNo] = useState(true);

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }

    const makeFalse = () => {
        setShowNo(!showNo)
        // showYes()  
    }

    return (
        <div>
            {/* <h1>Place your Order</h1> */}
            <div>
                {showYes ? <div className="plan">
                    <h2>Delivery plans</h2>
                    <p className="para">Are you subscribed to any of our delivery plans?</p>
                    <div className="btnbody">
                        <a to="/" onClick={() => {setShowYes(!showYes)}} className="active" >Yes</ a>
                        <a to="/" onClick={makeFalse} className="active1">No</ a>
                    </div>
                </div> :
                <p style={{marginTop: "80px", marginBottom:"10px", textAlign:'center'}} className="para">place a call to the customer care no: (0908 722 6001)</p>}

                    {!showNo ?
                    <div className="drop-off-add">
                        <h1></h1>
                        <div className={showYes && dropStyle}>
                        <p className="para">Does your order include multiple pickup or drop off addresses?</p>
                        <div className="btnbody">
                            <a to="/"onClick={() => {}} className="active" >Yes</a>
                            <a to="/" onClick={() => {}} className="active1">No</a>
                        </div>
                        </div>
                    </div> : 
                    // <a style={{marginTop:'20px'}} onClick={Continue}>Next</a> 
                    <div>{showYes}</div>
                }
            </div>
        </div>
    )
}

const dropStyle = {
    display: "none"
}

export default PlaceOrders
