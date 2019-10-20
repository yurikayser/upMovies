package com.upmovies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.upmovies.model.Movie;
import com.upmovies.model.MoviePageResult;
import com.upmovies.service.TMDBService;

@RestController
public class UpcomingMoviesController {
	@Autowired
	private TMDBService service;

	@GetMapping(value = "/movies")
	public MoviePageResult getUpcomingMovies(@RequestParam Long page) {
		return this.service.getAllMovies(1L);
	}

	@GetMapping(value = "/movies/detail")
	public Movie getMovieDetail(@RequestParam String movieId) {
		return this.service.getMovieDetail(movieId);
	}

	@GetMapping(value = "/movies/search")
	public MoviePageResult seachByMovieName(@RequestParam String movieName, @RequestParam Long page) {
		return this.service.searchMovie(movieName, page);
	}
}