import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 165,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.myImg.src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <Box textAlign="center" m={1}>
            {props.myImg.title}
            </Box>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
