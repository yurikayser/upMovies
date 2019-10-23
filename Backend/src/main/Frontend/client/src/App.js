import React, { Component } from "react";
import "./App.css";
import MoviesList from "./MoviesListComponent";
import MovieDetail from "./MovieDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetails: false,
      idMovie: null
    };
  }

  detailCallBack = id => {
    this.setState({ isDetails: true, idMovie: id });
  };

  render() {
    return (
      <div className="App">
        {renderComponents(
          this.state.isDetails,
          this.state.idMovie,
          this.detailCallBack
        )}
      </div>
    );
  }
}

function renderComponents(isDetails, idMovie, detailCallBack) {
  if (isDetails) {
    return <MovieDetail movieId={idMovie} />;
  } else {
    return <MoviesList onDetailClick={detailCallBack} />;
  }
}

export default App;
