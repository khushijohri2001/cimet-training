import { getAllMovieApi, getAllTvShowsApi, getPopularMoviesApi, getPopularTvShowApi, getTopRatedMovieApi, getTopRatedTVShowApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "../utils/constants"
import axios from "axios";
import { randomIndexGenerator } from "../utils/helperFunctions";

const fetchBannerImage = async () => {
    const response = await axios.get(getUpcomingMoviesApi);
    const data = response.data.results;
    const randomData = randomIndexGenerator(0, data.length)
    const imagePath = data[randomData].backdrop_path
    return imagePath;
}

const fetchTrendingDay = async () => {
    const response = await axios.get(getTrendingDayApi);
    return response.data.results
}

const fetchTrendingWeek = async () => {
    const response = await axios.get(getTrendingWeekApi);
    return response.data.results
}

const fetchPopularMovie = async () => {
    const response = await axios.get(getPopularMoviesApi);
    return response.data.results
}

const fetchPopularTvShow = async () => {
    const response = await axios.get(getPopularTvShowApi);
    return response.data.results
}

const fetchTopRatedMovie = async () => {
    const response = await axios.get(getTopRatedMovieApi);
    return response.data.results;
}

const fetchTopRatedTvShow = async () => {
    const response = await axios.get(getTopRatedTVShowApi);
    return response.data.results;
}

export const homeLoader = async () => {
    const imagePath = await fetchBannerImage();
    const trendingDay = await fetchTrendingDay();
    const trendingWeek = await fetchTrendingWeek();
    const popularMovie = await fetchPopularMovie();
    const popularTvShow = await fetchPopularTvShow();
    const topRatedMovie = await fetchTopRatedMovie();
    const topRatedTvShow = await fetchTopRatedTvShow();
    
    return {imagePath, trendingDay, trendingWeek, popularMovie, popularTvShow, topRatedMovie, topRatedTvShow};
}

export const movieLoader = async () => {
    const response = await axios.get(getAllMovieApi);
    return response.data.results
}

export const tvShowLoader = async () => {
    const response = await axios.get(getAllTvShowsApi);
    return response.data.results
}