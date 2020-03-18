/*eslint-disable*/
import React, {useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import { SIGN_UP_COMPOSER } from "apollo/user";
import Cookies from "js-cookie";



const useStyles = makeStyles(loginPageStyle);

export default function Register (props) {

    const classes = useStyles();
    const [userInputs, setUserInputs] = useState({username:"", email:"", password:""});
    const [addNewUser, {loading, error}] = useMutation(SIGN_UP_COMPOSER, {
        onCompleted({newUser}){
            Cookies.set("x-token", newUser.token, {expires: 1}),
            sendDataToGlobalModal();
        },
        onError(){
        sendErrorParent();
        }
  });

  const sendRedirectParent = () => {
    props.getterData({redirect: true, error: false});
  };
  const sendErrorParent = () => {
    props.getterData({error: true});
  };
    const setInputs = (event) =>{
    const {name, value} = event.target;
        setUserInputs(({...userInputs,[name]: value }))
    };
    return (
      <section className="container">
        <form className={classes.form}>
          <h2 className={classes.textCenter}>Inscription</h2>
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
      </section>
    );
}