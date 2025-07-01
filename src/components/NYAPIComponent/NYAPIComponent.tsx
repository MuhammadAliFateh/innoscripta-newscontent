import { useContext, useEffect, useState } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SearchComponent from "../FilterComponent/SearchComponent";
import LayoutComponent from "../LayoutComponent/LayoutComponent";
import { DataContext } from "../ContextAPI/ContextState";
import { fetchNews, ISearchNYAPIParam, searchNews } from "../../api/NYAPI";
import {IFilterItems} from "../FilterComponent/FilterComponent.interface";
import { ICardItem, ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";
import { INYAPIResponse, NYAPISourceItem } from "./NYAPIComponent.interface";
import createResponse from "./NYAPICreateResponse";

const NYAPIComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : [], localItem: 'preferedNYAPIAuthor'});
  const [categoryItemList, setCategoryItemList] = useState<string[]>([]);
  const [sourceItemList, setSourceItemList] = useState<string[]>([]);

  
  useEffect(() => {
    const fetchData = async () => {
        
      let resp = await fetchNews();
      let response : INYAPIResponse = createResponse(resp);
      let articles : ICardItem[] = response.articles;

      let request : ICardRequest ={
        articles : articles && articles.length > 0 ? articles: [],
        localItem: 'preferedNYAPIAuthor'
      };
      
      setCategoryItemList(response.categoryItem || [])
      setSourceItemList(response.sourceItem || [])
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

    let param: ISearchNYAPIParam = {
      category: filterCategory,
      q: searchQuery,
      sources: filterSources,
    };
    let resp;
    let response : INYAPIResponse;
    let respFlag = false;

    if(filterCategory !== "" || searchQuery !== "" || filterSources !== ""){
        resp = await searchNews(param);
        response = createResponse(resp);
        respFlag = response && response.articles && response.articles.length > 0;
        if(respFlag){
            if(filterCategory !== "")
            {
                let localCategoryItem = JSON.parse(localStorage.getItem('preferedNYAPICategory') || '')
                if(localCategoryItem !== filterCategory){
                    localStorage.setItem('preferedNYAPICategory', JSON.stringify(filterCategory))
                }
            }
            if(filterSources !== ""){
                let localSourceItem = JSON.parse(localStorage.getItem('preferedNYAPISource') || '[]')
                if(!localSourceItem.includes(filterSources)){
                    localSourceItem.push(filterSources)
                    localStorage.setItem('preferedNYAPISource', JSON.stringify(localSourceItem))
                }
            }
        }
    }
    else {
        resp = await fetchNews();
        response = createResponse(resp);
        respFlag = response && response.articles && response.articles.length > 0;
    }
    
    let request : ICardRequest ={
        articles : respFlag ? response.articles: [],
        localItem: 'preferedNYAPIAuthor'
    };
    

    setCardRequest(request);

  };
  const requiredFilterFields: IFilterItems[] = [
    {
      itemName: "category",
      itemValue: filterCategory,
      itemSetValue: setFilterCategory,
      itemList: categoryItemList
    },
    {
      itemName: "source",
      itemValue: filterSources,
      itemSetValue: setFilterSources,
      itemList: sourceItemList
    },
  ];

  return (
    <LayoutComponent
      filterNode={
        <FilterComponent items={requiredFilterFields} action={actionMethod} />
      }
      title="New York News API"
      searchNode={<SearchComponent action={actionMethod} />}
      cardNode={CardComponent(cardRequest)}
    />
  );
};

export default NYAPIComponent;
