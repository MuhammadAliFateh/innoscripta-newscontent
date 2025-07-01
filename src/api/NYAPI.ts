import axiosInstance from "./axiosInstance"
const API_KEY = process.env.REACT_APP_NY_API_KEY;

export interface ISearchNYAPIParam {
    q: string,
    sources: string,
    category: string
}
export const fetchNews = async ()=>{
    try{
        const response = await axiosInstance.axiosNY_API_URLInstance.get(``, {
            params: {
                q: 'news',
                'api-key': API_KEY
            }
        });

        return response.data.response.docs;

    }
    catch(err){
        return {}
    }
    
    
}
export const searchNews = async(reqParam: ISearchNYAPIParam)=>{
    try{
        let search :string[]=[];
         const filters: string[] = [];
        if(reqParam.sources !=="") {
            search.push(`source:("${reqParam.sources}")`)
        }
        if(reqParam.category !==""){
            search.push(`section_name:("${reqParam.category}")`)
        }
        const fq = filters.length > 0 ? filters.join(' AND ') : undefined;
        const response = await axiosInstance.axiosNY_API_URLInstance.get(``, {
            params: {
                q: reqParam.q || 'new',
                 ...(fq && { fq }),
                'api-key': API_KEY
            }
        });
        return response.data.response.docs;
    }
    catch(err){
    }
    
}
export const getPersonalizedNYAPISources = async(preferredSources: string[])=>{
    try{
        let sources : string = preferredSources.join(' ')
        const response = await axiosInstance.axiosNY_API_URLInstance.get(``, {
            params: {
                'fq': `source:("${sources}")`, 
                'api-key': API_KEY
            }
        });
        return response.data.response.docs;
    }
    catch(err){
    }
}
export const getPersonalizedNYAPICategory = async(preferredCategory: string)=>{
    try{
        const response = await axiosInstance.axiosNY_API_URLInstance.get(``, {
            params: {
                'fq': `source:("${preferredCategory}")`, 
                'api-key': API_KEY
            }
        });
        return response.data.response.docs;
    }
    catch(err){
    }
}
export const getPersonalizedNYAPIAuthor = async(author: string[])=>{
    try{
        let search='' 
        if(author && author.length > 1){
            search = author[1];
        }
        else {
            search = author[0];
        }
        const response = await axiosInstance.axiosNY_API_URLInstance.get(``, {
            params: {
                'fq': `byline:("${search}")`, 
                'api-key': API_KEY
            }
        });
        return response.data.response.docs;
    }
    catch(err){
    }
}