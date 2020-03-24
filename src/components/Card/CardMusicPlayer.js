import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "components/Card/Card";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleFilledOutlined from "@material-ui/icons/Pause";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from "./CardBody";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import Button from "components/CustomButtons/Button.js";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "_utils/CompositionContext";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Document, Page } from 'react-pdf';
import env from 'envGetter'
import PDFReaderModal from "components/PdfReader/PDFReaderModal";

const CardMusicPlayer = ({
    data: { title, image, file, price, _id, compo_type }, show }) => {
    let history = useHistory();
    const useStyles = makeStyles(theme => ({
        styles,
        root: {
            height: "200px",
            width: "auto",
            borderRadius: "5%",
            color: "white",
            display: "flex",
            backgroundColor: "transparent",
            margin: 10,
            boxShadow: "1px 0px 1px black" 
        },
        content: {
            margin: "auto"
        },
        background: {
            backgroundImage: `url(https://global-compositions.s3.eu-west-3.amazonaws.com/${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            borderRadius: "5%",
            display: "flex",
            "&:hover": {
                opacity: 0.80
            }
        },

        playIcon: {
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            margin: "auto",
            "&:hover": {
                transform: "scale(1.1)"
            },
            border: "solid white 1.5px",
            borderRadius: "50%",
            height: 63,
            width: 63
        }
    }));
    const [state, dispatch] = useGlobalState();
    const [showButton, setShowbutton] = useState(false);
    const [imageComposition, setImageComposition] = useState(null);
  
  const readPdf  = (e) =>{
    e.preventDefault();
          
  }

    const classes = useStyles();
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(state.items));
        setImageComposition(image);
    }, [imageComposition, showButton, history, state]);

    const addToShoppingCart = () => {
        const itemsCardAdd = {
            title,
            image,
            price,
            _id
        };
        if (state.items.length > 0) {
            const matchIdCart = state.items.map(x => x._id).indexOf(_id);
            if (matchIdCart === -1) {
             
              dispatch({ items: [...state.items, itemsCardAdd] });
              console.log(state.items)

                
            } else {
                return null;
            }
        } else {
          
            dispatch({ items: [...state.items, itemsCardAdd] });
            
        }
    };

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
    const buttonRead = compo_type === "written"?
    <PDFReaderModal file={file}/> : null


    const buttonPlay =
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
                    style={{ color: "white" }}
                    className={classes.playIcon}
                />
            </IconButton>
        ): null

    return (
      <>
        <Card
            product
            style={{ width: "230px" }}
            onMouseOver={e => setShowbutton(true)}
            onMouseLeave={e => setShowbutton(false)}
            className={classes.root}
        >
            {show === "price" ? (
                <Button
                    onClick={e => {
                        e.preventDefault();
                        addToShoppingCart();
                    }}
                    style={{  background: "black", width: "35%", textAlign: "center" }}
                    round
                    size='sm'
                >
                    {price} € <br />
                    <AddShoppingCartIcon />
                </Button>
            ) : null}

            <div className={classes.background}>
                <CardBody className={classes.content}>
                    {showButton ? buttonPlay : null}
                    {buttonRead}
                </CardBody>
            </div>

            
        </Card>
        <GridContainer>
                <GridItem
                    style={{ color: "white", textAlign: "center" , marginTop: 5, marginBottom: 25}}
                    sm={12}
                    md={12}
                >
                    <Typography color='secondary' component='h7' variant='h6'>
                        <Link style={{ color: "white", textShadow: "1px 0px 1px black" }}>{title}</Link>
                    </Typography>
                </GridItem>
            </GridContainer>
        </>
    );
};

export default CardMusicPlayer;
