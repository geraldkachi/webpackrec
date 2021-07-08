// import React, { useContext } from 'react'
// import { useFormik } from "formik";
// import * as Yup from "yup"
// import { OrderContext } from './ContextPro';
// import axios from "axios"
// import "./styles.css"
// const marufUrl = 'https://174a0e1b0ba0.ngrok.io/api/save'
// const AllForm = ({ nextStep, prevStep }) => {
//     const { form, setForm } = useContext(OrderContext)
//     const loadData = () => {
//          axios.post(`${marufUrl}`, {
//             method: 'POST',
//             mode: "no-cors"
//         })
//           // .then((res) => res.json())
//           .then((data) => setForm(data))
//           .catch((err) => console.log(err));
//           console.log(setForm(data))
//       };
//         const Continue = e => {
//             e.preventDefault();
//             console.log(loadData())
//             loadData();
//             nextStep();
//         }
//         const BackCon = e => {
//             e.preventDefault();
//             prevStep()
//         }
//     const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
//         initialValues: form = {
//             fullName: "", 
//             pickUpPhoneNumber: "",
//             pickUpAddress: "", 
//             monetary: "", 
//             dropOffAddress: "",
//             dropOffPhoneNumber: "",
//             recipientName:'',
//             recipientPhoneNumber:'',
//             deliveryMethod:'',
//             customerDetails: {
//                 name: "",
//                 phoneNumber: ""
//             }
//         }
//         ,
//         onSubmit: ({fullName, pickUpPhoneNumber, pickUpAddress, monetary, dropOffAddress, dropOffPhoneNumber, recipientName, recipientPhoneNumber, deliveryMethod, setSubmitting  }) => {
//           console.log( `fullName: ${fullName}, pickUpPhoneNumber: ${pickUpPhoneNumber}, pickUpAddress: ${pickUpAddress}, monetary: ${monetary}
//           , dropOffAddress: ${dropOffAddress}, dropOffPhoneNumber: ${dropOffPhoneNumber}, recipientName: ${recipientName}
//           , recipientPhoneNumber: ${recipientPhoneNumber}, deliveryMethod: ${deliveryMethod}`
//           )
//         //   setTimeout(function(){ 
//         //     <div><span class="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
//         //     history.push('/payment/')
//         //  }, 2000)
//         },
//         validationSchema: Yup.object().shape({
//             fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
//             pickUpPhoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
//             pickUpAddress: Yup.string().min(2, 'Too Short').max(3, 'Too Long!').required(''),    
//         })
//       })
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* FullName */}
//                 <div className="input-container">
//                     <label>Full Name</label>
//                     <input type="text" placeholder="full-name" autoComplete='off' name="fullName" required value={fullName} onChange={handleChange} />
//                 </div>
//                 {/* Pickup Phone Number */}
//                 <div className="input-container">
//                     <label>Pickup Phone Number</label>
//                     <input type="tel" name="pickUpPhoneNumber" placeholder="pickup-number" autoComplete='off' name="pickUpPhoneNumber" required value={pickUpPhoneNumber} onChange={handleChange} />
//                 </div>
//                 {/* description */}
//                 <div className="input-container">
//                     <label>Content Package</label>
//                     <textarea type="text" cols='30' rols="5" placeholder="Kindly describe the content of your package" autoComplete='off' name="description" required value={description} onChange={handleChange}></textarea>
//                 </div>
//                 {/* monetary */}
//                 <div className="input-container">
//                     <label>What is the monetary value of your package?</label>
//                     <input type="text" placeholder="Value of item" autoComplete='off' name="monetary" required value={monetary} onChange={handleChange} />
//                 </div>
//                 {/* Dro off Details */}
//                 <div className="input-container">
//                     <label>Drop off details:</label>
//                     <input type="text" placeholder="Please enter the recipient's name" autoComplete='off' name="recipientName" required value={recipientName} onChange={handleChange} />
//                 </div>
//                 {/* RecipientName */}
//                 <div className="input-container">
//                     <label>Drop off details:</label>
//                     <input type="text" placeholder="Please enter the recipient's name" autoComplete='off' name="recipientName" required value={recipientName} onChange={handleChange} />
//                 </div>
//                 {/* Pick Up Address */}
//                 <div className="input-container">
//                     <label>Pick Address</label>
//                     <input type="text" placeholder="pick-up-address" autoComplete='off' name="pickUpAddress" required value={pickUpAddress} onChange={handleChange} />
//                 </div>
//                 {/* DropoffphoneNumber */}
//                 <div className="input-container">
//                     <label>Drop off phone number</label>
//                     <input type="tel" placeholder="Drop off phone number" autoComplete='off' name="dropOffPhoneNumber" required value={dropOffPhoneNumber} onChange={handleChange} />
//                 </div>
//                 {/* WhichofThese */}
//             </form>
//                 <a onClick={Continue}>Next</a>
//                 <a onClick={BackCon}>Back</a> 
//         </div>
//     )
// }
// export default AllForm
"use strict";