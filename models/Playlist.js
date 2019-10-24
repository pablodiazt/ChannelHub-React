const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');
const noembedPatterns = require('../config').noembed;

const PlaylistSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    channel: { type: String, required: true}, //objectID string
    tags: [String],
    content: [{
	title: String,
	url: String,
	backend: { type: String, enum: ['react-player', 'react-twitter-embed', 'noembed', 'external'], required: true },
	isArchived: { type: Boolean, default: false },
	thumbnailUrl: String
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
		if (!patternMatch && regex.test(contentElement.url)) {
		    patternMatch = true;
		}
	    }); // end forEach loop
	} // end while loop

	// no match for noembed. not embeddable, set backend to external and no thumbnail, continue to next content element
	if (!patternMatch) {
	    contentElement.backend = 'external';
	    contentElement.thumbnailUrl = '';
	    continue;
	} else {
	    contentElement.backend = 'noembed';
	    contentElement.thumbnailUrl = getThumbnailUrl(contentElement.url);

	    var reactPlayerPatterns = noembedPatterns.reactPlayer;
	    var patternMatch = false;
	    var patternCounter = 0;
	    // search through reactPlayer patterns until a matching site is found, or no more patterns remain		
	    while (!patternMatch && patternCounter < reactPlayerPatterns.length) {
		var regex = new RegExp(reactPlayerPatterns[patternCounter]);
		if (regex.test(contentElement.url)) {
		    patternMatch = true;
		}
	    }
	    if (patternMatch) {
		contentElement.backend = 'react-player';
		continue;
	    }

	    var twitterRegex = new RegExp(noembedPatterns.twitter);
	    if (twitterRegex.test(contentElement.url)) {
		contentElement.backend = 'react-twitter-embed';
	    }
	}
    });
    next();
});

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
