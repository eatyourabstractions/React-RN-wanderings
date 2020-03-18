import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// my components
import AppBar from '../searchBar/AppBar';
import NestedList from '../myArtisticForm/nestedForm'
import SingleLineGridList from '../categories/categoryArea'
import { genData } from '../categories/categoryArea.stories'
import getMeOne from '../categories/fetchCategories'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const lizards = genData();
  console.log(getMeOne('impressionism'))
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar/>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography gutterBottom variant="h4" component="h2">
        <Box textAlign="left" >
          Collect Art and Get Inspired
          </Box>
          </Typography>
          </Paper>
        </Grid>
        <Grid  item xs={12} >
   
        <SingleLineGridList tileData={lizards}/>
        </Grid>
        <Grid item xs={4}>
          <NestedList/>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
