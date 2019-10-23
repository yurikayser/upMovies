package com.upmovies.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties
public class Movie {

	@JsonProperty("poster_path")
	private String posterPath;

	private Long id;

	private String title;

	@JsonProperty("genre_ids")
	private List<String> genreIds;

	@JsonProperty("release_date")
	private String releaseDate;

	private String overview;

	public String getOverview() {
		return this.overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getPosterPath() {
		return this.posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<String> getGenreIds() {
		return this.genreIds;
	}

	public void setGenreIds(List<String> genreIds) {
		this.genreIds = genreIds;
	}

	public String getReleaseDate() {
		return this.releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

}
