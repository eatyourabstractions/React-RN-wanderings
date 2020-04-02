import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList,
} from 'recharts';



export default function ResultsBarChart(props) {

    return (
      <BarChart
        width={900}
        height={400}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Bar dataKey="votes" fill="#8884d8" >
        <LabelList dataKey="votes" position="insideTop" />
        </Bar>
      </BarChart>
    );
}
