import React, { Component } from "react";
import { Pagination, Card, Button, Container, Row } from "react-bootstrap";
import { SearchComponent } from "./SearchComponent";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 1,
      results: [],
      isOnSearch: false
    };
  }

  requestData = page => {
    fetch("http://localhost:8080/movies?page=" + page)
      .then(response => response.json())
      .then(data => {
        this.setState({
          page: data.page,
          totalPages: data.total_Pages,
          results: data.results,
          isOnSearch: false
        });
      });
  };

  searchMoviesRequest = name => {
    fetch(
      "http://localhost:8080//movies/search?page=" + 1 + "&movieName=" + name
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          page: data.page,
          totalPages: data.total_Pages,
          results: data.results,
          isOnSearch: true
        });
      });
  };

  componentDidMount() {
    this.requestData(1);
  }

  render() {
    if (this.state.results.length > 0) {
      return (
        <div>
          <SearchComponent onSearchClick={this.searchMoviesRequest} />
          <Container>
            <Row>
              {this.state.results.map(element => {
                return (
                  <Card key={element.id} style={{ width: "30rem" }}>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          element.poster_path
                        }
                      />
                      <Card.Title>
                        <h2>{element.title}</h2>
                      </Card.Title>
                      <Card.Text>
                        <b>Genres</b>: {element.genres}
                      </Card.Text>
                      <Card.Text>
                        <b>Release Date:</b> {element.release_date}
                      </Card.Text>
                      <Button variant="primary">Details</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </Container>
          <Pagination>
            <Pagination.Prev
              disabled={this.state.page === 1}
              onClick={() => this.requestData(this.state.page - 1)}
            />
            {this.state.page} of 55
            <Pagination.Next
              onClick={() => this.requestData(this.state.page + 1)}
            />
          </Pagination>
        </div>
      );
    } else {
      return (
        <div>
          <SearchComponent onSearchClick={this.searchMoviesRequest} />
          <p>Loading...</p>;
        </div>
      );
    }
  }
}

export default MoviesList;
