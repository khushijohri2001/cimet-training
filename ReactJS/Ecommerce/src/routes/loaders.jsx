import axios from "axios"

export const fetchApis = async (url) => {
    const response = await axios(url);
    return response.data
}


export const fetchCurrencyConversion = async (url) => {

    try {
        let response = await axios.get(url, {
            headers: {
                "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
                "x-rapidapi-key": "b71d188f4bmsheefc05dfc196e75p1b2c77jsn717645839888"
            }
        }
        )
        const rates = response?.data?.rates;
        return rates;
    }
    catch (err) {
        console.error("Error In Currency Conversion ", err);
    }
}