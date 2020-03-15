import React, {useState, useEffect,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomInput from "components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import TitleIcon from '@material-ui/icons/Title';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomSelect from "components/CustomSelect/CustomSelect";
import Box from '@material-ui/core/Box';
import ImageUpload from 'components/CustomUpload/ImageUpload.js';

import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import AttachFile from "@material-ui/icons/AttachFile";
import { useDropzone } from 'react-dropzone'
import { UPLOAD_WRITTEN_COMP } from "apollo/uploads";
import {useMutation} from "@apollo/react-hooks";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import path from "path";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Entré les informations de loeuvre', 'Create an ad group', 'Create an ad'];
}
const FirstStep = ({setInput}) =>{
    return(
        
        <GridContainer>
            <GridItem>
     
          <h4 >Entré le titre de votre oeuvre</h4>
          
      <CustomInput
        id="pass"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
         onChange: e => setInput(e),
          name:"title",
          placeholder: "Entré le titre",
          type: "text",
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon>
                lock_utline
              </TitleIcon>
            </InputAdornment>
          ),
          autoComplete: "off"
        }}
      />

     
      <h4>Selection les droit de votre oeuvre</h4>
      <CustomSelect setSelect={setInput} data="droit"/>

        
      <h4>Selection la categorie de votre oeuvre</h4>
      <CustomSelect setSelect={setInput} data="compo_type"/>

     
      <h4>Selection la categorie de votre oeuvre</h4>
      <CustomSelect setSelect={setInput} data="categorie"/>
      </GridItem>
      
    
     
      
      </GridContainer>
   )
}

const SecondStep = () =>{
  const [filesList, setFilesList] = useState([]);
  
// const files = acceptedFiles.map(file => (
//   <li key={file.path}>
//       {file.path} - {file.size} bytes
// </li>
// ));
useEffect(()=>{
  console.log(filesList)
}, [filesList])
const onDrop = (file) =>{
      setFilesList([...filesList, file])
  }
  
const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const files =  acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

    return(
        <GridContainer md={12}>
            <GridItem  sm={6} lg={6}>
            <section className="container">
            <h3>Drag 'n' drop some files here, or click to select files</h3>

      <Card color="info" style={{
        background:"#222224",
        boxShadow: "10px 10px 5px black",
      }} >
        <div {...getRootProps()}></div>
        
            </Card>
           
            <div>
              <h4>Files</h4>
              <ul>{files}</ul>
            </div>
       
    </section>
            </GridItem>

              <GridItem  sm={6} lg={6}>
               <h4> Selectionner l'image de votre composition </h4> 
              <ImageUpload setImage={onDrop}/>
              </GridItem>
                

            
        </GridContainer>
    )
}
function getStepContent(step, method) {
  switch (step) {
    case 0:
      return <FirstStep setInput={method}/>;
    case 1:
      return <SecondStep/>;
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper(props) {
    const [compositionInput, setCompositionInput] = React.useState(null)
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [addWrittenComp] = useMutation(UPLOAD_WRITTEN_COMP, {
      onCompleted() {
      },
      variables: {
          file: null,
          writtenInput: {
              userId: "5e5cde8d44edde2c70339d07",
              title: "Oh Primaire",
              category: "5e10ff08736953c91e4cf40e",
              isPublish: true,
              price: 12.33,
              compo_type: "sonore"
          }
      }
  })
  
    useEffect(()=>{
    })
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const setInputComp = (e) => {
      const {name, value} = e.target;
      setCompositionInput({...compositionInput,[name]:value})
  }

  return (
    <div className={classes.root}>
      <Stepper children activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index, setInputComp)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}