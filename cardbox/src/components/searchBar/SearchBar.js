import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  myBar: {
    '& > *': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  root: {
    flexGrow: 1,
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const myLabel = "Filter by worker name..."
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={7}>
      <Grid item xs={6}>
          <form className={classes.myBar} noValidate autoComplete="off">
            <TextField id="standard-basic" 
            label={myLabel}  
            onChange={(ev) => props.search(ev.target.value)}/>
          
          </form>
       </Grid>
       <Grid item xs={6}>
            <Button variant="contained" color="primary" >
              Artwork
              </Button>
       </Grid>
        </Grid>
    </div>
  );
}
