import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
     root: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        margin: 10,
      },
  }));



export default function DeleteItemBtn(props){

    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <IconButton aria-label="Close" onClick={props.delete}>
            X
          </IconButton> 
        <Typography  variant="h5" style={{marginTop: 10}}>
            {props.content}
          </Typography>
      </Card>
 
  )
}
