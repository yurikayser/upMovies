package com.upmovies.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MoviePageResult {

	private List<Movie> results;

	private Integer page;

	@JsonProperty("total_pages")
	private Integer totalPages;

	public List<Movie> getResults() {
		return this.results;
	}

	public void setResults(List<Movie> result) {
		this.results = result;
	}

	public Integer getPage() {
		return this.page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getTotalPages() {
		return this.totalPages;
	}

	public void setTotalPages(Integer totalPages) {
		this.totalPages = totalPages;
	}
}
