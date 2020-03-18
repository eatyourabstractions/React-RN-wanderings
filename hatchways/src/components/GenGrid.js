import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from './Card'



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 700,
  },

}));


export default function GenGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList}>
     
        {props.tileData.map(tile => (
          <GridListTile key={tile.order.id}>
            <Card identity={tile.worker} orderInfo={tile.order}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
