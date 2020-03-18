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
import {useMutation, useQuery, useApolloClient} from "@apollo/react-hooks";
import CurrencyInput from 'react-currency-input';
import Card from "components/Card/Card";
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import CardBody from "components/Card/CardBody";
import CreateIcon from '@material-ui/icons/Create';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import path from "path";
import TextField from '@material-ui/core/TextField';
import decode from "jwt-decode";
import Cookies from "js-cookie";
import {GET_ALL_CATEGORIES} from "apollo/categories";
import { GET_ALL_COMPOSITIONS } from 'apollo/composition';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

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
  const client = useApolloClient();
  const [categories, setCategories] = useState(null)
  const {data: getCategories} = useQuery(GET_ALL_CATEGORIES, {
    onCompleted(){

    }
  })
  useEffect(()=>{
    if(getCategories) console.log(getCategories.getCategories)
  },[categories])
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
      {
        getCategories ?
      <CustomSelect setSelect={setInput} categoriesData={getCategories.getCategories}  data="categorie"/> : null

      }
      </GridItem>
      
    
     
      
      </GridContainer>
   )
}
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      
    
      decimalSeparator={true}
      prefix={"$"}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


const SecondStep = ({setInput, dataInput, setPrices,imageSet  }) =>{
  const [erros, setError] = useState(false)
  const client = useApolloClient()
  const [price, setPrice] = useState("0.00");
  
useEffect(()=>{


}, [dataInput, price])


const onDrop =(file) =>{
  setInput(file)
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

        <h5>Selectionner votre composition</h5>
        <div {...getRootProps()}>
        <Card color="info" style={{
        background:"#222224",
        "&:hover": {
            transform: "scale(2) !important"
          },
      }} >
        <CardBody style={{textAlign:"center"}}>
         {
           dataInput.compo_type === "SONORE"?
          <div><h3> <MusicNoteIcon style={{fontSize: 70}}/> <br/>Ajouter votre fichier .mp3</h3> </div>   : dataInput.compo_type === "WRITTEN" ? <div><h3> <CreateIcon style={{fontSize: 70}} /> <br/> Ajouter votre fichier .pdf </h3> </div>: null
           }        
          <input {...getInputProps()} />

        </CardBody>

            </Card>
        </div>
        <Card color="info" style={{
        background:"#222224",
        
      }} >
        <CardBody>
        <div>
              <h4>Info fichier: </h4>
              <ul>{files}</ul>
            </div>
        </CardBody>

            </Card>
           
            
       
    </section>
            </GridItem>

              <GridItem  sm={6} lg={6}>
               <h4> Selectionner l'image de votre composition </h4> 
              <ImageUpload setImage={imageSet}/>
              </GridItem>
             
              <GridItem style={{textAlign: "center"}} justify="center" sm={12}>
<Typography variant="subtitle2" gutterBottom={true}>Saissisez le prix de l'oeuvre</Typography>
<CurrencyTextField
			label="Amount"
			variant="outlined"
      value={price}
      inputType="number"
      currencySymbol="$"
    decimalCharacter=","
		digitGroupSeparator="."
			onChange={(event, value)=> setPrices(value)}
		/>
    {/* <CurrencyTextField
			label="Prix"
			variant="outlined"
      value={price}
      decimalCharacter=","
      digitGroupSeparator="."
      currencySymbol="€"
      onChange={(event, value)=> {
        setPrice(value)
        setPrices(event)
      }}
		/> */}

</GridItem>
<GridItem>

</GridItem>
            
        </GridContainer>
    )
}

const ThirdStep = ({dataInput}) =>{
  const [currentImage, setCurrentImage] = useState(null);
  console.log(dataInput)
  let reader = new FileReader();
    let file = dataInput.image;
    console.log(file)
    // reader.onloadend = () => {
    //   setCurrentImage(reader.result)
    // };
    // reader.readAsDataURL(file);
  return (
    <GridContainer>
      {
        currentImage ?
        <Card>
          <img src={currentImage}></img>

        </Card>

        : null
      }
    </GridContainer>
  )
}
function getStepContent(step, method,methodFile, data, setPrices, setImages) {
  switch (step) {
    case 0:
      return <FirstStep dataInput={data} setInput={method}/>;
    case 1:
      return <SecondStep dataInput={data} setInput={methodFile} imageSet={setImages} setPrices={setPrices}/>;
    case 2:
      return <ThirdStep dataInput={data}/>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper(props) {
    const [compositionInput, setCompositionInput] = React.useState({});

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const token = Cookies.get('x-token');
    const decoded = decode(token)


    const [addWrittenComp] = useMutation(UPLOAD_WRITTEN_COMP, {
      onCompleted(data) {
        console.log(data)
      }
      })
  
    useEffect(()=>{
      console.log(compositionInput)
      console.log(activeStep)
      //console.log(Object.keys(compositionInput).length)
    },[compositionInput])
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
   
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const setImageFile = (file) =>{
    setCompositionInput(prevState => ({...prevState, image: file}))

  }
  const setInputFiles = (file) =>{
  
      setCompositionInput(prevState => ({...prevState, compo_file: file[0]}))
  }
  const setPrices = (value) =>{
    setCompositionInput({...compositionInput, price: value})
  }
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
              {getStepContent(index, setInputComp, setInputFiles,compositionInput, setPrices, setImageFile)}
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
                    disabled={Object.keys(compositionInput).length < 4 || activeStep === steps.length -2 && Object.keys(compositionInput).length < 5 }
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(activeStep)
                     return activeStep === 2 ? addWrittenComp({variables:{
                      file: [compositionInput.compo_file, compositionInput.image],
                      writtenInput: {
                          userId: decoded ? decoded.user._id : null,
                          title: compositionInput.title,
                          category: compositionInput.category,
                          isPublish: compositionInput.ispublish === "PUBLIC" ? true : false,
                          price: compositionInput.price,
                          compo_type: compositionInput.compo_type.toLowerCase(),
                      }
                      }}) && handleNext(): handleNext()

                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' :  'Next'}
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