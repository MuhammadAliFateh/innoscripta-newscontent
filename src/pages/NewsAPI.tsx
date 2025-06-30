import { DataProvider } from "../components/ContextAPI/ContextState";
import NewsAPIComponent from "../components/NewsAPIComponent/NewsAPIComponent";

const NewsAPI = () => {
  
  return (
    <DataProvider>
        <NewsAPIComponent />
    </DataProvider>
  );
};
export default NewsAPI;
