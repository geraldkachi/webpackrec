import React, { useState, useEffect, useContext } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import {  Link  } from "react-router-dom";
import PickupAddress from "./Pickup/PickupAddress"
import PickupPhoneNumber from "./PickupPhoneNumber"
// import { useFormik } from "formik";
// import * as Yup from "yup"
import "./styles.css";
import Fullname from "./Fullname"
import ContentPackage from "./ContentPackage";
import MonetaryPackage from "./MonetaryPackage";
import RecipientName from "./RecipientName";
import DropoffphoneNumber from "./DropoffphoneNumber";
import Confirm from "./Confirm";
import PlaceOrders from "./PlaceOrders"
import WhichofThese from "./WhichofThese";
import AllForm from "./AllForm";
import { OrderContext } from './ContextPro';


const ProjectForm = ({ step, nextStep, prevStep, handleChange, handleSubmit }) => {
  const { form, setForm } = useContext(OrderContext)



  // form integration
 
  // const handleChange = input => (e) => {
  //   setForm({ [input]: e.taget.value });
  // };

  // end for 
  // const { fullName, pickUpPhoneNumber, dropOffPhoneNumber, description, recipientName, pickUpAddress, dropOffAddress, deliveryMethod } = form

  // const values = {  fullname, pickupphone, pickupaddress, dropoffphone, dropoffaddress, contentpackage, monetary, dropoffaddress, phonenumber  }

  switch (step) {

    case 0: 
    // return <AllForm {...{nextStep}} {...{prevStep}} />



      case 0:
        return <PlaceOrders {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      // case 1:
      //   return <AllForm {...{nextStep}} {...{prevStep}} {...{handleChange}} />
      
      case 1:
        return <Fullname {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 2:
        return <PickupPhoneNumber {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 3:
        return <ContentPackage {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} /> 
      case 4: 
        return <MonetaryPackage {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 5: 
        return <RecipientName {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 6: 
        return <PickupAddress {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 7: 
        return <DropoffphoneNumber {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 8: 
      return  <WhichofThese {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 9: 
      return  <Confirm {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      default:
        break;
  }

  return (
    <>
      <div>
        <h2 style={{textAlign: 'center'}}>Thank You for Submitting</h2>
        <div>
            <div style={{margin:'20px'}}>
              <p> Phone-Number: {form.pickUpPhoneNumber}</p>
              <p>Monetary: {form.monetary}</p>
              <p>Description: {form.description}</p>
            </div>
            <div style={{margin:'20px'}}>
              <a href={form.checkoutLink}>Pay Here</a>
            </div>
        </div>
      </div>
    </>
  );
};


export default ProjectForm;


// <Link to="/" onClick={toggleClass} className={isActive && "active"} >Express</ Link>
//<Link to="/" onClick={toggleClass2} className={isActive2 && "active2"} >Regular</ Link> 