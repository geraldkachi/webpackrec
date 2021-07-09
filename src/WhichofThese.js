import React, { useContext } from "react";
import { OrderContext } from "./ContextPro";
import "./styles.css";

const WhichofThese = ({  nextStep }) => {
  const { form, setForm } = useContext(OrderContext)

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const BackCon = (e) => {
    e.preventDefault();
    prevStep();
  };

  function handleCustomer(e){
    const {name, value} = e.target;


    // if(value === "pickup"){
    //   setForm({...form, customerDetails: {name: form.fullName, phoneNumber: form.pickupPhoneNumber }})
    // }

    // if(value === "none") {
    //   return null
    // }
  }
  return (
    <div>
      <p className="para"> Which of these are you?</p>
      <div style={{marginTop: "20px", marginBottom: "20px"}}>
        <select value={form.customerDetails} name="customerDetails" onChange={handleCustomer}>Pick up
            <option name="pickup" value="pickup">Pick up</option>
            <option name="dropoff" value="dropoff">Drop off</option>
            <option name="none" value="none">None of the above</option>
        </select>
      </div>
      <a onClick={Continue}>Next</a>
      <a onClick={BackCon}>Back</a>
    </div>
  );
};

export default WhichofThese;
