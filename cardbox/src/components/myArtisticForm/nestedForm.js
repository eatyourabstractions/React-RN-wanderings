import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// my components
import WaysToBuy from './waysToBuy';
import RadioBtnForm from './mediumForm';
import RangeSlider from './priceRangeForm';
import SizeSlider from './sizeForm';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [mediumTab, toggleMedium] = React.useState(false);
  const [priceTab, togglePrice] = React.useState(false);
  const [sizeTab, toggleSize] = React.useState(false);

  const handleMediumClick = () => {
    toggleMedium(!mediumTab);
  };

  const handlePriceClick = () => {
    togglePrice(!priceTab);
  };

  const handleSizeClick = () => {
    toggleSize(!sizeTab);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem >
        <WaysToBuy/>
      </ListItem>
      {/* medium Tab*/}
      <ListItem button onClick={handleMediumClick}>
        <ListItemText primary="Medium" />
        {mediumTab ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={mediumTab} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <RadioBtnForm/>
          </ListItem>
        </List>
      </Collapse>
      {/* price Tab*/}
      <ListItem button onClick={handlePriceClick}>
        <ListItemText primary="Price" />
        {priceTab ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={priceTab} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <RangeSlider/>
          </ListItem>
        </List>
      </Collapse>
      {/* size Tab*/}
      <ListItem button onClick={handleSizeClick}>
        <ListItemText primary="Size" />
        {sizeTab ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={sizeTab} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <SizeSlider/>
          </ListItem>
        </List>
      </Collapse>

    </List>
  );
}
