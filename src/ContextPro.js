import React, { createContext, useState } from "react";

export const OrderContext = createContext(); 

const ContextPro = ({ children }) => {
    const [form, setForm] = useState({ 
        fullName: "", 
        pickUpPhoneNumber: "",
        pickUpAddress: "", 
        description: "", 
        monetary: "", 
        dropoff: "",  
        dropOffPhoneNumber: "",
        recipientName:'',
        dropOffAddress: "",
      });

    return (
        <OrderContext.Provider value={{ form, setForm }}>
            {children}
        </OrderContext.Provider> 
    )
}

export default ContextPro
