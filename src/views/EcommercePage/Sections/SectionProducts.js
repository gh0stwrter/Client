import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons

import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import CardMusicPlayer from "components/Card/CardMusicPlayer"
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";
import "./section.css";
import Radio from "@material-ui/core/Radio";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(styles);

export default function SectionProducts({data}) {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [selectedEnabled, setSelectedEnabled] = React.useState(null);
  const [compositions, setCompositions] = React.useState(data);
const arrayFIlter = [ "SONORE","WRITTEN"]
  React.useEffect(() => {
   
    callData()
    console.log(compositions)
    // if (
    //   !document
    //     .getElementById("sliderRegular")
    //     .classList.contains("noUi-target")
    // ) {
    //   Slider.create(document.getElementById("sliderRegular"), {
    //     start: priceRange,
    //     connect: true,
    //     range: { min: 30, max: 900 },
    //     step: 1
    //   }).on("update", function(values) {
    //     setPriceRange([Math.round(values[0]), Math.round(values[1])]);
    //   });
    // }
    return function cleanup() {};
  }, [compositions,selectedEnabled, callData]);
    const filterData = (e) => {
    return setSelectedEnabled(e.target.value)
 }
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const callData = () =>{
  if(data && data.getCompositions.length > 0 && selectedEnabled){
     data.getCompositions.filter((item =>
       item.compo_type.toLowerCase().includes(selectedEnabled.toLowerCase())
      )).map((item)=>
      item ? 
      <GridItem md={4} sm={4}>
        <CardMusicPlayer show="price" data={item}/>
      </GridItem> : null)
      }else if (data && !selectedEnabled){
       return  data.getCompositions.map((item)=>
        <GridItem md={4} sm={4}>
          <CardMusicPlayer show="price" data={item}/>
        </GridItem>)
      }
    
}


  const classes = useStyles();
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
              {arrayFIlter.map((item) =>
        <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
       
        <FormControlLabel
          control={
            
            <Radio
              checked={selectedEnabled === item}
              onChange={filterData}
              value={item}
              name="radio button enabled"
              aria-label={{item}}
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
          label={item}
        />
      </div>
        
        )}   
      
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            
            <GridContainer>
{callData()}
              
            </GridContainer>
            <GridItem
                md={3}
                sm={3}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Button round color="rose">
                  Load more...
                </Button>
              </GridItem>
          </GridItem>
        </GridContainer>
        <br />
        <h2>News in fashion</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    The best trends in fashion 2017
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  FASHION NEWS
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Kanye joins the Yeezy team at Adidas
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color2})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of 2017
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Tutorials
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Trending colors of 2017</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Style
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Fashion & Style 2017</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
