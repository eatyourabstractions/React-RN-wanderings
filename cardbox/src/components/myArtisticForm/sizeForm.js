import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function SizeSlider() {
  const classes = useStyles();
  const [height, setHeight] = React.useState([1, 20]);
  const [width, setWidth] = React.useState([1, 20]);

  const handleHeightChange = (event, newValue) => {
    setHeight(newValue);
  };

  const handleWidthChange = (event, newValue) => {
    setWidth(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Height -- min: {height[0]}, max: {height[1]}
      </Typography>
      <Slider
        value={height}
        onChange={handleHeightChange}
        min={1}
        max={20}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      {/* other slider*/}
      <Typography id="range-slider" gutterBottom>
        Width -- min: {width[0]}, max: {width[1]}
      </Typography>
      <Slider
        value={width}
        onChange={handleWidthChange}
        min={1}
        max={20}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
