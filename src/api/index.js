import axios from "axios";

const endpoint = "https://newsapi.org/v2/top-headlines"
const apiKey = "bb3922aa2d56420baac74eb4c9f8eea5"
// const apiKey = "8d5451ac861e44b3bde1c319ca3eb4ff"

export const getTopHeadlineRequest = async (params) => {
    
    return await axios.get(endpoint, {
        params: {
            country: params.country,
            apiKey: apiKey,
            page: params.page,
            pageSize: 10
        }
    })
}