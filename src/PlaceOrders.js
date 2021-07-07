import React, { useState } from 'react'
import "./styles.css"

const PlaceOrders = ({ nextStep, form, handleChange }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showYes, setShowYes] = useState(true);
	const [showNo, setShowNo] = useState(true);
	const [step, setStep] = useState(0);

    const YesStep = () => {
        setStep(stepvalue => stepvalue + 1)
    }

    const Continue = e => {
        e.preventDefault();
        nextStep()
    }

    const makeFalse = () => {
        setShowNo(!showNo)
        // showYes()
    }

    switch (step) {
        case 0:
            return (
                <>
                {showYes ? <div className="plan">
                    <h2>Delivery plans</h2>
                    <p className="para">Are you subscribed to any of our delivery plans?</p>
                    <div className="btnbody">
                        <a to="/" onClick={() => {setShowYes(!showYes)}} className="active" >Yes</ a>
                        <a to="/" onClick={YesStep} className="active1">No</ a>
                    </div>
                </div> :
                <p style={{marginTop: "80px", marginBottom:"10px", textAlign:'center'}} className="para">place a call to the customer care no: (0908 722 6001)</p>}
                </>
            )
        case 1: 
        return (
            <>
                 {showYes ?
                    <div className="drop-off-add">
                        <h1></h1>
                        <div className={showYes && dropStyle}>
                        <p className="para">Does your order include multiple pickup or drop off addresses?</p>
                        <div className="btnbody">
                            <a to="/"onClick={() => {setShowYes(!showYes)}} className="active" >Yes</a>
                            <a to="/" onClick={YesStep} className="active1">No</a>
                        </div>
                        </div>
                    </div> : 
                    // <a style={{marginTop:'20px'}} onClick={Continue}>Next</a> 
                    <p style={{marginTop: "80px", marginBottom:"10px", textAlign:'center'}} className="para">send an email to info@dotexpress.app</p>
                }
            </>
        )
        case 2: 
        return (
            <>
                {showYes ? 
                <div className="drop-off-add">
                        <h1></h1>
                        <div className={showYes && dropStyle}>
                        <p className="para">Place you input PickUp Address and DropOff Address</p>
                        <div>
                            <div className="input-container">
                                <label>PickUp Address</label>
                                <input type="text" placeholder="Drop off phone number" autoComplete='off' name="pickUpAddress" required value={form.pickUpAddress} onChange={handleChange} />
                            </div>
                            <div className="input-container">
                                <label>Drop off Address</label>
                                <input type="text" placeholder="Drop off phone number" autoComplete='off' name="dropOffAddress" required value={form.dropOffAddress} onChange={handleChange} />
                            </div>
                        </div>
                        <select name="" id="">
                            <option value="">None of the below</option>
                            <option value="express">Express</option>
                            <option value="regular">Regular</option>
                        </select>
                        <a to="/" onClick={YesStep} className="active1">Yes</a>
                        {/* <div className="btnbody">
                            <a to="/"onClick={() => {}} className="active" >Yes</a>
                        </div> */}
                        </div>
                    </div> : 
                     <a style={{marginTop:'20px'}} onClick={Continue}>Next</a> 
                     
                }
            </>
        )
        case 3: 
        return (
            <>
            {showYes ?
                <div>
                <p className="para">delivery price.</p>
                <p className="para" style={{marginTop:'10px'}}>This delivery will cost you N2,000.00</p>
                <p className="para">Happy to proceed?</p>
                <div className="btnbody">
                    <a to="/"onClick={Continue} className="active" >Yes</a>
                    {/* <a to="/"onClick={() => {setShowYes(!showYes)}} className="active" >No</a> */}
                </div>
            </div> :
            <div>

            </div>
            } 

            </>
        )
    
        default:
            break;
    }

    // return (
    //     <div>
    //         {/* <h1>Place your Order</h1> */}
    //         <div>
               

                   

    //             <div></div>
    //         </div>
    //     </div>
    // )
}

const dropStyle = {
    display: "none"
}

export default PlaceOrders
