/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import PeopleIcon from '@material-ui/icons/People';
import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import RateReviewIcon from '@material-ui/icons/RateReview';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import UploadModal from "views/Dashboard/utils/UploadModal";
import ListCompo from "components/Lists/CompostionList";
import LatestSection from "./Section/LatestSection";
import ImageUpload from "components/CustomUpload/ImageUpload";
import UplaodAlbum from 'views/Dashboard/UploadAlbum';
import UploadCompleteAlbum from "views/Dashboard/UploadCompleteAlbum";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid

  );

  
  const fakeData = [
        {
          component: <AttachMoneyIcon/>,
          value:"Vente : " + 123
        },
        {
          component: <PeopleIcon/> ,
          value:"Follower : "+84,
        },
        {
          component:<VolumeUpIcon/>,
          value: "Son écouté : " + 5642
        },
        {
          component: <CloudDownloadIcon/>,
          value:"Télechargement : " + 24
        },
        {
          component: <RateReviewIcon/>,
          value: "Commentaires : "+843
        },
        {
          component: <RateReviewIcon/>,
          value: "Commentaires : "+843
        },
        {
          component: <RateReviewIcon/>,
          value: "Commentaires : "+843
        },
        
    ]
// 
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div style={{color:"white"}}>
      <Header
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer  fluid justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="..." className={imageClasses} />
                </div>
                <div  className={classes.name}>
                  <h3 >Christian Louboutin</h3>
                  <h6 >Composer</h6>
                 
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-bottom"
                  title="Follow this user"
                  placement="bot"
                  classes={{ tooltip: classes.tooltip }}
                >
                  
                  <Button
                    justIcon
                    color="info"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
              <div className={classes.follow2}>
                <Tooltip
                  id="tooltip-bottom"
                  title="Follow this user"
                  placement="bot"
                  classes={{ tooltip: classes.tooltip }}
                >
                  
                  <Button
                    round
                    color="info"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} /> Creer une <br/> composition
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                
                {
                  tabButton: "Work",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer fluid>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.gridItem}
                      >
                      
                        <Card style={{
                          background:"#222224",
                          boxShadow: "10px 10px 5px black",
                        }}>
                        <CardHeader  style={{ textAlign:"center",width: "30%"}}color="danger">
                          <h4>
                          <EqualizerIcon/> Stats
                          </h4>
                          </CardHeader>
                          
                        <CardBody style={{color:"#ef5350", padding: "4%"}}>
                            <GridContainer  spacing={2}   sm={12} md={12}>
                               { fakeData.map((item) =>
                               <GridItem md={3} sm={3} lg={3} >
                               <GridContainer md={12} sm={12} >
                                 <GridItem sm={2}>
                              <h4>  {item.component}</h4>
                             </GridItem>
                             <GridItem md={10}>
                            <h4>{item.value}</h4>  
                             </GridItem>
                             </GridContainer>
                             </GridItem>
                               ) }
                                
                                  {/* 
                                <div className={classes.contentStat}>
                                </div>
                                <div className={classes.contentStat}>
                                </div>
                                <div className={classes.contentStat}>
                                </div>
                            </div> */}
                            </GridContainer>
                        </CardBody>
                    </Card>
                      </GridItem>
                      <GridItem>
                            <GridContainer md={12} sm={12}>
                         <GridItem md={5}>                          <Card style={{
                          background:"#222224",
                          boxShadow: "10px 10px 5px black"
                          }}>
                            <CardHeader style={{textAlign:"center",width: "60%"}} color="danger">
                            <h5>
                          <EqualizerIcon/>Mes Compositions
                          </h5>
                              </CardHeader>
                            <CardBody>
                              <ListCompo/>
                            </CardBody>
                         </Card>
                         </GridItem>
                             <GridItem md={7}>
                      <Card style={{
                          background:"#222224",
                          boxShadow: "10px 10px 5px black"
                          }}>
                            <CardHeader style={{textAlign:"center",width: "40%"}} color="danger">
                            <h5>
                          <EqualizerIcon/> Dernieres ventes

                          </h5>
                              </CardHeader>
                            <CardBody>
                              <LatestSection/>
                            </CardBody>
                         </Card>
                         </GridItem>
                        
                            </GridContainer>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Connections",
                  tabIcon: People,
                  tabContent: (
                    <Card style={{
                      background:"#222224",
                      boxShadow: "10px 10px 5px black",
                    }}>
                    <CardHeader  style={{ textAlign:"center",width: "30%"}}color="danger">
                      <h4>
                      <EqualizerIcon/> Creation de composition
                      </h4>
                      </CardHeader>
                      
                    <CardBody style={{color:"#ef5350", padding: "4%"}}>
                        <GridContainer  spacing={2}   sm={12} md={12}>
                           <GridItem md={3} sm={3} lg={3} >

                          <UploadModal/>
                         </GridItem>
                         <GridItem md={3} sm={3} lg={3} >

                          <UplaodAlbum/>
                         </GridItem>
                         <GridItem md={3} sm={3} lg={3} >

                          <UploadCompleteAlbum/>
                         </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
                   )
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-profile"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
