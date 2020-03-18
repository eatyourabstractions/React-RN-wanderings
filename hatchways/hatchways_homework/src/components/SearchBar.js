import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 965,
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const myLabel = "Filter by worker name..."
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" 
      id="name-input"
      label={myLabel}  
      onChange={(ev) => props.search(ev.target.value)}/>
     
    </form>
  );
}
