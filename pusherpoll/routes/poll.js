const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/Vote')
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '967001',
    key: 'd54d8cbd333b9dfb92a7',
    secret: '01e9af268d38c239a8fa',
    cluster: 'us2',
    encrypted: true
  });


router.get('/', (req, res) => {
    Vote.find().then(vote => {
      res.json({success: true, votes: vote})
    });
});

router.post('/', (req, res) => {
    const newVote = {
      os: req.body.os,
      points: 1
    }

    new Vote(newVote).save().then(vote => {
      
      pusher.trigger('os-poll', 'os-vote', {
          points: parseInt(vote.points),
          os: vote.os
        });
  
        return res.json({success: true, msg:'Thank you for voting'})

    })


});

module.exports = router;