package com.upmovies.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("upcoming-movies")
public class UpcomingMoviesController {

	@GetMapping(value = "/get-movies", produces = "apllication/json")
	public String getUpcomingMovies() {
		return "just testing";
	}

	@GetMapping(value = "/get-movies-category/{category}", produces = "apllication/json")
	public String getUpcomingMoviesByCategory(Long category) {
		return "you sent: " + category;
	}
}