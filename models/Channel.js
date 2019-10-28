const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    owningUser: { type: String, required: true }, // debate on using username or objectID string representation, not sure.
    collaborators: { type: [String], default: [] },
    tags: { type: [String], default: [] }
})

ChannelSchema.pre('delete', function(next) {
    // should delete all playlists associated with this channel (do a find() for this channel's objectID in playlists collection)
    next();
});

ChannelSchema.pre('save', function(next) {
    // check all playlists associated and pull new tags and add to tags array
    next();
});

module.exports = mongoose.model("Channel", ChannelSchema);
