import http from "../services/httpService";

export default {
  // Gets videos from the youtube api 
  getBooks: function(q) {
    return http.get("/api/youtube", {
      params: { q: "title:" + q }
    });
  },
  // Gets all saved videos
  getSavedBooks: function() {
    return http.get("/api//videos");
  },
  // Deletes the saved video with the given id
  deleteBook: function(id) {
    return http.delete("/api//videos/" + id);
  },
  // Saves a video to the database
  saveBook: function(bookData) {
    return http.post("/api//videos", videoData);
  }
};