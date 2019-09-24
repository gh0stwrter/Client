import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import style from './style.module.scss';
const FormInscription = (props) => {

return (
    <div>
        <h1 className={style.titleInscription}>Ghost-Composer</h1>
   <div className={style.formInscritpion}>
       <h3>Inscrivez-vous gratuitement</h3>
<Form>
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

            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email.." />
          </Col>
          <Col sm={6}>
          <Label for="exampleEmail" sm={2}>Username</Label>

            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Username..." />
          </Col>  
    </FormGroup>
    <FormGroup row>
    <Col sm={12}>
          <Label for="exampleEmail" sm={2}>Password</Label>

          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        
    </FormGroup>
    <div className={style.validationButton}>
   <FormGroup row>
        <Col sm={6}>
        <Button color="secondary" size="lg" block>Inscription <i class='fas fa-chevron-circle-right'></i></Button>
        </Col>
    </FormGroup>
    </div>
 
</Form>    
  </div>
  </div>
);
}
export default FormInscription;