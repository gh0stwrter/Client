import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import { whiteColor, mlAuto, } from "assets/jss/material-kit-pro-react";

export default {
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
}