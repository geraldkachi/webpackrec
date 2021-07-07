import React, { useContext } from 'react' 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./styles.css"
import { OrderContext } from './ContextPro';

const marufUrl = `https://bb1046a18a75.ngrok.io`

const   Confirm = ({form,setForm, nextStep, prevStep }) => {
  // const { form } = useContext(OrderContext)

  const loadData = async () => {
    await fetch(`${marufUrl}/api/save`, {
      method: "POST",
      mode: "no-cors"
      // body: data,
    })
      .then((res) => res.json())
      .then((data) => setForm(data))
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
        <form onSubmit={() =>{}}>
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
            </List>
            <br />
            <a type='submit' onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Prev</a>
        </form>
    )
} 

export default Confirm
// ngrok http 3000