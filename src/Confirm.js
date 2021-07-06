import React from 'react' 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./styles.css"

const Confirm = ({form, nextStep, prevStep }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep()
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
                <ListItemText primary="Content Package" secondary={form.contentpackage} />
              </ListItem>
              <ListItem>
                <ListItemText primary="PickupAddress" secondary={form.pickUpAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="MonetaryPackage" secondary={form.monetary} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dropoffdetails" secondary={form.description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DropoffphoneNumber" secondary={form.dropOffPhoneNumber} />
              </ListItem>
            </List>
            <br />

            <a type='submit' onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Prev</a>
        </div>
    )
} 

export default Confirm
