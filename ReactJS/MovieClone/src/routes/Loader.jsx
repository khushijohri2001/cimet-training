import { getImageUrl, getUpcomingMoviesApi } from "../utils/constants"
import axios from "axios";
import { randomIndexGenerator } from "../utils/helperFunctions";

export const fetchBannerImage = async () => {
    const response = await axios.get(getUpcomingMoviesApi);
    const data = response.data.results;
    const randomData = randomIndexGenerator(0, data.length)
    const imagePath = data[randomData].backdrop_path
    return getImageUrl+imagePath
}