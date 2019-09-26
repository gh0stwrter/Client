import React, {useState, useRef} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import style from './style.module.scss';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const FormInscription = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Mutation = () =>{
    const  NEW_USER = gql`
    newUser(email: String, username: String, password: String) {
        email
        username     
    }`
    const [addData, data] = useMutation(NEW_USER);  
    addData({email: email,username: username,password: password});
    console.log(data)
      return data;
  
  }
  

    const userSignup =  (e) => {
      e.preventDefault();
      Mutation();
    }
     
    
return (
    <div>
        <h1 className={style.titleInscription}>Ghost-Composer</h1>
   <div className={style.formInscritpion}>
       <h3>Inscrivez-vous gratuitement</h3>
<Form onSubmit={userSignup}>
    <FormGroup row>
    <Col sm={6}>
    <Button color="secondary" size="lg" block>Connect  <i class='fab fa-facebook'></i></Button>
    </Col>        
    <Col sm={6}>
    <Button color="secondary" size="lg" block>Connect  <i class='fab fa-google-plus-g'/></Button>
    </Col>        

    </FormGroup>
    <FormGroup row>
          <Col sm={6}>
          <Label for="exampleEmail" sm={2}>Email</Label>

            <Input onChange={e => {
               setEmail(e.target.value)}
               }    type="email" name="email" id="exampleUsername" value={email} placeholder="Enter your Email.." />
          </Col>
          <Col sm={6}>
          <Label for="exampleEmail" sm={2}>Username</Label>

            <Input   onChange={e => { setUsername(e.target.value)}}  value={username} type="name" name="username" id="exampleEmail" placeholder="Enter your Username..." />
          </Col>  
    </FormGroup>
    <FormGroup row>
    <Col sm={12}>
          <Label for="exampleEmail" sm={2}>Password</Label>

          <Input value={password} onChange={e => { setPassword(e.target.value)}}  type="password" name="password"  id="examplePassword" placeholder="password placeholder" />
          </Col>
        
    </FormGroup>
    <div className={style.validationButton}>
   <FormGroup row>
        <Col sm={6}>
        <Button  color="secondary" size="lg" type="submit" block>Inscription <i class='fas fa-chevron-circle-right'></i>
        </Button>
        </Col>
    </FormGroup>
    </div>
 
</Form>    
  </div>
  </div>
);
}

export default FormInscription;