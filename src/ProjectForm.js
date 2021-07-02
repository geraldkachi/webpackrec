import React, { useState, useEffect } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {  Link  } from "react-router-dom";
import PickupAddress from "./Pickup/PickupAddress"
// import { useFormik } from "formik";
// import * as Yup from "yup"
import "./styles.css";
import Fullname from "./Fullname"

const ProjectForm = () => {

  
  const [step, setStep] = useState(0); // this should be 0
  // let [loading, setLoading] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const [isActive1, setActive1] = useState(false); 
  

  const [form, setForm] = useState({ 
    fullname: "", 
    pickupaddress: "", 
    dropoff: "",  
    contentpackage: '', 
    monetary: '', 
    dropoffaddress: '', 
    phonenumber:'' 
  });

  // const { pickupaddress ,dropoff , email ,contentpackage,  monetary } = form
  // const { pathname } = useLocation()
  // const splitLocation = pathname.split("/");

  const nextStep = () => {
    // const nextQuestion = step + 1
    setStep(step + 1)
  }
  const prevStep = () => {
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
      fullname: '',
      pickaddress: "",
      dropoffaddress: "",
      contentpackage: '',
      monetary: '',
      dropoffaddress: '',
      phonenumber: ''
    });
  }

   const handleChange = input => (e) => {
    // const {name, value} = e.target
    setForm({ [input]: e.taget.value });
    // setForm({ ...form, [input]: value });
    // setForm({ ...form, [target.name]: target.value });
  };
  
  // end for 

  switch (step) {
    case 0:
      return (
        <PickupAddress {...{form}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} /> 
      )
      case 1:
        return <Fullname {...{form}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
      case 2:
        return <h1>FormPersonalDetail</h1>
      case 3:
        return <h1>Confirm</h1>
      case 4: 
      return <h1>Success</h1>
  
    default:
      break;
  }

  return (
    <>
    <h2>Project</h2>
    </>
  );
};


export default ProjectForm;


// <Link to="/" onClick={toggleClass} className={isActive && "active"} >Express</ Link>
//<Link to="/" onClick={toggleClass2} className={isActive2 && "active2"} >Regular</ Link> 