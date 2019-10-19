package com.upmovies.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UpcomingMoviesController {

	@RequestMapping(value = "/movies")
	public String getUpcomingMovies() {
		return "just testing";
	}

	@GetMapping(value = "/get-movies-category/{category}")
	public String getUpcomingMoviesByCategory(Long category) {
		return "you sent: " + category;
	}
}