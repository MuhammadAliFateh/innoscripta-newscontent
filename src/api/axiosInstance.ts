import axios from "axios";
const NEWS_API_URL = process.env.NEWS_API_URL || 'https://newsapi.org/v2';
const NY_API_URL = process.env.NY_API_URL ||'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const createAxios = (baseURL: string) =>{
    return {
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        }

    }
}

const axiosNewsAPIInstance = axios.create(createAxios(NEWS_API_URL))
const axiosNY_API_URLInstance = axios.create(createAxios(NY_API_URL))
const axiosCInstance = axios.create(createAxios(''))


export default {
    axiosNewsAPIInstance,
    axiosNY_API_URLInstance,
    axiosCInstance
};