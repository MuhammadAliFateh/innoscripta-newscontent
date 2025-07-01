import { DataProvider } from "../components/ContextAPI/ContextState";

import PersonalizedNYSourceComponent from "../components/NYAPIComponent/PersonalizedNYSourceComponent";

const PersonalizedNYAPISource = () => {
  
  return (
    <DataProvider>
        <PersonalizedNYSourceComponent />
    </DataProvider>
  );
};
export default PersonalizedNYAPISource;
