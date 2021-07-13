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
        deliveryMethod:'express',
        amount: "",
        routeStatus: "pickup",
        checkoutLink: ""

      });

    return (
        <OrderContext.Provider value={{ form, setForm }}>
            {children}
        </OrderContext.Provider> 
    )
}

export default ContextPro
