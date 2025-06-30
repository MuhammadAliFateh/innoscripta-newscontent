import { DataProvider } from "../components/ContextAPI/ContextState";
import NewsAPIComponent from "../components/NewsAPIComponent/NewsAPIComponent";
import PersonalizedAuthorComponent from "../components/NewsAPIComponent/PersonalizedAuthorComponent";
import PersonalizedSourceComponent from "../components/NewsAPIComponent/PersonalizedSourceComponent";

const PersonalizedNewsAPISource = () => {
  
  return (
    <DataProvider>
        <PersonalizedSourceComponent />
    </DataProvider>
  );
};
export default PersonalizedNewsAPISource;
