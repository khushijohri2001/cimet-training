import { getImageUrl, getTrendingApi, getUpcomingMoviesApi } from "../utils/constants"
import axios from "axios";
import { randomIndexGenerator } from "../utils/helperFunctions";

const fetchBannerImage = async () => {
    const response = await axios.get(getUpcomingMoviesApi);
    const data = response.data.results;
    const randomData = randomIndexGenerator(0, data.length)
    const imagePath = data[randomData].backdrop_path
    const temp = getImageUrl+imagePath
    
    return temp
}

const fetchTrending = async () => {
    const response = await axios.get(getTrendingApi);
    return response.data
}

export const homeLoader = async () => {
    // [imagePath, trendingList]
    // const data = await Promise.all([
    //     fetchBannerImage, fetchTrending
    // ])
    // fetchBannerImage();
    // fetchTrending()
    
    return {fetchBannerImage, fetchTrending};
    // return data;
}