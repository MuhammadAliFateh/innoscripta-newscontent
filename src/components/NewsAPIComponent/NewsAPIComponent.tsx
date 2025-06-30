import { useContext, useEffect, useState } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SearchComponent from "../FilterComponent/SearchComponent";
import LayoutComponent from "../LayoutComponent/LayoutComponent";
import { DataContext } from "../ContextAPI/ContextState";
import { fetchNews, getNewsAPISources, ISearchNewsAPIParam, searchNews } from "../../api/NewsAPI";
import {IFilterItems} from "../FilterComponent/FilterComponent.interface";
import { ICardRequest } from "../Elements/CardComponent/CardComponent.interface";
import CardComponent from "../Elements/CardComponent/CardComponent";
import { newsAPISourceItem } from "./NewsAPIComponent.interface";

const NewsAPIComponent = () => {
  const contextValue = useContext(DataContext);
  const [cardRequest, setCardRequest] = useState<ICardRequest>({articles : [], localItem: 'preferedNewsAPIAuthor'});
  const [categoryItemList, setCategoryItemList] = useState<string[]>([]);
  const [sourceItemList, setSourceItemList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetchNews();
      let request : ICardRequest ={
        articles : resp && resp.articles && resp.articles.length > 0 ? resp.articles: [],
        localItem: 'preferedNewsAPIAuthor'
      };
      
      let getSources: newsAPISourceItem[] | undefined = await getNewsAPISources();
      
      if(getSources && getSources.length > 0){
        let category: string[] = [];
        getSources.map(item => {
            if(!category.includes(item.category)){
                category.push(item.category)
            }
        }) 
        let source : string[] = getSources.map(item => item.id)
        setCategoryItemList(category)
        setSourceItemList(source)
      }
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
    let resp;
    let respFlag = false;

    if(filterCategory !== "" || searchQuery !== "" || filterSources !== ""){
        resp = await searchNews(param);
        respFlag = resp && resp.articles && resp.articles.length > 0;
        if(respFlag){
            if(filterCategory !== "")
            {
                let localCategoryItem = JSON.parse(localStorage.getItem('preferedNewsAPICategory') || '')
                if(localCategoryItem !== filterCategory){
                    localStorage.setItem('preferedNewsAPICategory', JSON.stringify(filterCategory))
                }
            }
            if(filterSources !== ""){
                let localSourceItem = JSON.parse(localStorage.getItem('preferedNewsAPISource') || '[]')
                if(!localSourceItem.includes(filterSources)){
                    localSourceItem.push(filterSources)
                    localStorage.setItem('preferedNewsAPISource', JSON.stringify(localSourceItem))
                }
            }
        }
    }
    else {
        resp = await fetchNews();
        respFlag = resp && resp.articles && resp.articles.length > 0;
    }
    
    let request : ICardRequest ={
        articles : respFlag ? resp.articles: [],
        localItem: 'preferedNewsAPIAuthor'
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
      title="News API"
      searchNode={<SearchComponent action={actionMethod} />}
      cardNode={CardComponent(cardRequest)}
    />
  );
};

export default NewsAPIComponent;
