import React, { useState, useContext } from 'react'
import ProjectForm from './ProjectForm';
import "./styles.css";

const url = 'https://174a0e1b0ba0.ngrok.io/api/orders'
import { OrderContext } from './ContextPro';
const ProjectBody = () => {
  const [step, setStep] = useState(0); // this should be 0
  const { form, setForm } = useContext(OrderContext)

  // const [form, setForm] = useState({ 
  //   fullName: "", 
  //   pickUpPhoneNumber: "",
  //   pickUpAddress: "", 
  //   description: "", 
  //   monetary: "", 
  //   dropoff: "",  
  //   dropOffPhoneNumber: "",
  //   recipientName:'',
  //   dropOffAddress: "",
  // });
  // const { fullName, pickUpPhoneNumber, dropOffPhoneNumber, description, recipientName, pickUpAddress, dropOffAddress, deliveryMethod } = req.body;
  // const { pickUpAddress, dropOffAddress, deliveryMethod } = req.body;


  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  // handleChange
  const handleChange = e => {
    //  e.preventDefault();
    const {name, value} = e.target
    setForm( oldValues => ({
      ...oldValues,
      [name]: value
    }))
    // nextStep()
    // setForm({ ...form, [input]: value });
    // setForm({ ...form, [target.name]: target.value });
  };

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

    return (
        <>
          <div style={bodyStyle}>
            <div>
              <div className="orderform">
                <h1 style={{textAlign:'center'}}>☘️ Order Form ☘️</h1>
                <hr className="headline" />
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <ProjectForm {...{step}} {...{setForm}} {...{form}} {...{nextStep}} {...{prevStep}} {...{handleChange}} {...{handleSubmit}} />
              </form>
            </div>
          </div>
        </>
      );
}


const bodyStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    margin: "30px",
    // height: '70vh',
    height: 'maxContent',
    // textAlign: 'center',
  };

export default ProjectBody
