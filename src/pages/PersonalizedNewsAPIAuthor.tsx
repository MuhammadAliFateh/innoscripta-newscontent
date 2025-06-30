import { DataProvider } from "../components/ContextAPI/ContextState";
import PersonalizedAuthorComponent from "../components/NewsAPIComponent/PersonalizedAuthorComponent";

const PersonalizedNewsAPIAuthor = () => {
  
  return (
    <DataProvider>
        <PersonalizedAuthorComponent />
    </DataProvider>
  );
};
export default PersonalizedNewsAPIAuthor;
