import React, { useContext, useState } from 'react'
import "./styles.css"
import axios from "axios"
import { OrderContext } from './ContextPro'


const marufUrl = `http://fab314050867.ngrok.io/api/deliveryprice`
const PlaceOrders = ({ nextStep }) => {
    const { form, setForm } = useContext(OrderContext)

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

    const handleChange = e => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
      };

      const loadData = () => {
        axios.post(`${marufUrl}`, {
            // headers: myHeaders,
               deliveryMethod:  form.deliveryMethod,
               pickUpAddress: form.pickUpAddress,
               dropOffAddress: form.dropOffAddress,
            // redirect: 'follow'
        })
        .then((res) => {
            console.log(form)
            setForm({...form, amount: res.data.deliveryOutcome.amountToPay})
            console.log({form: res.data})
            console.log(res)
            console.log(form.deliveryMethod)
            YesStep()
          })
          .catch((err) => console.log(err));
      };

    //   const loadData = async () => {
    //     await fetch(`${marufUrl}/api/deliveryprice`, {
    //         method: "POST",
    //         mode:'no-cors'
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setForm(data))
    //       .catch((err) => console.log(err));
    //   };

      const handleDelSubmit = e => {
        e.preventDefault();
        loadData()
        // setForm({
        //     pickUpAddress: "", 
        //     dropOffAddress: "",
        //     deliveryMethod: "",
        // })
        console.log(form)
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
                        <a to="/" onClick={YesStep} className="active1">No</a>
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
                            <a to="/"onClick={() => {setShowYes(!showYes)}} className="active">Yes</a>
                            <a to="/" onClick={YesStep} className="active1">No</a>
                        </div>
                        </div>
                    </div> : 
                    // <a style={{marginTop:'20px'}} onClick={Continue}>Next</a> 
                    <p style={{marginTop: "80px", marginBottom:"10px", textAlign:'center'}} className="para">Sending an email to info@dotexpress.app</p>
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
                            <p className="para">Place your input PickUp Address and DropOff Address</p>
                            <div>
                                <div className="input-container">
                                    <label>PickUp Address</label>
                                    <input type="text" placeholder="PickUp Address" autoComplete='off' name="pickUpAddress" required value={form.pickUpAddress} onChange={handleChange} />
                                </div>
                                <div className="input-container">
                                    <label>Drop off Address</label>
                                    <input type="text" placeholder="Drop off Address" autoComplete='off' name="dropOffAddress" required value={form.dropOffAddress} onChange={handleChange} />
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'30px'}}>
                                <select name="deliveryMethod" value={form.deliveryMethod} id="deliveryMethod" onChange={handleChange} style={{padding:'7px', borderRadius:'10px'}}>
                                    <option value="" name="">Select</option>
                                    <option value="express" name="express">Express</option>
                                    <option value="regular" name="regular">Regular</option>
                                </select>
                                <a type='submit' onClick={handleDelSubmit} style={{marginTop: "10px"}}>Submit</a>
                            </div>
                        </div>
                        <a to="/" style={{marginTop: "60px", textAlign:'center'}} onClick={YesStep} className="active1">Continue</a>
                    </div> : 
                    <div>
                        {/* <a style={{marginTop:'20px', textAlign:'center'}} onClick={Continue}>Continue</a> */}
                    </div>
                }
            </>
        )
        case 3: 
        return (
            <>
            {showYes ?
                <div>
                <p className="para">PicKup Address:     {form.pickUpAddress}</p>
                <p className="para">Drop Off Address:     {form.dropOffAddress}</p>
                {console.log(form.pickUpAddress)}
                {console.log(form.dropOffAddress)}
                {console.log(form.deliveryMethod)}
                <p className="para">Delivery price.</p>
                <p className="para" style={{marginTop:'10px'}}>This delivery will cost you N{form.amount}</p>
                <p className="para">Happy to proceed?</p>{form.deliveryMethod}
                <div className="btnbody">
                    <a to="/"onClick={Continue} className="active" >Yes</a>
                    <a to="/"onClick={() => {setShowYes(!showYes)}} className="active" >No</a>
                </div>
            </div> :
            <div>
                <p style={{marginTop: "80px", marginBottom:"10px", textAlign:'center'}} className="para">Order cancelled.</p>
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
// in your terminal 
// node
// require('http')  this is to viiew status code
