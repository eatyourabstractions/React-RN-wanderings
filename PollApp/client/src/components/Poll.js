import React from 'react';
import Box from '@material-ui/core/Box';
import ResultCanvas from './ResultCanvas';
import VoteForm from './VoteForm';

export default function Poll(props){
    return (
        <Box>
            <VoteForm title={props.Data.title} elems={props.Data.options}/>
            <br/>
            <br/>
            <br/>
            <ResultCanvas data={props.Data.results}/>
        </Box>
    )
}
