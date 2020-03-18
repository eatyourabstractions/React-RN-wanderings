import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  myBar: {
    '& > *': {
      margin: theme.spacing(1),
      width: 600,
    },
  },
  root: {
    flexGrow: 1,
  },
}));

export default function SearchBox(props) {
  const classes = useStyles();
  const myLabel = "Filter by worker name..."
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly" spacing={10}>
        <Box>
          <form className={classes.myBar} noValidate autoComplete="off">
            <TextField id="standard-basic" 
            label={myLabel}  
            onChange={(ev) => props.search(ev.target.value)}/>
          
          </form>
        </Box>
        <Box marginTop={3} >
            <Button variant="outlined" color="primary" >
              Artwork
              </Button>
            </Box>
            <Box marginTop={3}>
            <Button variant="outlined" color="secondary" >
              auctions
              </Button>
            </Box>

    </Box>
  );
}
