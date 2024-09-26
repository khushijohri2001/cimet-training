import { getAllMovieApi, getAllTvShowsApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "../utils/constants"
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

// const fetchPopular = async () => {

// }

export const homeLoader = async () => {
    const imagePath = await fetchBannerImage();
    const trendingDay = await fetchTrendingDay()
    const trendingWeek = await fetchTrendingWeek()
    
    return {imagePath, trendingDay, trendingWeek};
}

export const movieLoader = async () => {
    const response = await axios.get(getAllMovieApi);
    return response.data.results
}

export const tvShowLoader = async () => {
    const response = await axios.get(getAllTvShowsApi);
    return response.data.results
}