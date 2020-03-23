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

const CardMusicPlayer = ({
    data: { title, image, file, price, id },
    show
}) => {
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

    const classes = useStyles();
    useEffect(() => {
        localStorage.setItem("items", state.items);
        setImageComposition(image);
    }, [imageComposition, showButton, history, state]);

    const addToShoppingCart = () => {
        const itemsCardAdd = {
            title,
            image,
            price,
            id
        };

        if (state.items.length > 0) {
            const matchIdCart = state.items.map(x => x.id).indexOf(id);
            if (matchIdCart === -1) {
                dispatch({ items: [...state.items, itemsCardAdd] });
            } else {
                return null;
            }
        } else {
            dispatch({ items: [...state.items, itemsCardAdd] });
            localStorage.setItem("items", state.items);
        }
    };

    const plays = async () => {
        dispatch({
            bool: true,
            play: true,
            musicPlayed: {
                _id: id,
                music: file,
                title: title,
                image: image
            }
        });
    };
    const pause = e => {
        // e.preventDefault();
        console.log('pause')
        dispatch({ play: false });
    };

    const buttonPlay =
        state && state.musicPlayed._id === id && state.play === true ? (
            <IconButton onClick={pause} aria-label='play/pause'>
                <PauseCircleFilledOutlined
                    color='primary'
                    className={classes.playIcon}
                />
            </IconButton>
        ) : (
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
        );

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
                    style={{ width: "35%", textAlign: "center" }}
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
