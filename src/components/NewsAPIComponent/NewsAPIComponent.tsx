import { useContext, useEffect, useState } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SearchComponent from "../FilterComponent/SearchComponent";
import LayoutComponent from "../LayoutComponent/LayoutComponent";
import { DataContext } from "../ContextAPI/ContextState";
import { fetchNews, ISearchNewsAPIParam, searchNews } from "../../api/NewsAPI";
import {IFilterItems} from "../FilterComponent/FilterComponent.interface";
import { ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";

const NewsAPIComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : []});

  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetchNews();
      let request : ICardRequest ={
        articles : resp && resp.articles && resp.articles.length > 0 ? resp.articles: []
      };
      setCardRequest(request);
    };
    fetchData();
  }, []);

  if (!contextValue) {
    return <p>Loading context...</p>;
  }
  const {
    searchQuery,
    filterCategory,
    setFilterCategory,
    filterSources,
    setFilterSources,
  } = contextValue;

  const actionMethod = async () => {

    let param: ISearchNewsAPIParam = {
      category: filterCategory,
      q: searchQuery,
      sources: filterSources,
    };
    let resp = await searchNews(param);
    let request : ICardRequest ={
        articles : resp && resp.articles && resp.articles.length > 0 ? resp.articles: []
    };
    setCardRequest(request);

  };
  const requiredFilterFields: IFilterItems[] = [
    {
      itemName: "category",
      itemValue: filterCategory,
      itemSetValue: setFilterCategory,
    },
    {
      itemName: "source",
      itemValue: filterSources,
      itemSetValue: setFilterSources,
    },
  ];

  return (
    <LayoutComponent
      filterNode={
        <FilterComponent items={requiredFilterFields} action={actionMethod} />
      }
      title="News API"
      searchNode={<SearchComponent action={actionMethod} />}
      cardNode={CardComponent(cardRequest)}
    />
  );
};

export default NewsAPIComponent;
