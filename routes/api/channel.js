const express = require('express');
var router = express.Router();
const Channel = require('../../models/Channel');
const jwt = require('jsonwebtoken');
var validation = require('../../modules/validation');
const is = require('is_js');
const ObjectID = require('mongoose').Types.ObjectID;
// *=required
// {
//   title: string*
//   description: string*
//   collaborators: [string]
// }
// get owning user from incoming jwt token in header
router.post('/create', function(req, res) {
    const body = req.body;

    // check to see if fields are existing and valid
    const {isValid, errors} = validation.createChannel(body);
    // at least one error found, return errors object
    if (!isValid) {
	return res.status(400).json(errors);
    }

    const newChannelData = {
	title: body.title,
	description: body.description,
	owningUser: body.user
    };

    if (is.existy(body.collaborators)) {
	newChannelData.collaborators = body.collaborators;
    }
    // does content array contain at least one element?
    // create db object & save
    var newChannel = new Channel(newChannelData);

    newChannel.save()
	.then(channel => {
	    return res.status(200).json({
		success: true,
		title: channel.title,
		description: channel.description,
		channelID: channel._id.toString()
	    });
	})
	.catch(err => {console.log(err); return res.status(400).json({success: false, error: err});}); 
    // return expanded value set from post-save hook to user
    // res.status(501);
});

router.post('/delete', function(req, res) {
    res.status(501);
});

router.post('/fetch', function(req, res) {
    const body = req.body;
    if (is.existy(body.user)) {
	Channel.find({owningUser = user}, 'title description _id').then(channels => {
	    if (channels === null) {
		res.status(400).json({success: false, error: "no channels found for user supplied"});
	    } else {
		res.status(200).json({success: true, channels: channels});
	    }
	});
    } else {
	res.status(400).json({success: false, error: "no user supplied"});
    }
});

router.post('/update', function(req, res) {
    res.status(501);
});

module.exports = router;
