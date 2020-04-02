const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const WebSocket = require('ws');
const Vote = require('./models/Vote');

const votesAPI = require('./routes/api/votes');

const initDB = require('./polls/osPoll')
const startPollService = require('./polls/wsServer')

const app = express();

// body parser midddleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

initDB();
// websocket server

startPollService(5000);


// End of WS server

app.use('/api/votes', votesAPI);

// serve static assets if in prod.
if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('/client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = 5001;

// app.listen(port, () => console.log(`server started on port ${port}`))
app.listen(port, () => console.log(`server started on port ${port}`))