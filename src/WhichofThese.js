import React, { useContext } from "react";
import { OrderContext } from "./ContextPro";
import "./styles.css";
import axios from "axios"

const marufUrl = `https://7feb72321b62.ngrok.io/api/save`
const WhichofThese = ({ nextStep, prevStep }) => {
  const { form, setForm } = useContext(OrderContext)

  const loadData =  () => {
    axios.post(`${marufUrl}`, {
     fullName: form.fullName,
     pickUpPhoneNumber: form.pickUpPhoneNumber,
     pickUpPhoneNumber: form.pickUpPhoneNumber,
     description: form.description,
     pickUpAddress: form.pickUpAddress,
     monetary: form.monetary,
     recipientName: form.recipientName,
     dropOffPhoneNumber: form.dropOffPhoneNumber,
     routeStatus: form.routeStatus,
   })

     // .then((res) => res.json())
     console.log(form)
     .then((res) => {
       setForm({form})
       nextStep();
     })
     console.log(setForm({...form}))
     .catch((err) => console.log(err));
     console.log(setForm({...form}))
 };

  const Continue = (e) => {
    e.preventDefault();
    loadData()
    nextStep();
  };
  const BackCon = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleCustomer = e => {
    // console.log(e)
    // const {value} = e.target;
    // setForm(value)
    setForm(e.target.value)

    // if(value === "pickup" || "dropoff"){
    //   loadData()
    //   // setForm({...form, routeStatus: { name: form.fullName, phoneNumber: form.pickUpPhoneNumber }})
    //   console.log( setForm({...form, routeStatus: {name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}))
    //   return (
    //     <>
    //       <div>
    //         <p className="para">User Name: {form.fullName}</p>
    //         <p className="para">Phone Number: {form.pickUpPhoneNumber}</p>
    //       </div>
    //     </>
    //   )
    // } else if (value === "none") {
    //   return (
    //     <>
    //       <div>user's name and phone number save order details</div>
    //       <p className="para">user's name: {form.fullName}</p>
    //       <p className="para">phone number: {form.pickUpPhoneNumber}</p>
    //     </>
    //   )
    // }
  }

  // (value === "dropoff"){
  //   setForm({...form, routeStatus: { name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}) 
  //   // console.log( setForm({...form, routeStatus: {name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}))
  //   return 
  // }
  // if

  return (
    <>{handleCustomer ?
      <div>
      <p className="para"> Which of these are you?</p>
      <div style={{marginTop: "20px", marginBottom: "20px"}}>
        <select value={form.routeStatus} name="routeStatus" id="routeStatus" onChange={handleCustomer} style={{padding:'7px', borderRadius:'10px'}}>
            <option value="pickup">Pick up</option>
            <option value="dropoff">Drop off</option>
            <option value="none">None of the above</option>
        </select>
        <div>
          <label>Pick Up</label>
          <input type="radio" checked={form.routeStatus === "pickup"} value="pickup" onChange={handleCustomer} />
        </div>
        <div>
          <label>Drop Off</label>
          <input type="radio" checked={form.routeStatus === "dropoff"} value="dropoff" onChange={handleCustomer} />
        </div>
        <div>
          <label>None of the Above</label>
          <input type="radio" checked={form.routeStatus === "none"} value="none" onChange={handleCustomer} />
        </div>
        <div>
            <p>routeStatus {"From Content RouteStatus" +  form.routeStatus}</p>
            
            {console.log("from content" + form.deliveryMethod , form)}
        </div>
      </div>
      <a onClick={Continue}>Next</a>
      <a onClick={BackCon}>Back</a>
      </div>
      :
      (
        <>
          {value === "pickup" || "dropoff" ?
            <div>
                <p className="para">User Name: {form.fullName}</p>
                <p className="para">Phone Number: {form.pickUpPhoneNumber}</p>
            </div>
            :
            (null)
          }
        </>
      )
      }
    </>
  );
};

export default WhichofThese;
