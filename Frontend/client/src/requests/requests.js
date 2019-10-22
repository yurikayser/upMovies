export function requestUpcomingMovies(page) {
  return fetch("http://localhost:8080/movies?page=" + page).then(response =>
    response.json()
  );
}

export function requestSearchMovies(page, name) {
  return fetch(
    "http://localhost:8080//movies/search?page=" + page + "&movieName=" + name
  ).then(response => response.json());
}
