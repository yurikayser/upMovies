package com.upmovies;

import java.util.List;

import org.springframework.web.client.RestTemplate;

import com.upmovies.model.GenreResult;
import com.upmovies.model.Movie;
import com.upmovies.model.MoviePageResult;

public class TMDBClient {

	private String TMDB_URL = "http://api.themoviedb.org/3/";

	private String API_KEY = "?api_key=1f54bd990f1cdfb230adb312546d765d";

	private String getUrlFor(String apiEndPoint) {
		return this.TMDB_URL + apiEndPoint + this.API_KEY;
	}

	private RestTemplate template = new RestTemplate();

	private String appendParameters(String baseUrl, List<String> params) {
		StringBuilder urlBuilder = new StringBuilder(baseUrl);
		params.forEach(param -> urlBuilder.append("&" + param));
		return urlBuilder.toString();
	}

	public MoviePageResult getPaged(String apiEndPoint, List<String> params) {
		String url = this.appendParameters(this.getUrlFor(apiEndPoint), params);
		MoviePageResult request = this.template.getForObject(url, MoviePageResult.class);
		return request;
	}

	public Movie getDetail(String movieId) {
		String url = this.getUrlFor(movieId);
		Movie request = this.template.getForObject(url, Movie.class);
		return request;
	}

	public GenreResult getGenres() {
		return this.template.getForObject(this.getUrlFor("genre/movie/list"), GenreResult.class);
	}
}
