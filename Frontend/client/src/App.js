import React, { Component } from "react";
import "./App.css";
import MoviesList from "./MoviesListComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Upcoming Movies</h2>
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
