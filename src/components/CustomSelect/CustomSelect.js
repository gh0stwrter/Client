import React from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-pro-react/customSelectStyle.js";

const useStyles = makeStyles(styles);

export default function Example({data}){
    console.log(data)
  const droits = ["public", "private"]
  const compo_type = ["sonore", "written"]

  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  
  const classes = useStyles();
  return (
     <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
              Droit de l'oeuvre
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select"
            }}
          >
             
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
                
            </MenuItem>
            {
                  data === "droits" ? droits.map((item)=>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value={item}
            >
              item
            </MenuItem>
        

                  ): null
              }
                       
          </Select>
        </FormControl>
      
  );
}