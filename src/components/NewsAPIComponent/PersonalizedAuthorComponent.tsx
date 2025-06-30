import { useContext, useEffect, useState } from "react";
import { DataContext } from "../ContextAPI/ContextState";
import { getPersonalizedNewsAPIAuthor, getPersonalizedNewsAPICategory, getPersonalizedNewsAPISources} from "../../api/NewsAPI";
import { ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";
import PersonalizedLayoutComponents from "../LayoutComponent/PersonalizedLayoutComponents";

const PersonalizedAuthorComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : [], localItem: 'preferedNewsAPIAuthor'});

  useEffect(() => {
    const fetchData = async () => {
      let localCategoryItem = JSON.parse(localStorage.getItem('preferedNewsAPIAuthor') || '[]')
      let resp = await getPersonalizedNewsAPIAuthor(localCategoryItem);
      let request : ICardRequest ={
        articles : resp && resp.articles && resp.articles.length > 0 ? resp.articles: [],
        localItem: 'preferedNewsAPIAuthor'
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

export default PersonalizedAuthorComponent;
