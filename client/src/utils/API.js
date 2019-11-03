import axios from "axios";

export default {
    // Gets all videos
    getVideos: function () {
        return axios.get("/api/videos");
    },
    // Gets the video with the given id
    getVideo: function (id) {
        return axios.get("/api/videos/" + id);
    },
    // Deletes the video with the given id
    deleteVideo: function (id) {
        return axios.delete("/api/videos/" + id);
    },
    // Saves a video to the database
    saveVideo: function (videoData) {
        return axios.post("/api/videos", videoData);
    }
};