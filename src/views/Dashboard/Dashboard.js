/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import { whiteColor, mlAuto, } from "assets/jss/material-kit-pro-react";
import Icon from "@material-ui/core/Icon";
import CardHeader from "components/Card/CardHeader.js";

// import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

// import Sticky from 'react-sticky-el';


const useStyles = makeStyles({
    cardTitle: {
        cardTitle,
        color: whiteColor
    },
    main: {
        backgroundColor: "#333436",

    },
    container: {
        backgroundColor: "#333436",
        zIndex: 10,
        marginBottom: 60,

    },

    blackCard: {
        color: whiteColor,
        width: "auto",
        backgroundColor: "#222224",
        marginTop: -10,
        margin: 50,

    },
    blackCard2: {
        color: whiteColor,
        width: "43%",
        height: 500,
        backgroundColor: "#222224",
        marginTop: -10,
        marginBottom: 150,
        margin: 50,
        display: "inline-block"
    },
    header: {
        fontSize: "1.25em",
        display: "block",
        backgroundColor: "#222224",
        height: 50,
        width: 150,
        marginLeft: 70,
        marginTop: 140,
        marginBottom: 0,
        textAlign: "center",
        verticalAlign: "bottom",
        color: "#c0c0d1",
        padding: "20px"
    },

    stats: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
        justifyContent: "space-between",
        color: "#c0c0d1",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "15px",
            lineHeight: "15px",
            margin: 10,

        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px",
        },
    },
    contentStat: {
        fontSize: 20,
        width: 250,
        height: 80,
        margin: 20,
        verticalAlign: "baseline",
        display: "inline-block",

        alignItem: "center",
        textAlign: "center",
        "& i": {
            color: "#96262b",
            fontSize: "30px !important",
            verticalAlign: "bottom",
            marginRight: "10px !important",
        }
    },
    dashboard: {
        width: "100%",
        // height: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
        justifyContent: "space-between",
        color: "#c0c0d1",
    },
    head: {        
        fontSize: "1.25em",
        color: "#c0c0d1",
        width: 150,
        textAlign: "center",
        background: "#222224 !important",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0) !important",
    },
    instru: {

    }
});


// FAKE DATA
const fakeData = {
    stats: {
        sales: 123,
        follow: 84,
        sound: 5642,
        download: 24,
        comment: 843
    },
    intru: {
        nb1: {
            img: "",
            name: "intru nb 1",
            time: "01/02/2019"
        },
        nb2: {
            img: "",
            name: "intru nb 1",
            time: "20/12/2020"
        },
        nb3: {
            img: "",
            name: "intru nb 3",
            time: "18/12/2019"
        },
        
    }
}
// 


const blockIntru = (data) => {
    return (
        <>
            <div class>
                <img scr={data.img}/>
                {data.name}
                {data.time}
                <i className="material-icons">create</i>

            </div>
        </>
    )
}

export default function PresentationPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div className={classes.container} >

            <Header
                brand="Ghost-Composer"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="dark"
            />
            <GridContainer>
                <GridItem>

                    <Card className={classes.header}>Stats</Card>
                    <Card className={classes.blackCard}>
                        <CardBody>
                            <div className={classes.stats}>
                                <div className={classes.contentStat}>
                                    <i className="material-icons">attach_money</i>Totale ventes : {fakeData.stats.sales}
                                </div>
                                <div className={classes.contentStat}>
                                    <i className="material-icons">people</i>Followers :  {fakeData.stats.follow}
                                </div>
                                <div className={classes.contentStat}>
                                    <i className="material-icons">volume_down</i>Son écouté :  {fakeData.stats.sound}
                                </div>
                                <div className={classes.contentStat}>
                                    <i className="material-icons">cloud_download</i>Téléchargements :  {fakeData.stats.download}
                                </div>
                                <div className={classes.contentStat}>
                                    <i className="material-icons">comment</i>Commentaires :  {fakeData.stats.comment}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem>

                        <Card className={classes.blackCard2}>
                        <CardHeader className={classes.head} noShadow={true} color="danger" >Dashboard</CardHeader>

                            <CardBody>
                                <div className={classes.dashboard}>
                                    <p>Ex veniam excepteur adipisicing non amet laboris in qui anim excepteur mollit deserunt ullamco. Cupidatat laboris id Lorem fugiat. Ipsum culpa culpa eu ipsum. Incididunt amet exercitation culpa dolore enim deserunt.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={classes.blackCard2}>
                        <CardHeader className={classes.head} noShadow={true} color="danger" >Mes intrus</CardHeader>

                            <CardBody>
                                <div className={classes.dashboard}>
                                    <p>Ex veniam excepteur adipisicing non amet laboris in qui anim excepteur mollit deserunt ullamco. Cupidatat laboris id Lorem fugiat. Ipsum culpa culpa eu ipsum. Incididunt amet exercitation culpa dolore enim deserunt.</p>
                                    {blockIntru(fakeData.intru.nb1)}
                                </div>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>

        </div>
    );
}
