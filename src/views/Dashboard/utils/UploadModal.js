import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.js";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.js";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { useDropzone } from 'react-dropzone'
import { UPLOAD_WRITTEN_COMP } from "apollo/uploads";

const style = theme => ({
    ...modalStyle(theme),
    ...popoverStyles,
    ...tooltipsStyle
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);
export default function UploadModal() {
    const [openModal, setOpen] = React.useState(false);
    const classes = useStyles();
    const [filesList, setFilesList] = useState([]);
    const [addWrittenComp] = useMutation(UPLOAD_WRITTEN_COMP, {
        onCompleted() {
        },
        variables: {
            file: null,
            writtenInput: {
                userId: "5e5cde8d44edde2c70339d07",
                title: "Oh Primaire",
                category: "5e10ff08736953c91e4cf40e",
                isPublish: true,
                price: 12.33
            }
        }
    })
    useEffect(() => {
        console.log(filesList ? filesList : null)
    }, [filesList])
    const onDrop = useCallback(
        ([file]) => {
            setFilesList([...filesList, file])
            console.log(filesList)

        }, [filesList]
    );
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });


    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
      </li>
    ));

    return (
        <div>
            <Button color="transparent" onClick={() => setOpen(true)}>
                Publier une intru
      </Button>
            <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                }}
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => setOpen(false)}
                    >
                        {" "}
                        <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>Publication intru</h4>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >

                    {/* UPLOAD */}

                    <section className="container">


                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input multiple {...getInputProps()} />
                            <Button color="transparent"><i className="material-icons">folder</i> importé</Button>
                        </div>

                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>

                        {/*  */}

                    </section>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button onClick={() => setOpen(false)} color="secondary">
                        Close
          </Button>
                    <Button color="success" onClick={e => {
                        addWrittenComp({
                            variables: { file: [filesList] }
                        })
                    }}>Send files</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}