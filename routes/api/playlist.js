const express = require('express');
var router = express.Router();
const Playlist = require('../../models/Playlist');
const ObjectID = require('mongoose').Types.ObjectID;
// const Channel = require('../../models/Channel');
const jwt = require('jsonwebtoken');
var validation = require('../../modules/validation');
const is = require('is_js');

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
    const body = req.body;

    // check to see if fields are existing and valid
    const {isValid, errors} = validation.createPlaylist(body);
    // at least one error found, return errors object
    if (!isValid) {
	return res.status(400).json(errors);
    }

    const newPlaylistData = {
	title: body.title,
	description: body.description,
	channel: body.channel,
	content: body.content
    };

    if (is.existy(body.tags)) {
	newPlaylistData.tags = body.tags;
    }
    // does content array contain at least one element?
    // create db object & save
    var newPlaylist = new Playlist(newPlaylistData);

    newPlaylist.save()
	.then(playlist => {
	    return res.status(200).json({
		title: playlist.title,
		description: playlist.description,
		content: playlist.content,
		channel: playlist.channel,
		playlistID: playlist._id.toString()
	    });
	})
	.catch(err => {console.log(err); return res.status(400).json({success: false, error: err});}); 
    // return expanded value set from post-save hook to user
    // res.status(501);
});

router.post('/delete', function(req, res) {
    res.status(501);
    // playlistID valid?
    // if found delete object, return {success:true}
    // else return {success:false, error}
});

/** 
 * @api {post} /api/playlist/fetch Request playlist/multiple playlist information
 * @apiName GetPlaylist
 *
 * @apiParam {String} playlistID valid playlist identifier
 * @apiParam {String} channelID valid channel identifier
 * @apiSuccess {Boolean} success True
 */
router.post('/fetch', function(req, res) {
    const body = req.body;

    if(is.existy(body.channelID)) {
	Playlist.find({channel: body.channelID}, 'title description content channel _id').then(playlists => {
	    if (playlist === null) {
		res.status(400).json({success: false, error: "that channel does not exist"});
	    } else {
		res.status(200).json(playlists);
	    }
	});
    } else if(is.existy(body.playlistID)) {
	Playlist.findOne({_id: new ObjectID(body.playlistID)}).then(playlist => {
	    if (playlist === null) {
		res.status(400).json({success: false, error: "that playlist does not exist"});
	    } else {
		res.status(200).json({
		    title: playlist.title,
		    description: playlist.description,
		    content: playlist.content,
		    channel: playlist.channel,
		    playlistID: playlist._id.toString()
		});
	    }
	});
    } else {
	res.status(400).json({success: false, error: "invalid request, please include either a channel or playlist id string"});
    }
    // playlistID or channelID?
    // if playlistID, return same content as /create return
    // if channelID, return array of playlists, same of each as /create return
    res.status(501);
});

router.post('/update', function(req, res) {
    res.status(501);
});

module.exports = router;
