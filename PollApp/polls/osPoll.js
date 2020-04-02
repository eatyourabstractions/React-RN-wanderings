const Vote = require('../models/Vote');

const populate = () => {
    const fst = new Vote({choice: 'windows', points: 0});
    const snd = new Vote({choice: 'MacOS', points: 0});
    const third = new Vote({choice: 'Linux', points: 0});
    const fourth = new Vote({choice: 'Other', points: 0});
    const state = [fst, snd, third, fourth];

    Vote.insertMany(state);

}

// To Count Documents of a particular collection
const initDB = () => {
    Vote.count(function(err, count) {

        if( count === 0) {
            console.log("No Found Records.");
            console.log("Populating DB");
            populate()
        }
        else {
            console.log("Found Records : " + count);
        }
    });
}

module.exports = initDB