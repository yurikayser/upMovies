package com.upmovies.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.upmovies.TMDBClient;
import com.upmovies.model.GenreResult;
import com.upmovies.model.Movie;
import com.upmovies.model.MovieDetailResult;
import com.upmovies.model.MoviePageResult;

@Service
public class TMDBService {

	private TMDBClient client;

	private Map<Long, String> genres = new HashMap<>();

	public TMDBService() {
		this.client = new TMDBClient();
	}

	@PostConstruct
	private void getGenres() {
		GenreResult result = this.client.getGenres();
		result.getGenres().forEach(element -> this.genres.put(element.getId(), element.getName()));
	}

	public MoviePageResult getAllMovies(Long page) {
		MoviePageResult result = this.client.getPaged("movie/upcoming", Arrays.asList("page=" + page));
		result.setResults(result.getResults()
				.stream()
				.map(movie -> this.formatMovieProperties(movie))
				.collect(Collectors.toList()));

		return result;
	}

	public MovieDetailResult getMovieDetail(String movieId) {
		return this.client.getDetail(movieId);
	}

	public MoviePageResult searchMovie(String name, Long page) {
		String formatedName = name.replace(" ", "+");
		MoviePageResult result = this.client.getPaged("search/movie/",
				Arrays.asList("query=" + formatedName, "page=" + page));

		result.setResults(result.getResults()
				.stream()
				.map(movie -> this.formatMovieProperties(movie))
				.collect(Collectors.toList()));

		return result;
	}

	private Movie formatMovieProperties(Movie movie) {
		List<String> parsedGenres = movie.getGenreIds()
				.stream()
				.map(genreId -> this.genres.get(Long.parseLong(genreId)))
				.collect(Collectors.toList());
		movie.setGenreIds(parsedGenres);
		return movie;

	}

}
