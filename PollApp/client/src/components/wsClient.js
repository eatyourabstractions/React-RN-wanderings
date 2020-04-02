import React, { Component } from 'react';
import VoteForm from './VoteForm';
import ResultCanvas from './ResultCanvas';
import Box from '@material-ui/core/Box';

export default class WSClient extends Component {
    constructor(props) {
        super(props);
        //this.sendMessage = this.sendMessage.bind(this)

        this.state = {
            title: '',
            options: [],
            socket: null,
            results: []
        };
    }

    // single websocket instance for the own application and constantly trying to reconnect.

    componentDidMount() {
        this.connect();
    }

    timeout = 250; // Initial timeout duration as a class variable

    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        var ws = new WebSocket("ws://localhost:5000");
        let that = this; // cache the this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");
            this.setState({
                ...this.state,
                 socket: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        ws.onmessage = (evt) =>{
            var command = JSON.parse(evt.data);
            console.log(command)

            if(command.type === 'poll_update') {
                this.setState({
                    ...this.state,
                    results: command.payload
                })
  
            }
            else if (command.type === 'init') {
                this.setState({
                    ...this.state,
                    title: command.title,
                    options: command.options
                })
            }
        }

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    };

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { socket } = this.state;
        if (!socket || socket.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };

    sendMessage=(data)=>{
        const {socket} = this.state // websocket instance passed as props to the child component.

        try {
            socket.send(data) //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }

    render() {
        return (
                <Box>
                    <VoteForm 
                        title={this.state.title}
                         elems={this.state.options}
                         sendMessage={this.sendMessage}/>
                    <br/>
                    <br/>
                    <br/>
                    <ResultCanvas data={this.state.results}/>
                </Box>
        )
    }
}

