import React from 'react';
import Box from '@material-ui/core/Box';
import DeleteItemBtn from './DeleteItemBtn';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 700,
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


export default function CreatePoll(props){
    const classes = useStyles();

    const BtnList = props.elems.map((el) =>{
        return( 
        <GridListTile>
        <DeleteItemBtn key={el} content={el} delete={() => {console.log("hello again!")}} /> 
        </GridListTile>
        )
    
      });


    return (
        <Box>
            <GridList cellHeight={70} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
                    {BtnList}
            </GridList>
        </Box>
    )
}



