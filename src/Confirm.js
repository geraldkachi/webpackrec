import React, { useContext } from 'react' 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./styles.css"
// import { OrderContext } from './ContextPro';
import axios from "axios"
import { OrderContext } from './ContextPro';

const marufUrl = `https://delivery-flow.herokuapp.com/api/save`

const Confirm = ({ nextStep, prevStep, handleSubmit }) => {
  const { form, setForm } = useContext(OrderContext)

  // const { form } = useContext(OrderContext)

  // const loadData = async () => {
  //   await fetch(`${marufUrl}/api/save`, {
  //     method: "POST",
  //     mode: "no-cors"
  //     // body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setForm(data))
  //     .catch((err) => console.log(err));
  //     console.log(setForm(data))
  // };

  const loadData =  () => {
     axios.post(`${marufUrl}`, {
      fullName: form.fullName,
      pickUpPhoneNumber: form.pickUpPhoneNumber,
      description: form.description,
      pickUpAddress: form.pickUpAddress,
      monetary: form.monetary,
      recipientName: form.recipientName,
      dropOffPhoneNumber: form.dropOffPhoneNumber,
      deliveryMethod:  form.deliveryMethod,
      dropOffAddress: form.dropOffAddress,
      routeStatus: form.routeStatus,
    })

      // .then((res) => res.json())
      // console.log(form)
      .then((res) => {
        setForm({...form, checkoutLink: res.data.checkoutLink})
        console.log({form: res.data})
        nextStep();
      })
      .catch((err) => console.log(err));
  };

    const Continue = e => {
        e.preventDefault();
        loadData();
        nextStep();
    }

    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }

    return (
        <div>
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={form.fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pickup Phone Number" secondary={form.pickUpPhoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Content Package" secondary={form.description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="PickupAddress" secondary={form.pickUpAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="MonetaryPackage" secondary={form.monetary} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dropoffdetails" secondary={form.recipientName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DropoffphoneNumber" secondary={form.dropOffPhoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="SelectedOption" secondary={form.routeStatus} />
              </ListItem>
            </List>
            <br />
            <a type='submit' onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Back</a>
        </div>
    )
}

export default Confirm
// ngrok http 3000
// node 
// require('http')