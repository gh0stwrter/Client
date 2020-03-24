import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PauseCircleFilledOutlined from "@material-ui/icons/Pause";

import Cached from "@material-ui/icons/Cached";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import CardMusicPlayer from "components/Card/CardMusicPlayer"
import "./section.css";
import Radio from "@material-ui/core/Radio";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import CardHeader from "components/Card/CardHeader.js";
import classNames from "classnames";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import IconButton from "@material-ui/core/IconButton";
import CardFooter from "components/Card/CardFooter";
import {useGlobalState} from "_utils/CompositionContext";
import PDFReaderModal from "components/PdfReader/PDFReaderModal";

const useStyles = makeStyles(styles);

export default function SectionProducts({data}) {

  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const bucket = 'https://global-compositions.s3.eu-west-3.amazonaws.com/';
  const classes = useStyles();
  const [state, dispatch] = useGlobalState();
  const addToShoppingCart = (title, image,price, _id) => {
    const itemsCardAdd = {
        title,
        image,
        price,
        _id
    };
    if (state.items.length > 0) {
        const matchIdCart = state.items.map(x => x._id).indexOf(_id);
        if (matchIdCart === -1) {
            dispatch({ items: [...state.items, itemsCardAdd ]});
            localStorage.setItem("items", JSON.stringify(state.items));
        } else {
            return null;
        }
    } else {
        dispatch({ items: [...state.items, itemsCardAdd] });
    }
  };
  const buttonRead = (file, type) => {
    return (
      type === "written"?
    <PDFReaderModal file={file}/> : null
    )
  }
  const buttonPlay = (compo_type, _id, image, title, file) => {
    const plays = async () => {
      dispatch({
          bool: true,
          play: true,
          musicPlayed: {
              _id: _id,
              music: file,
              title: title,
              image: image
          }
      });
  };
  const pause = e => {
      e.preventDefault();
      dispatch({ play: false });
  };

    return (
        state && state.musicPlayed._id === _id && state.play === true  && compo_type === "sonore"? (
            <IconButton onClick={pause} aria-label='play/pause'>
                <PauseCircleFilledOutlined
                    color='primary'
                    className={classes.playIcon}
                />
            </IconButton>
        ) : compo_type === "sonore"? (
            <IconButton
                onClick={e => {
                    e.preventDefault();
                    plays();
                }}
                aria-label='play/pause'
            >
                <PlayArrowIcon
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    margin: "auto",
                    "&:hover": {
                        transform: "scale(1.1)"
                    },
                    border: "solid white 1.5px",
                    borderRadius: "50%",
                    height: 25,
                    width: 25 }}
                />
            </IconButton>
        ): null
    )}

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 style={{textAlign:"center", color: "white"}}>Boutique des compositions</h2>
        <GridContainer>
          <GridItem  style={{color:"white", background:"#212121"}} md={3} sm={3}>
            <Card  plain>
              <CardBody  className={classes.cardBodyRefine}>
                <h4 style={{color:"white"}} className={classes.cardTitle + " " + classes.textLeft}>
                  Tout les genres
                  <Tooltip
                    id="tooltip-top"
                    title="Reset Filter"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                
              </CardBody>
              
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Radio
              checked={selectedEnabled === "a"}
              onChange={() => setSelectedEnabled("a")}
              value="a"
              name="radio button enabled"
              aria-label="A"
              icon={<FiberManualRecord className={classes.radioUnchecked} />}
              checkedIcon={
                <FiberManualRecord className={classes.radioChecked} />
              }
              classes={{
                checked: classes.radio,
                root: classes.radioRoot
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="First Radio"
        />
      </div>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            
            <GridContainer>

              { data ? data.getCompositions.map((item)=> {
              {console.log(item)}
              return (
          // <GridItem md={4} sm={4}>
          //   <CardMusicPlayer show="price" data={item}/>
          // </GridItem>
          
           <GridItem md={4} sm={4}>    
            <Card blog>
            <CardHeader image>
                <a href="#pablo">
                  <img src={bucket + item.image} style={{height: 200}}alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundColor:'white' }}
                />
              </CardHeader>
              <CardBody>
                <h6
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  {item.username}
                </h6>
                <h5 className={classes.cardTitle}>
                  <a href="#pablo">
                    {item.title}
                    {console.log(item)}
                  </a>
                </h5>
                <h6 className={classes.cardTitle}>
                {item.price === 0 ? <p style={{color: "green"}}>Gratuit</p> : (item.price + ' €') }
                </h6>
                
              </CardBody>
              <CardFooter>
              <Button
                    onClick={e => {
                        e.preventDefault();
                        addToShoppingCart(item.title, item.image, item.price, item._id);
                    }}
                    style={{  background: "rgba(0, 0,0,0.5)", width: "35%", textAlign: "center" }}
                    
                    size='sm'
                >
                    <AddShoppingCartIcon />
                </Button>
                {buttonPlay(item.compo_type, item._id, item.image, item.title, item.file)}
                {buttonRead(item.file, item.compo_type)}
              </CardFooter>
            </Card>
          </GridItem>
          
          )}

          ) : null}


         
              
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
