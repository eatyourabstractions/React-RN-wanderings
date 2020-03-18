import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  rowC: {display:'flex',
         flexDirection:'row',
         justifyContent: 'center',
        },
    
    item: {width: 105}
}));

export default function OrderToggle(props) {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const toggleChecked = () => {
    setChecked(prev => !prev);
    props.sortFunc(p => !p)
  };

  return (
    <div className={classes.rowC}>
      <label className={classes.item}>Earliest first</label>
    <FormGroup >
      <FormControlLabel id="deadline-input"
        control={<Switch checked={checked} onChange={toggleChecked}  />}
      />
    </FormGroup>
      <label className={classes.item}>Latest first</label>
    </div>
  );
}