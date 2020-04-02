import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

export default function VoteForm(props) {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const capitalizeFirstLetter = (str) =>{
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const radioBtnList = props.elems.map((el) =>{
    const myLabel = capitalizeFirstLetter(el);
    return <FormControlLabel value={el} control={<Radio />} label={myLabel} />

  });

  const handleSubmit = ev =>{
      alert(value)
      ev.preventDefault();
  }

  return (
      <div style={{marginLeft: 50}}>
    <form onSubmit={handleSubmit}>
    <FormControl component="fieldset">
      <FormLabel component="legend">{capitalizeFirstLetter(props.title)}</FormLabel>
      <RadioGroup aria-label="gender" name={props.title + "1"} value={value} onChange={handleChange}>
       {radioBtnList}
      </RadioGroup>
        <Button type="submit" variant="outlined" color="secondary" style={{marginTop: 20}}>
          Vote
        </Button>
    </FormControl>
    </form>
    </div>
  );
}
