import { getAllMovieApi, getAllTvShowsApi, getPopularMoviesApi, getPopularTvShowApi, getSingleMovieApi, getSingleMovieCastApi, getSingleMovieVideoApi, getSingleTvCastApi, getSingleTvShowApi, getSingleTvVideoApi, getTopRatedMovieApi, getTopRatedTVShowApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "../utils/constants"
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

const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(getSingleMovieApi.replace("movie_id", movieId));
    return response.data
}

const fetchMovieCast = async (movieId) => {
    const response = await axios.get(getSingleMovieCastApi.replace("movie_id", movieId));
    return response.data
}

const fetchMovieVideo = async (movieId) => {
    const response = await axios.get(getSingleMovieVideoApi.replace("movie_id", movieId));
    return response.data.results
}

const fetchTvDetails = async (tvId) => {
    const response = await axios.get(getSingleTvShowApi.replace("series_id", tvId));
    
    return response.data
}

const fetchTvCast =  async (tvId) => {
    const response = await axios.get(getSingleTvCastApi.replace("series_id", tvId))
    return response.data
}

const fetchTvVideo = async (movieId) => {
    const response = await axios.get(getSingleTvVideoApi.replace("series_id", movieId));
    return response.data.results
}

export const homeLoader = async () => {
    const [imagePath, trendingDay, trendingWeek, popularMovie, popularTvShow, topRatedMovie, topRatedTvShow] = await Promise.all([fetchBannerImage(), fetchTrendingDay(), fetchTrendingWeek(), fetchPopularMovie(), fetchPopularTvShow(), fetchTopRatedMovie(), fetchTopRatedTvShow()])

    return { imagePath, trendingDay, trendingWeek, popularMovie, popularTvShow, topRatedMovie, topRatedTvShow }
}

export const movieLoader = async () => {
    const response = await axios.get(getAllMovieApi);
    return response.data.results
}

export const tvShowLoader = async () => {
    const response = await axios.get(getAllTvShowsApi);
    return response.data.results
}

export const singleMovieLoader = async({params}) => {
    const {movieId} = params;

    const [movieDetails, movieCastDetails, movieVideoDetails] = await Promise.all([fetchMovieDetails(movieId), fetchMovieCast(movieId), fetchMovieVideo(movieId)])

    return {movieDetails, movieCastDetails, movieVideoDetails}
}

export const singleTvLoader = async({params}) => {
    const {tvId} =  params;
    const [movieDetails, movieCastDetails, movieVideoDetails] = await Promise.all([fetchTvDetails(tvId), fetchTvCast(tvId), fetchTvVideo(tvId)])

    return {movieDetails, movieCastDetails, movieVideoDetails}
   
}