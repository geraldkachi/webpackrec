import React, { useContext } from "react";
import { OrderContext } from "./ContextPro";
import "./styles.css";
import axios from "axios"

const marufUrl = `https://4efc3c872c8c.ngrok.io/api/save`
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
     .then((res) => {
       setForm({...form})
       nextStep();
     })
     .catch((err) => console.log(err));
 };

  const Continue = (e) => {
    e.preventDefault();
    // loadData()
    nextStep();
  };
  const BackCon = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleCustomer = e => {
    setForm({...form, routeStatus: e.target.value})
    //  it handle the select > option values
   // console.log(e)
    // const {value} = e.target;
    // setForm(value)

    // if(value === "pickup" || "dropoff"){
    //   loadData()
    //   // setForm({...form, routeStatus: { name: form.fullName, phoneNumber: form.pickUpPhoneNumber }})
    //   console.log( setForm({...form, routeStatus: {name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}))
    //   return (
    //     <>
    //       <div>
    //         <p className="para">User Name: {form.fullName}</p>
    //         <p className="para">Phone Number: {form.pickUpPhoneNumber}</p>

    //         <p> Phone-Number: {data.orderDetails.pickUpPhoneNumber}</p>
    //         <p>Description: {data.orderDetails.description}</p>
    //         <p>Monetary: {data.orderDetails.monetary}</p>
    //         <a>Pay Here {data.checkoutLink}</a>
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
    <>
      <div>
      <p className="para"> Which of these are you?</p>
      <div style={{marginTop: "20px", marginBottom: "20px"}}>
        <select value={form.routeStatus} name="routeStatus" id="routeStatus" onChange={handleCustomer} style={{padding:'7px', borderRadius:'10px'}}>
            <option value="pickup">Pick up</option>
            <option value="dropoff">Drop off</option>
            <option value="none">None of the above</option>
        </select>
      </div>
      <div>

      </div>
        <div style={{marginTop:'15px'}}>
          <a onClick={Continue}>Next</a>
          <a onClick={BackCon}>Back</a>
        </div>
      </div>      
    </>
  );
};

export default WhichofThese;
