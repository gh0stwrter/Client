/*eslint-disable*/
import React, {useCallback,useEffect, useState} from "react";
import {useMutation} from "@apollo/react-hooks";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./Sections/SectionPills.js";
import SectionInterested from "./Sections/SectionInterested.js";
import SectionImage from "./Sections/SectionImage.js";
import SubscribeLine from "./Sections/SubscribeLine.js";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import AttachFile from "@material-ui/icons/AttachFile";
import { UPLOAD_WRITTEN_COMP } from "apollo/uploads";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import {useDropzone} from 'react-dropzone'

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {  
const [filesList, setFilesList] = useState([]); 
const [addWrittenComp] = useMutation(UPLOAD_WRITTEN_COMP,{
      onCompleted(){
      },
      variables:{
          file: null,
          writtenInput:{
          userId:"5e5cde8d44edde2c70339d07",
          title:"Oh Primaire",
          category:"5e10ff08736953c91e4cf40e",
          isPublish: true,
          price: 12.33
        }
      }
    })
    useEffect(()=>{
      console.log(filesList ? filesList : null)
    },[filesList])
    const onDrop = useCallback(
      ([file]) =>{
       setFilesList([...filesList, file])
       console.log(filesList)
        
      },[filesList]
    );
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
 

  const classes = useStyles();
  const {acceptedFiles,getRootProps,getInputProps, isDragActive} = useDropzone({ onDrop })
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                A Place for Entrepreneurs to Share and Discover New Stories
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
        <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input multiple {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <button onClick={e => {
        addWrittenComp({ 
          variables:  {file:[filesList]}
        })
      }}>Send files</button>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
    

          <SectionPills />
          <SectionInterested />
        </div>
        <SectionImage />
        <SubscribeLine />
      </div>
      <Footer
        content={
          <div>
            
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-blog-posts"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-blog-posts"
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
                    href="https://www.creative-tim.com/license?ref=mkpr-blog-posts"
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
                href="https://www.creative-tim.com?ref=mkpr-blog-posts"
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
