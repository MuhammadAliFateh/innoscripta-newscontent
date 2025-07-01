import { useContext, useEffect, useState } from "react";
import { DataContext } from "../ContextAPI/ContextState";
import { getPersonalizedNewsAPIAuthor, getPersonalizedNewsAPICategory, getPersonalizedNewsAPISources} from "../../api/NewsAPI";
import { ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";
import PersonalizedLayoutComponents from "../LayoutComponent/PersonalizedLayoutComponents";
import { getPersonalizedNYAPIAuthor } from "../../api/NYAPI";
import { INYAPIResponse } from "./NYAPIComponent.interface";
import createResponse from "./NYAPICreateResponse";

const PersonalizedNYAuthorComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : [], localItem: 'preferedNYAPIAuthor'});

  useEffect(() => {
    const fetchData = async () => {
      let localCategoryItem = JSON.parse(localStorage.getItem('preferedNYAPIAuthor') || '[]')
      let resp = await getPersonalizedNYAPIAuthor(localCategoryItem);
      let response : INYAPIResponse = createResponse(resp);
      let request : ICardRequest ={
        articles : response && response.articles && response.articles.length > 0 ? response.articles: [],
        localItem: 'preferedNYAPIAuthor'
      };
      
      setCardRequest(request);
    };
    fetchData();
  }, []);

  if (!contextValue) {
    return <p>Loading context...</p>;
  }

  return (
    <PersonalizedLayoutComponents
      title="News API"
      cardNode={CardComponent(cardRequest)}
    />
  );
};

export default PersonalizedNYAuthorComponent;
