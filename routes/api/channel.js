const express = require('express');
var router = express.Router();
const Channel = require('../../models/Channel');
const jwt = require('jsonwebtoken');
var validation = require('../../modules/validation');
const is = require('is_js');

// *=required
// {
//   title: string*
//   description: string*
//   tags: [string]
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

    if (is.existy(body.tags)) {
	newChannelData.tags = body.tags;
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
    Channel.find({ owningUser: req.body.username }).then(channels => {
	var returnVals = {};
	channels.forEach(function(element) {
	    returnVals += {
		title: element.title,
		description: element.description,
		channelID: element._id.toString()
	    }
	});
	res.status(200).json(returnVals)
    });
});

router.post('/update', function(req, res) {
    res.status(501);
});

module.exports = router;
