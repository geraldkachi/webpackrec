import React, { useState, useEffect } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {  Link  } from "react-router-dom";
import PickupAddress from "./Pickup/PickupAddress"
import PhoneNumber from "./PhoneNumber"
// import { useFormik } from "formik";
// import * as Yup from "yup"
import "./styles.css";
import Fullname from "./Fullname"
import ContentPackage from "./ContentPackage";
import MonetaryPackage from "./MonetaryPackage";
import Dropoffdetails from "./Dropoffdetails";
import DropoffphoneNumber from "./DropoffphoneNumber";
import Confirm from "./Confirm";

const ProjectForm = () => {

  
  const [step, setStep] = useState(0); // this should be 0
  // let [loading, setLoading] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const [isActive1, setActive1] = useState(false); 
  

  const [form, setForm] = useState({ 
    fullname: "", 
    pickupaddress: "", 
    pickupphone: "",
    dropoff: "",  
    contentpackage: "", 
    monetary: "", 
    dropoffaddress: "", 
    phonenumber:"" 
  });

  // const { pickupaddress ,dropoff , email ,contentpackage,  monetary } = form
  // const { pathname } = useLocation()
  // const splitLocation = pathname.split("/");

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = (e) => {
    setStep(step - 1)
  }


  // ths is for slash screen
  // useEffect(() => {
  //   setLoading(true);
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  // splash screen


  // form integration
 
  const handleSubmit = e => {
    e.preventDefault();
    setForm({
      fullname: "",
      phonenumber: "",
      pickupphone: "",
      contentpackage: "",
      monetary: "",
      dropoffaddress: "",
      pickupaddress: "",
      dropoffaddress: "",
      dropoffphone: ""
    });
  }

  // const handleChange = input => (e) => {
  //   setForm({ [input]: e.taget.value });
  // };

   const handleChange =  (e) => {
     e.preventDefault();
    const {name, value} = e.target
    setForm({ [name]: value });
    // setForm({ ...form, [input]: value });
    // setForm({ ...form, [target.name]: target.value });
  };
  
  // end for 
  const  {  fullname, pickupaddress, pickupphone,dropoffphone, dropoffaddress, contentpackage, monetary, phonenumber  } = form

  const values = {  fullname, pickupphone, pickupaddress, dropoffphone, dropoffaddress, contentpackage, monetary, dropoffaddress, phonenumber  }

  switch (step) {
      case 0:
        return <Fullname {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 1:
        return <PhoneNumber {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 2:
        return <ContentPackage {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} /> 
      case 3:
        return <MonetaryPackage {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 4: 
      return <Dropoffdetails {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
        case 5: 
      return <PickupAddress {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} /> 
        case 6: 
      return <DropoffphoneNumber {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
        case 7: 
      return <Confirm {...{values}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
  
    default:
      break;
  }

  return (
    <>
    <h2 style={{textAlign: 'center'}}>Thank You for Submitting</h2>
    </>
  );
};


export default ProjectForm;


// <Link to="/" onClick={toggleClass} className={isActive && "active"} >Express</ Link>
//<Link to="/" onClick={toggleClass2} className={isActive2 && "active2"} >Regular</ Link> 