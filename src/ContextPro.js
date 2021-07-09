import React, { createContext, useState } from "react";

export const OrderContext = createContext(); 

const ContextPro = ({ children }) => {
    const [form, setForm] = useState({ 
        fullName: "", 
        pickUpPhoneNumber: "",
        pickUpAddress: "", 
        description: "", 
        monetary: "", 
        dropOffAddress: "",
        dropOffPhoneNumber: "",
        recipientName:'',
        recipientPhoneNumber:'',
        deliveryMethod:'',
        amount: "",
        customerDetails: {
            name: "",
            phoneNumber: ""
        }
      });

    //   {
    //     fullName,
    //     pickUpPhoneNumber,
    //     dropOffPhoneNumber,
    //     description,
    //     recipientName,
    //     routeStatus,
    //     monetary,
    //     pickUpAddress,
    //     dropOffAddress,
    //     deliveryMethod,
    //     recipientPhoneNumber,
    //   }

    return (
        <OrderContext.Provider value={{ form, setForm }}>
            {children}
        </OrderContext.Provider> 
    )
}

export default ContextPro
