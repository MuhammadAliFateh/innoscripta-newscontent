import { DataProvider } from "../components/ContextAPI/ContextState";
import PersonalizedNYCategoryComponent from "../components/NYAPIComponent/PersonalizedNYCategoryComponent";

const PersonalizedNYAPICategory = () => {
  
  return (
    <DataProvider>
        <PersonalizedNYCategoryComponent />
    </DataProvider>
  );
};
export default PersonalizedNYAPICategory;
