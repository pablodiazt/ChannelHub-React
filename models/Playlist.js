const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');

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

PlaylistSchema.pre('save', function(next) {
    //get noembed endpoint list
    //collect thumbnail urls from noembed
    //evaluate backend type based on url 
    next()
});

function getThumbnailUrl(url) {
    axios.get("https://noembed.com/embed?url="+url)
	.then(function(response) {
	    return {error: false, thumbnailUrl: response.data.thumbnail_url};
	})
	.catch(function(error) {
	    console.log(error);
	    return {error: true};
	})
}

module.exports = mongoose.model("Playlist", PlaylistSchema); 
