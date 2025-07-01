import { ICardItem } from "../Elements/CardComponent/CardComponent.interface";

const createResponse =(resp: any)=>{
    let articles : ICardItem[] = [];
    let sourceItem: string[] = [];
    let categoryItem: string[] = []; 
    articles = resp?.map((item: any) => {

        if(!sourceItem.includes(item.source))
        {
            sourceItem.push(item.source)
        }
        if(!categoryItem.includes(item.section_name))
        {
            categoryItem.push(item.section_name)
        }
        return {
            title: item.headline.main,
            urlToImage: item.multimedia.default.url,
            content: item.abstract,
            description: item.abstract,
            publishedAt: item.pub_date,
            source: {
                id: item.source,
                name: item.source
            },
            author: item.byline.original
        }
    })
    return {
        articles,
        sourceItem,
        categoryItem
    }
     

}
export default createResponse;
