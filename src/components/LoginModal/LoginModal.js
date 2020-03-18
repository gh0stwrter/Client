/*eslint-disable*/
import React, {useState} from "react";
import {useQuery, useMutation, useApolloClient} from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import { SIGN_IN_COMPOSER } from "apollo/user";
import Cookies from "js-cookie";
import { SIGN_UP_COMPOSER } from "apollo/user";



const useStyles = makeStyles(loginPageStyle);

export default function LoginModal(props) {

  const classes = useStyles();
  const [userInputs, setUserInputs] = useState({ email:"", password:""});
  const [dataLogin, setDataLogin] = useState(null)
  const [login] = useMutation(SIGN_IN_COMPOSER, {
    onCompleted(data){
      Cookies.set("x-token", data.login.token, {expires: 1})
      sendRedirectParent()
    }
    
  });

  const sendRedirectParent = () => {
    props.getterData({redirect: true});
  };
  const sendErrorParent = (error) => {
    props.getterData({error: error});
  };
  const setInputs = (event) =>{
    const {name, value} = event.target;
    setUserInputs(({...userInputs,[name]: value }))
  };

  const logins = () => {
    
    
  }

  return (
    <section className="container">
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
          <Button onClick={e =>{
            
           login({variables: {
            email: userInputs.email,
            password: userInputs.password,
          }})
         
        }
          
          }
            simple color="success" size="lg">
            Connection
          </Button>
        </div>
      </form>
    </section>
  );
}