import React, { Component } from "react";
import "./App.css";
import { SearchComponent } from "./SearchComponent";
import { MoviesList } from "./MoviesListComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 1,
      results: []
    };
  }

  requestData = page => {
    fetch("http://localhost:8080/movies?page=" + page)
      .then(response => response.json())
      .then(data => {
        this.setState({
          page: data.page,
          totalPages: data.total_Pages,
          results: data.results
        });
      });
  };

  componentDidMount() {
    this.requestData(1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Upcoming Movies</h2>
          <SearchComponent />
          <MoviesList
            list={this.state.results}
            currentPage={this.state.page}
            onPageClick={this.requestData}
          />
        </div>
      </div>
    );
  }
}

export default App;
