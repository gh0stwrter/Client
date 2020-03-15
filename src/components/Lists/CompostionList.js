import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const useStyles = makeStyles(theme => ({
  root: {
    color: "white",
    width: '100%',
    height: 400,
    maxWidth: 500,
    background:"#222224",
},
}));

function renderRow(props) {
  const { index, style } = props;

  return (
      <div >
    <ListItem button style={style,
         { borderTop: "solid grey 2px"}
      } key={index}>
        <ListItemIcon>
            <PlayCircleFilledIcon/>
        </ListItemIcon>
      <ListItemText primary={`Item ${index + 1} ` }/>
        
    </ListItem>
    </div>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={400} width={380} itemSize={30} itemCount={12}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}