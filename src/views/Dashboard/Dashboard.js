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

import UploadModal from "./utils/UploadModal.js"
import Icon from "@material-ui/core/Icon";
import CardHeader from "components/Card/CardHeader.js";
import DashboardStyle from "./DashboardStyle.js"

const useStyles = makeStyles(DashboardStyle);


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
                <Card className={classes.modal}>
                    <UploadModal/>
                </Card>
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
                    <GridItem xs={12} sm={12} md={12}>

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
            <UploadModal/>

        </div>
    );
}
