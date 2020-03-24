import React , {useState}from "react";
// @material-ui/core components
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import { Document, Page} from 'react-pdf';

import { pdfjs } from 'react-pdf';
import VisibilityIcon from '@material-ui/icons/Visibility';
import style from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ExampleOptionalSizes({file}) {
  const [smallModal, setSmallModal] = React.useState(false);
  const [largeModal, setLargeModal] = React.useState(false);
  const [numPages, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 const onDocumentLoadSuccess = ({numPage}) => {
   console.log(numPage)
  setNumPage( {numPage} );
  }
  const classes = useStyles();
  return (
    <div>
         <IconButton onClick={() => setLargeModal(true)}> <VisibilityIcon style={{fontSize: 70,  border:"solid white 2px", borderRadius:"50%"}}/> </IconButton>
      
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalLarge
        }}
        open={largeModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLargeModal(false)}
        aria-labelledby="large-modal-slide-title"
        aria-describedby="large-modal-slide-description"
      >
        <DialogTitle
        style={{textAlign:"center"}}
          id="large-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setLargeModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Lecteur de composition Lyrics</h4>
        </DialogTitle>
        <DialogContent
          id="large-modal-slide-description"
          className={classes.modalBody}
        >
        <Document
          file={`https://cors-anywhere.herokuapp.com/https://global-compositions.s3.eu-west-3.amazonaws.com/${file ? file : null}`}
          onSourceSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>

        </DialogContent>
      </Dialog>

     
    </div>
  );
}