import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Button from "components/CustomButtons/Button.js";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.js";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

import StepperComposition from "components/Stepper/StepperComposition"
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import AlbumIcon from '@material-ui/icons/Album';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
const style = theme => ({
    ...modalStyle(theme),
    ...popoverStyles,
    ...tooltipsStyle,
    ...styles,
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);
export default function UploadModal() {
    const [openModal, setOpen] = React.useState(false);
    const classes = useStyles();
    
    React.useEffect(() => {
        document.body.scrollTop = 0;
    });
    
    return (
        <div>
            <Card style={{ textAlign: "center", background:"#333436",color:"white", height:"150px"}}  onClick={() => setOpen(true)}>
           <CardBody>
            <h5> <AlbumIcon style={{fontSize:50}}/>  <br/>  Publier un Album Sonore ou Lyric</h5> 
            </CardBody>
            </Card>
            <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + " " + classes.modalSignup
                }}
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                aria-labelledby="large-modal-slide-title"
                aria-describedby="large-modal-slide-description"
            >
               
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >


                    
                    <h3 className={classes.modalTitle}>Partager/Mettre en vente votre composition</h3>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >
                <StepperComposition/>

                    {/* UPLOAD */}

                    {/* <section className="container">


                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input multiple {...getInputProps()} />
                            <Button color="transparent"><i className="material-icons">folder</i> importé</Button>
                        </div>

                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>

                        

                    </section> */}
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button onClick={() => setOpen(false)} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}