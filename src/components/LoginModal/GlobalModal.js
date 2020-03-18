/*eslint-disable*/
import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import Cookies from "js-cookie";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Redirect } from "react-router-dom";
import NavPills from "components/NavPills/NavPills.js";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(loginPageStyle);

export default function GlobalModal(props) {

  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(false)
  const redirectComp = () => {
    if ((redirect || Cookies.get("x-token")) && openModal)
        return <Redirect to={"/profile/page"} />
    return ""; 
  }
  const getterData = (childData) => {
      if (childData.redirect)
        setRedirect(childData.redirect);
      else if (childData.error) 
        setError(true);
  };

  useEffect(() => {
    setError(false);
  },[openModal])

  return (
    <>
    {redirectComp()}
    <Button
      color="transparent"
      target="_blank"
      className={classes.navButton}
      round
      onClick={() => setOpenModal(true)}
    >
      Connection
    </Button>
      <Dialog
        classes={{
            root: classes.modalRoot,
            paper: classes.modal
        }}
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        {error ? <SnackbarContent
          message= {
            <span>
              <b>Oups</b> Une erreur est survenue. Réessailler.
            </span>
          }
          close
          color="danger"
          
        /> : ""}
        
        <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
        >
          <NavPills
            color="dark"
            tabs={[
              {
                tabButton: "Connection",
                tabContent: (
                  <LoginModal getterData={getterData}/>
                )
              },
              {
                tabButton: "Inscription",
                tabContent: (
                  <RegisterModal getterData={getterData}/>
                )
              }
            ]}
          />
        </DialogContent>
            <DialogActions className={classes.modalFooter}>
                <Button 
                onClick={() => setOpenModal(false)} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      </>
    );
}