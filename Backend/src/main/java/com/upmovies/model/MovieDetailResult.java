package com.upmovies.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MovieDetailResult {
	@JsonProperty("poster_path")
	private String posterPath;

	private String title;

	private List<Genre> genres;

	private String genresFormated;

	@JsonProperty("release_date")
	private String releaseDate;

	private String overview;

	public String getPosterPath() {
		return this.posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Genre> getGenres() {
		return this.genres;
	}

	public void setGenres(List<Genre> genres) {
		this.genres = genres;
	}

	public String getGenresFormated() {
		return this.genresFormated;
	}

	public void setGenresFormated(String genresFormated) {
		this.genresFormated = genresFormated;
	}

	public String getReleaseDate() {
		return this.releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getOverview() {
		return this.overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}
}
