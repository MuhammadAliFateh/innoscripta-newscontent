import { useContext, useEffect, useState } from "react";
import { DataContext } from "../ContextAPI/ContextState";
import { getPersonalizedNewsAPICategory, getPersonalizedNewsAPISources} from "../../api/NewsAPI";
import { ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";
import PersonalizedLayoutComponents from "../LayoutComponent/PersonalizedLayoutComponents";
import { getPersonalizedNYAPICategory } from "../../api/NYAPI";
import { INYAPIResponse } from "./NYAPIComponent.interface";
import createResponse from "./NYAPICreateResponse";

const PersonalizedNYCategoryComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : [], localItem: 'preferedNYAPIAuthor'});

  useEffect(() => {
    const fetchData = async () => {
      let localCategoryItem = JSON.parse(localStorage.getItem('preferedNYAPICategory') || '')
      let resp = await getPersonalizedNYAPICategory(localCategoryItem);
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
      title="New York News API"
      cardNode={CardComponent(cardRequest)}
    />
  );
};

export default PersonalizedNYCategoryComponent;
