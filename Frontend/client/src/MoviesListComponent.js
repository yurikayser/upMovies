import React, { Component } from "react";
import { Pagination, Card, Button, Container, Row } from "react-bootstrap";
import { SearchComponent } from "./SearchComponent";
import {
  requestSearchMovies,
  requestUpcomingMovies
} from "./requests/requests";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 1,
      results: [],
      isOnSearch: false,
      filter: ""
    };
  }

  requestData = page => {
    if (this.state.isOnSearch) {
      requestSearchMovies(page, this.state.filter).then(data => {
        this.setState({
          page: data.page,
          totalPages: data.total_pages,
          results: data.results,
          isOnSearch: true
        });
      });
    } else {
      requestUpcomingMovies(page).then(data => {
        this.setState({
          page: data.page,
          totalPages: data.total_pages,
          results: data.results,
          isOnSearch: false
        });
      });
    }
  };

  updateFilter = search => {
    this.setState(
      { filter: search, isOnSearch: search === "" ? false : true },
      () => this.requestData(1)
    );
  };

  componentDidMount() {
    this.requestData(1);
  }

  render() {
    if (this.state.results.length > 0) {
      return (
        <div>
          <h2>Upcoming Movies</h2>
          <SearchComponent onSearchClick={this.updateFilter} />
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
                      <Button
                        variant="primary"
                        onClick={() => this.props.onDetailClick(element.id)}
                      >
                        Details
                      </Button>
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
            {this.state.page} of {"" + this.state.totalPages}
            <Pagination.Next
              onClick={() => this.requestData(this.state.page + 1)}
            />
          </Pagination>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Upcoming Movies</h2>
          <SearchComponent onSearchClick={this.searchMoviesRequest} />
          <p>Loading...</p>;
        </div>
      );
    }
  }
}

export default MoviesList;
