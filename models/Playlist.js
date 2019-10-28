const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');
const noembedPatterns = require('../config').noembed;

const PlaylistSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    channel: { type: String, required: true}, //objectID string corresponding to channel document in db 
    tags: { type: [String], default: [] }, // string array of tags, that we can use to make decisions about relevant playlists for users later
    content: [{ // array of content objects, each one corresponds to a video, image, or text document that is put into the playlist by a user
	title: String,
	contentUrl: String,
	backend: { type: String, enum: ['react-player', 'react-twitter-embed', 'noembed', 'external', 'und' ], default: 'und' }, // renderer for embeds, for use in react (filled by post-save hook, shoukd never be 'und' after save.
	isArchived: { type: Boolean, default: false }, // for use later, with archive.is content (hence default no)
	thumbnailUrl: {type: String, default: ""} // empty if no thumbnail could be found by noembed (would also correspond to 'external' backend
    }]
});

// before save: collect thumbnails for content, and assign content rendering backend type
PlaylistSchema.pre('save', function(next) {
    //get noembed endpoint list
    
    // patterns structure:
    // patterns = [ { patterns: [ "regex string" ], title: "provider-name" } ]
    var patterns = noembedPatterns.all;
    // iterate through each content element 
    this.content.forEach(function(contentElement) {
	var patternMatch = false;
	var patternCounter = 0;

	// search through noembed patterns until a matching site is found, or no more patterns remain		
	while (!patternMatch && patternCounter < patterns.length) {
	    patterns[patternCounter].patterns.forEach(function(regexElement) {
		var regex = new RegExp(regexElement);
		if (!patternMatch && regex.test(contentElement.contentUrl)) {
		    patternMatch = true;
		}
	    }); // end forEach loop
	    patternCounter++;
	} // end while loop

	// no match for noembed. not embeddable, set backend to external and no thumbnail, continue to next content element
	if (!patternMatch) {
	    contentElement.backend = 'external';
	    contentElement.thumbnailUrl = '';
	} else {
	    contentElement.backend = 'noembed';
	    contentElement.thumbnailUrl = getThumbnailUrl(contentElement.contentUrl);
	    
	    console.log(contentElement.thumbnailUrl);
	    var reactPlayerPatterns = noembedPatterns.reactPlayer;
	    var patternMatch = false;
	    var patternCounter = 0;
	    // search through reactPlayer patterns until a matching site is found, or no more patterns remain		
	    while (!patternMatch && patternCounter < reactPlayerPatterns.length) {
		var regex = new RegExp(reactPlayerPatterns[patternCounter]);
		if (regex.test(contentElement.contentUrl)) {
		    patternMatch = true;
		}
		patternCounter++;
	    }
	    if (patternMatch) {
		contentElement.backend = 'react-player';
	    } else {
		var twitterRegex = new RegExp(noembedPatterns.twitter);
		if (twitterRegex.test(contentElement.contentUrl)) {
		    contentElement.backend = 'react-twitter-embed';
		}
	    }
	}
    });
    next();
});

// needs to be async, gh issue #1
function getThumbnailUrl(url) {
    axios.get("https://noembed.com/embed?url="+url)
	.then(function(response) {
	    return response.data.thumbnail_url;
	})
	.catch(function(error) {
	    console.log(error);
	})
}

module.exports = mongoose.model("Playlist", PlaylistSchema); 
