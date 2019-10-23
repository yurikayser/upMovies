import React, { Component } from "react";
import { requestMovieDetails } from "./requests/requests";
import { Card, Badge } from "react-bootstrap";
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterPath: "",
      title: "",
      genres: [],
      releaseDate: "",
      overview: ""
    };
  }

  componentDidMount() {
    this.data = requestMovieDetails(this.props.movieId).then(result => {
      this.setState({
        posterPath: result.poster_path,
        title: result.title,
        genres: result.genres,
        releaseDate: result.release_date,
        overview: result.overview
      });
    });
  }

  render() {
    return (
      <div className="detail-container">
        <a href="..">Home</a>
        <div className="secondary-detail-container">
          <Card style={{ width: "30rem" }} bg="light">
            <Card.Body>
              <Card.Img
                variant="top"
                src={
                  this.state.posterPath &&
                  "https://image.tmdb.org/t/p/w500/" + this.state.posterPath
                }
              />
              <Card.Title>
                <h2>{this.state.title}</h2>
              </Card.Title>

              {this.state.genres.map(genre => {
                return (
                  <Badge pill variant="primary">
                    {genre.name}
                  </Badge>
                );
              })}
              <Card.Text>
                <b>Release Date:</b> {this.state.releaseDate}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="overview-container">
            <h1>
              <b>Overview</b>
            </h1>
            <span>{this.state.overview}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
