import React, { useContext } from 'react' 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./styles.css"
// import { OrderContext } from './ContextPro';
import axios from "axios"
import { OrderContext } from './ContextPro';

const marufUrl = `https://b562e6160caa.ngrok.io/api/save`

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
  const loadData = async () => {
    await axios.post(`${marufUrl}`, {
        method: 'POST',
        // headers: myHeaders,
        // body: urlencoded,
        // redirect: 'follow'
    })
      // .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.log(err));
      console.log(setForm(data))
  };

    const Continue = e => {
        e.preventDefault();
        console.log(loadData())
        loadData();
        nextStep();
    }
    const BackCon = e => {
        e.preventDefault();
        prevStep()
    }
    return (
        <form onSubmit={handleSubmit}>
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
                <ListItemText primary="SelectedOption" secondary={form.customerDetails} />
              </ListItem>
            </List>
            <br />
            <a type='submit' onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Back</a>
        </form>
    )
} 

export default Confirm
// ngrok http 3000