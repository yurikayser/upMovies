package com.upmovies.service;

import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.upmovies.TMDBClient;
import com.upmovies.model.Movie;
import com.upmovies.model.MoviePageResult;

@Service
public class TMDBService {

	private TMDBClient client;

	public TMDBService() {
		this.client = new TMDBClient();
	}

	public MoviePageResult getAllMovies(Long page) {
		return this.client.getPaged("movie/upcoming", Arrays.asList("page=" + page));
	}

	public Movie getMovieDetail(String movieId) {
		return this.client.getDetail(movieId);
	}

	public MoviePageResult searchMovie(String name, Long page) {
		String formatedName = name.replace(" ", "+");
		return this.client.getPaged("search/movie/", Arrays.asList("query=" + formatedName, "page=" + page));
	}

}
