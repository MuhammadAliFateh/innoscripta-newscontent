import { useState } from "react";
import { ICardRequest } from "./CardComponent.interface";
import ModalComponent from "../ModalComponent/ModalComponent";

const CardComponent = (request: ICardRequest) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [urlToImage, setUrlToImage] = useState<string>('')

  if (!request || !request.articles || request.articles.length <= 0)
    return <p>No articles to display.</p>;

  const setStuff = (paramTitle: string, paramContent: string, paramAuthor:string, paramSource: string, paramUrlToImage: string)=>{
    setTitle(paramTitle)
    setContent(paramContent)
    setAuthor(paramAuthor)
    setSource(paramSource)
    setUrlToImage(paramUrlToImage)
    if(paramAuthor !== ""){
        let localSourceItem = JSON.parse(localStorage.getItem(request.localItem) || '[]')
        if(!localSourceItem.includes(paramAuthor)){
            localSourceItem.push(paramAuthor)
            localStorage.setItem(request.localItem, JSON.stringify(localSourceItem))
        }
    }
  }
  const CardItems = (request: ICardRequest) => {
    return request?.articles?.map((items, index) => {
      const {
        author,
        content,
        description,
        publishedAt,
        source,
        title,
        urlToImage,
      } = items;
      return (
        <div className="col-md-3 col-sm-6 col-xs-12 mt-5" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>setStuff(title, content, author, source.name, urlToImage)} style={{cursor: "pointer"}}>
          <div className="card h-100">
            <img className="card-img-top" src={urlToImage} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">
                {title && title.length > 50
                  ? `${title.substring(0, 50)}...`
                  : title}
              </h4>
              <p className="card-text">
                {description && description.length > 100
                  ? `${description.substring(0, 100)}...`
                  : description}
              </p>
              <p><span className="badge bg-primary">{author && author.length > 20
                  ? `${author.substring(0, 20)}...`
                  : author}</span></p>
              <p><span className="badge bg-primary">{source.name}</span></p>
              <p><span className="badge bg-primary">{publishedAt}</span></p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
        {CardItems(request)}
        <ModalComponent author={author} content={content} title={title} sourceName={source} urlToImage={urlToImage}/>
    </>
  )
};
export default CardComponent;
