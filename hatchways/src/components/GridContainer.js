import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'

import OrderToggle from './OrderToggle';
import GenGrid from './GenGrid';
import SearchBar from './SearchBar'


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

export default function GridContainer() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [sort, setSort] = useState(false);
  const [workerName, setWname] = useState("");

  
  const work_orders = "https://www.hatchways.io/api/assessment/work_orders"
  const workers_info_url = "https://www.hatchways.io/api/assessment/workers/"
  function  byDate(a, b){
      return new Date(a.order.deadline) - new Date(b.order.deadline)
  }
  
  
    useEffect(() => {
    const fetchData = async () => {
    const myOrders = await axios.get(work_orders)
    

    let myData = [];
    let worker_cache = new Map();
    let i;
    for(i=0; i < myOrders.data.orders.length; i++){
        let _order = myOrders.data.orders[i]
        if(worker_cache.has(_order.workerId)){
          myData.push({order:_order , worker: worker_cache.get(_order.workerId) })
        } else {
        let myWorker = await axios.get(workers_info_url + _order.workerId)
        myData.push({order:_order , worker: myWorker.data.worker })
        worker_cache.set(_order.workerId, myWorker.data.worker)
      }
    }
    
     
   
        
     const earliest_first = myData.sort(byDate)
     setLatest([...earliest_first].reverse())
      setData([...earliest_first]);
    };
    fetchData();
  }, []);
    
    useEffect(() =>{
        setData(latest)
        setLatest(data)
    },[sort])
    


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <SearchBar search={setWname}/>
        </Grid>
        <Grid item xs={12}>
          <OrderToggle sortFunc={setSort}/>
        </Grid>
        <Grid item xs={12}>
          <GenGrid 
            tileData={data.filter(item => { 
              return item.worker.name.toLowerCase().replace(/ /g,'')
              .includes(workerName.toLowerCase().replace(/ /g,'') ) } )} />;
        </Grid>
      </Grid>
      
    </div>
  );
}
