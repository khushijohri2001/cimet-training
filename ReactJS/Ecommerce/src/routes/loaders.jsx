import axios from "axios"

export const fetchApis = async (url) => {
    const response = await axios(url);
    return response.data
}