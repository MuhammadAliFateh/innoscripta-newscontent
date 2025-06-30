import axiosInstance from "./axiosInstance"
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export interface ISearchNewsAPIParam {
    q: string,
    sources: string,
    category: string
}
export const fetchNews = async ()=>{
    try{
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/top-headlines?country=us&apiKey=${API_KEY}`);
        return response.data;
    }
    catch(err){
        return {}
    }
    
    
}
export const searchNews = async(reqParam: ISearchNewsAPIParam)=>{
    try{
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/top-headlines`, {
            params: {
                q: reqParam.q,
                sources: reqParam.sources,
                category: reqParam.category,
                apiKey: API_KEY
            }
        });
        return response.data;
    }
    catch(err){
    }
    
}