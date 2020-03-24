import React from "react";
import env from 'envGetter'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm"
// @material-ui/core components
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/modalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);
const stripePromise = loadStripe(env.stripe);

export default function Billing() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
 <Button onClick={() => setLiveDemo(true)} color="info" round>
     Complete Purchase <KeyboardArrowRight />
                     </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={liveDemo}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLiveDemo(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
            
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setLiveDemo(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Payment</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
          <p>Woohoo, you're reading this text in a modal!</p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => setLiveDemo(false)} color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

