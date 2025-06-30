import { DataProvider } from "../components/ContextAPI/ContextState";
import PersonalizedCategoryComponent from "../components/NewsAPIComponent/PersonalizedCategoryComponent";

const PersonalizedNewsAPICateogy = () => {
  
  return (
    <DataProvider>
        <PersonalizedCategoryComponent />
    </DataProvider>
  );
};
export default PersonalizedNewsAPICateogy;
