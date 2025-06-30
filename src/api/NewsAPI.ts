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
export const getNewsAPISources = async()=>{
    try{
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/top-headlines/sources`, {
            params: {
                country: 'us',
                apiKey: API_KEY
            }
        });
        return response.data.sources;
    }
    catch(err){
    }
    
}
export const getPersonalizedNewsAPISources = async(preferredSources: string[])=>{
    try{
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/everything`, {
            params: {
                sources: preferredSources.join(','), 
                apiKey: API_KEY
            }
        });
        return response.data;
    }
    catch(err){
    }
}
export const getPersonalizedNewsAPICategory = async(preferredCategory: string)=>{
    try{
        console.log("Testing_A5");
        console.warn(preferredCategory)
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/top-headlines`, {
            params: {
                category: preferredCategory, 
                apiKey: API_KEY
            }
        });
        console.log("Testing_A5");
        console.warn(response.data)
        return response.data;
    }
    catch(err){
    }
}
export const getPersonalizedNewsAPIAuthor = async(author: string[])=>{
    try{
        let search='' 
        if(author && author.length > 1){
            search = author[1];
        }
        else {
            search = author[0];
        }
        const response = await axiosInstance.axiosNewsAPIInstance.get(`/everything`, {
            params: {
                q: search, 
                apiKey: API_KEY
            }
        });
        return response.data;
    }
    catch(err){
    }
}