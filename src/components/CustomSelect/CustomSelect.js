import React, {useEffect} from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import styles from "assets/jss/material-kit-pro-react/customSelectStyle.js";
import CreateIcon from '@material-ui/icons/Create';
import PublicIcon from '@material-ui/icons/Public';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(styles);

export default function Example({data, categoriesData,setSelect}){
  const droits = ["PUBLIC", "PRIVATE"]
  const compo_type = ["SONORE", "WRITTEN"]
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [simpleCategories] = React.useState([]);

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
    setSelect(event)
  };
useEffect(()=>{

},[simpleCategories])



  const classes = useStyles();
  return (
    data === "droit" ? 
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
            onChange={e => handleSimple(e)}
            inputProps={{
              name: "isPublish",
              id: "simple-select"
            }}
          >
             
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
                PUBLIQUE/PRIVÉ
            </MenuItem>
            {
                   droits.map((item)=>
            <MenuItem
              key={item}
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value={item}
            >
                <div>
              {item === "PRIVATE" ? <LockIcon/> : <PublicIcon/>}
              {item}
              </div>
            </MenuItem>
                  )
              }
                       
          </Select>
        </FormControl>: data === "compo_type" ? 
        <FormControl fullWidth className={classes.selectFormControl}>
        <InputLabel
          htmlFor="simple-select"
          className={classes.selectLabel}
        >
            Type de composition
        </InputLabel>
        <Select
          MenuProps={{
            className: classes.selectMenu
          }}
          classes={{
            select: classes.select
          }}
          value={simpleSelect}
          onChange={e => handleSimple(e)}
          inputProps={{
            name: "compo_type",
            id: "simple-select"
          }}
        >
           
          <MenuItem
            disabled
            classes={{
              root: classes.selectMenuItem
            }}
          >
              SONORE/WRITTEN
          </MenuItem>
          {
                 compo_type.map((item)=>
          <MenuItem
          key={item}
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected
            }}
            value={item}
          >
            {item === "SONORE" ? <MusicNoteIcon/> : null}
            {item === "WRITTEN" ? <CreateIcon/> : null}
            {item}
          </MenuItem>
                )
            }
                     
        </Select>
      </FormControl> : data === "categorie" ?
              <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
            >
            Categorie de composition
        </InputLabel>
       <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={simpleSelect}
        onChange={e => handleSimple(e)}
        inputProps={{
          name: "category",
          id: "simple-select"
        }}
      >
     {  categoriesData.map((item)=>

<MenuItem
      key={item._id}
      classes={{
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
      }}
      value={item._id}
      >
      <h6>{item.name}</h6> 
</MenuItem>)}
       
        
                   
      </Select> 
       
              
            </FormControl>: null
      
  );
}