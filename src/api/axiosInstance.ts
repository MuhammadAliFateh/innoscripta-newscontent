import axios from "axios";

const createAxios = (baseURL: string) =>{
    return {
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        }

    }
}

const axiosNewsAPIInstance = axios.create(createAxios('https://newsapi.org/v2'))
const axiosBInstance = axios.create(createAxios(''))
const axiosCInstance = axios.create(createAxios(''))


export default {
    axiosNewsAPIInstance,
    axiosBInstance,
    axiosCInstance
};