import { DataProvider } from "../components/ContextAPI/ContextState";
import PersonalizedNYAuthorComponent from "../components/NYAPIComponent/PersonalizedNYAuthorComponent";

const PersonalizedNYAPIAuthor = () => {
  
  return (
    <DataProvider>
        <PersonalizedNYAuthorComponent />
    </DataProvider>
  );
};
export default PersonalizedNYAPIAuthor;
