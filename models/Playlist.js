const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    channel: { type: String, required: true}, //objectID string
    tags: [String],
    content: [{
	title: String,
	url: String,
	backend: { type: String, enum: ['react-player', 'react-twitter-embed', 'external'], required: true },
	isArchived: { type: Boolean, default: false },
	thumbnailUrl: String
    }]
});

PlaylistSchema.pre('save', function(next) {
    //collect thumbnail urls from noembed
    //evaluate backend type based on url 
    next();
}

module.exports = mongoose.model("Playlist", PlaylistSchema); 
