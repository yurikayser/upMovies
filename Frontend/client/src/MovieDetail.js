import React, { Component } from "react";
import { requestMovieDetails } from "./requests/requests";
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterPath: "",
      title: "",
      genres: "",
      releaseDate: "",
      overview: ""
    };
  }

  componentDidMount() {
    this.data = requestMovieDetails(this.props.movieId).then(result => {
      this.setState({
        posterPath: result.poster_path,
        title: result.title,
        releaseDate: result.release_date,
        overview: result.overview
      });
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.posterPath}</div>
        <div>{this.state.releaseDate}</div>
        <div>{this.state.overview}</div>
      </div>
    );
  }
}

export default MovieDetail;
