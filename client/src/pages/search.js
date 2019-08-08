import React, { Component } from "react";
import { toast } from "react-toastify";
// import Book from "../components/Book/index";
import SearchForm from "../components/SearchForm/index";
import { List } from "../components/List/index";
import API from "../utils/API";

class Search extends Component {
  state = {
    video: [],
    q: "",
    message: "Are you slacking off at work dirty boy?lolooloololololol"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getVideos = () => {
    API.getVideos(this.state.q)
      .then(res =>
        this.setState({
          videos: res.data,
          currentPage: 1
        })
      )
      .catch(() => {
        toast.error("Your search did not match any YouTube results.");

        this.setState({
          books: [],
          message: "Your search did not match YouTube results.",
          currentPage: 1
        });
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    toast.info("Searching ... !");
    this.getVideos();
  };

  handleBookSave = id => {
    const book = this.state.videos.find(book => book.id === id);
/*
    API.saveVideo({
      googleId: video.id,
      title: video.volumeInfo.title,
      subtitle: video.volumeInfo.subtitle,
      link: video.volumeInfo.infoLink,
      authors: video.volumeInfo.authors,
      description: video.volumeInfo.description,
      image: video.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getVideos());
  };
*/
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-centered">
            <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center">
              <div className="order-sm-2 p-2 bd-highlight">
                <img
                  className="image-250"
                  src="/images/img-books-window.jpg"
                  alt="React Google Books Search"
                />
              </div>
              <div className="order-sm-1 p-2 bd-highlight">
                <h1 className="heading-title mx-sm-3 mb-2">
                  YouTube Search!!!!!
                </h1>
                <h2 className="heading-subtitle mx-sm-3 mb-2">
                  Search for and Save The Videos you like!!!!!!
                </h2>
                <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-centered card-content mb-4">
            <h1 className="heading-title mx-sm-3 mb-2 text-center">Results</h1>

            {this.state.videos.length ? (
              <List>
                {this.state.videos.map(video => (
                  <Book
                    key={video.id}
                    title={video.volumeInfo.title}
                    subtitle={video.volumeInfo.subtitle}
                    link={video.volumeInfo.infoLink}
                    authors={video.volumeInfo.authors.join(", ")}
                    description={video.volumeInfo.description}
                    image={video.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleVideoSave(book.id)}
                        className="btn save-button  heading-subtitle ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h2 className="heading-title text-center">
                  {this.state.message}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;