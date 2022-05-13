import axios from "axios";

const getCurrencyInfo = async (currency) => {
    const options = {
        method: 'GET',
        url: `https://open.er-api.com/v6/latest/${currency}`,
    };
    const response = await axios.request(options);
    return response.data
}

export default getCurrencyInfo;