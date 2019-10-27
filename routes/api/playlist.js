const express = require('express');
var router = express.Router();
const Playlist = require('../../models/Playlist');
// const Channel = require('../../models/Channel');
const jwt = require('jsonwebtoken');

// *=required
// {
//   title: string*
//   description: string*
//   tags: [string]
//   channel: string*
//   content: [ *at least size 1 with the following parameters
//     {
//       title: string*
//       url: string*
//     }
//   ]
// } 
router.post('/create', function(req, res) {
    // check to see if fields are existing and valid
    // does content array contain at least one element?
    // create db object & save
    // return expanded value set from post-save hook to user
    res.status(501);
});

router.post('/delete', function(req, res) {
    // playlistID valid?
    // if found delete object, return {success:true}
    // else return {success:false, error}
    res.status(501);
});

router.post('/fetch', function(req, res) {
    // playlistID or channelID?
    // if playlistID, return same content as /create return
    // if channelID, return array of playlists, same of each as /create return
    res.status(501);
});

router.post('/update', function(req, res) {
    res.status(501);
});

module.exports = router;
