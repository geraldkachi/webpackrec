import React, { useContext } from "react";
import { OrderContext } from "./ContextPro";
import "./styles.css";

const WhichofThese = ({ nextStep, prevStep }) => {
  const { form, setForm } = useContext(OrderContext)

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const BackCon = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleCustomer = e => {
    const {value} = e.target;

    if(value === "pickup"){
      setForm({...form, routeStatus: { name: form.fullName, phoneNumber: form.pickUpPhoneNumber }})
      console.log( setForm({...form, routeStatus: {name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}))
      return 
    }
    if(value === "dropoff"){
      setForm({...form, routeStatus: { name: form.fullName, phoneNumber: form.pickUpPhoneNumber }})
      // console.log( setForm({...form, routeStatus: {name: form.fullName, phoneNumber: form.pickUpPhoneNumber }}))
      return 
    }

    if(value === "none") {
      return (
        <>user's name and phone number, then send the order details to the endpoint provided by mr maroof to save order details
          <p className="para">user's name: {form.fullName}</p>
          <p className="para">phone number: {form.pickUpPhoneNumber}</p>
        </>
      )
    }
  }

  return (
    <>{handleCustomer ?

      <div>
      <p className="para"> Which of these are you?</p>
      <div style={{marginTop: "20px", marginBottom: "20px"}}>
        <select value={form.routeStatus} name="routeStatus" onChange={handleCustomer}>Pick up
            <option name="pickup" value="pickup">Pick up</option>
            <option name="dropoff" value="dropoff">Drop off</option>
            <option name="none" value="none">None of the above</option>
        </select>
      </div>
      <a onClick={Continue}>Next</a>
      <a onClick={BackCon}>Back</a>
      </div>
      : 
      (null)
      }
    </>
  );
};

export default WhichofThese;
