export function requestUpcomingMovies(page) {
  return fetch(
    "http://ec2-18-222-203-163.us-east-2.compute.amazonaws.com:8080/movies?page=" +
      page
  ).then(response => response.json());
}

export function requestSearchMovies(page, name) {
  return fetch(
    "http://ec2-18-222-203-163.us-east-2.compute.amazonaws.com:8080/movies/search?page=" +
      page +
      "&movieName=" +
      name
  ).then(response => response.json());
}

export function requestMovieDetails(id) {
  return fetch(
    "http://ec2-18-222-203-163.us-east-2.compute.amazonaws.com:8080/movies/detail?movieId=" +
      id
  ).then(response => response.json());
}
