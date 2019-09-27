import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './style.module.scss';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const FormConnexion = (props) => {
  const  LOGIN = gql`
    mutation login($email: String, $password: String) {
      login(email: $email,  password: $password){
        token
      }
      }`
  const [login] = useMutation(LOGIN);  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

    const userLogin = async (e) => {
      e.preventDefault();
     await login({
        variables: { 
        email: email, 
        password: password
    }
    }).then(res =>{
        const Token = res.data.login.token;
        console.log(Token)
     const TokenStored = localStorage.setItem('Token', Token);
     if(TokenStored){
        
     }
    })

}

return (
    <div>
        <h1 className={style.titleInscription}>Ghost-Composer</h1>
   <div className={style.formInscritpion}>
       <h3>Connectez-vous</h3>
<Form onSubmit={userLogin}>
    <FormGroup row>
    <Col sm={6}>
    <Button color="secondary" size="lg" block>Connect  <i className='fab fa-facebook'></i></Button>
    </Col>        
    <Col sm={6}>
    <Button color="secondary" size="lg" block>Connect  <i className='fab fa-google-plus-g'/></Button>
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
        <Label for="exampleEmail" sm={2}>Password</Label>
        <Input value={password} onChange={e => { setPassword(e.target.value)}}  type="password" name="password"  id="examplePassword" placeholder="password placeholder" />
          </Col>
    
    </FormGroup>
    <div className={style.validationButton}>
   <FormGroup row>
        <Col sm={6}>
        <Button  color="secondary" size="lg" type="submit" block>Inscription <i className='fas fa-chevron-circle-right'></i>
        </Button>
        </Col>
    </FormGroup>
    </div>
 
</Form>    
  </div>
  </div>
);
}

export default FormConnexion;