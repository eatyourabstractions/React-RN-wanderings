const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pusherpoll')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));