import {
  container,
  section,
  grayColor
} from "assets/jss/material-kit-pro-react.js";

const descriptionStyle = {
  container,
  description: {
    color: grayColor[0],
    textAlign: "center"
  },
  section: {
    ...section,
    padding: "0px",
    "& h4$description": {
      fontSize: "1.5em"
    }
  },
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "30px",
    "& p": {
      fontSize: "16px",
      lineHeight: "1.6em"
    }
  }
};

export default descriptionStyle;
