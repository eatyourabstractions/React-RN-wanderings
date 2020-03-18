import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      flexDirection: 'column',
    },
    otis:{
        listStyleType: 'none',
    }
  }));
  


export default function WaysToBuy() {
    const [checked, setChecked] = React.useState(true);
    const classes = useStyles();

    const handleChange = event => {
      setChecked(event.target.checked);
    };


    return (
        <FormControl component="fieldset">
        <FormLabel component="legend" variant="h1">Ways to Buy</FormLabel>
                <FormGroup aria-label="position" column>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Buy now"
                    labelPlacement="end"
                />

                 <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Make offer"
                    labelPlacement="end"
                />

                 <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Bid"
                    labelPlacement="end"
                />
                 <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Inquire"
                    labelPlacement="end"
                />
                </FormGroup>
                </FormControl>
            
     
    );
  }