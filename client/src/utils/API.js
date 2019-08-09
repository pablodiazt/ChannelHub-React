import http from "../services/httpService";

export default {
  // Gets videos from the youtube api 
  getVideos: function(q) {
    return http.get("/api/youtube", {
      params: { q: "title:" + q }
    });
  },
<<<<<<< HEAD
  // Gets all saved vgideos
=======
  // Gets all saved videos
>>>>>>> 471a4dc37399d49abf4923b988eb3eb55b66a71c
  getSavedVideos: function() {
    return http.get("/api//videos");
  },
  // Deletes the saved video with the given id
  deleteVideo: function(id) {
    return http.delete("/api//videos/" + id);
<<<<<<< HEAD
  },
  // Saves a video to the database
  saveVideo: function(bookData) {
    return http.post("/api//videos", videoData);
  }
=======
  }
  // Saves a video to the database
  // saveVideo: function(bookData) {
  //   return http.post("/api//videos", videoData);
  // }
>>>>>>> 471a4dc37399d49abf4923b988eb3eb55b66a71c
};