import React from 'react' 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./styles.css"

const Confirm = ({values, nextStep, prevStep}) => {
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
            <>
        <>
          <>
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={values.fullname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pickup Phone Number" secondary={values.phonenumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Content Package" secondary={values.contentpackage} />
              </ListItem>
              <ListItem>
                <ListItemText primary="PickupAddress" secondary={values.pickupphone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="MonetaryPackage" secondary={values.monetary} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dropoffdetails" secondary={values.dropoffaddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DropoffphoneNumber" secondary={values.dropoffphone} />
              </ListItem>
            </List>
            <br />

            <a onClick={Continue}>Confirm & Continue</a>
            <a onClick={BackCon}>Prev</a>
          </>
        </>
      </>
        </div>
    )
} 

export default Confirm
