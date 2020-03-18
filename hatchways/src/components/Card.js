import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rowC: {display:'flex',
         flexDirection:'row',
         justifyContent: 'space-around'
        },
}));

export default function WorkerCard(props){
    let d = new Date(props.orderInfo.deadline * 1000)
    let utcString = d.toUTCString(); 
    let deadline = utcString;
    let description = props.orderInfo.description
 
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
        title={props.orderInfo.name}
        subheader = {'deadline: ' + deadline }
           
            />
            <CardHeader
            subheader={'description: ' + description}
            />
        <CardContent>
        <div className={classes.rowC}>
            <Avatar className={classes.avatar}>OP</Avatar>

            <Typography variant="body1" color="textSecondary" component="p" align="left">
                {props.identity.name} <br/>
                {props.identity.email} <br/>
                {props.identity.companyName}

            </Typography>
        </div>
      </CardContent>
        
        </Card>
    )
    
}