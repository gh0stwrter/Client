/*eslint-disable*/
import React, {useState} from "react";
import {useMutation} from "@apollo/react-hooks";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components

import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import { SIGN_UP_COMPOSER } from "apollo/user";
import Cookies from "js-cookie";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.js";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import { Redirect } from "react-router-dom";




const style = theme => ({
    ...modalStyle(theme),
    ...popoverStyles,
    ...tooltipsStyle
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(loginPageStyle);

export default function LoginModal(props) {

    const [openModal, setOpen] = React.useState(false);
    const classes = useStyles();

  const [userInputs, setUserInputs] = useState({username:"", email:"", password:""})
  const [redirect, setRedirect] = useState(null);
  const [addNewUser] = useMutation(SIGN_UP_COMPOSER, {
    onCompleted({newUser}){
      Cookies.set("x-token", newUser.token, {expires: 1})
      setRedirect("/profile/dashboard");
    }
  })
  const setInputs = (event) =>{
    const {name, value} = event.target;
    setUserInputs(({...userInputs,[name]: value }))
  }
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const redirectComp = () => {
        // console.log("cookie :  " ,Cookies.get("x-token"))
        if ((redirect || Cookies.get("x-token")) && openModal)
            return <Redirect to={"/profile/dashboard"} />
        else
            return <></>; 

    }

    return (
        <>
        {redirectComp()}
        <Button
          color="transparent"
          target="_blank"
          className={classes.navButton}
          round
          onClick={() => setOpen(true)}
        >
          Signup
              <PersonAddTwoToneIcon/>
             <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                }}
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
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
                        onClick={() => setOpen(false)}
                    >
                        {" "}
                        <Close className={classes.modalClose} />
                    </Button>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >

                    {/* UPLOAD */}
                    <section className="container">

                    {/* <GridContainer justify="center"> */}
                <form className={classes.form}>

                    <h2 className={classes.textCenter}>Connection</h2>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  <CardBody signup>
                    <CustomInput
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      
                      inputProps={{
                        name:"username",
                        onChange: ( setInputs),
                        placeholder: "First Name...",
                        type: "text",
                        defaultValue: userInputs.username,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: userInputs.email,
                        name:"email",
                        onChange: setInputs,
                        placeholder: "Email...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: userInputs.password,
                        name:"password",
                        onChange: setInputs,
                        placeholder: "Password",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button onClick={e => addNewUser({variables:{
                        username: userInputs.username,
                        email: userInputs.email,
                        password: userInputs.password,
                    }})} simple color="success" size="lg">
                      Connection
                    </Button>
                  </div>
                </form>
                        {/*  */}

                    </section>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button onClick={() => setOpen(false)} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </Button>
            </>
    );
}