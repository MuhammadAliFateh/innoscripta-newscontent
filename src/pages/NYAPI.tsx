import { DataProvider } from "../components/ContextAPI/ContextState";
import NYAPIComponent from "../components/NYAPIComponent/NYAPIComponent";

const NYAPI = () => {
  
  return (
    <DataProvider>
        <NYAPIComponent />
    </DataProvider>
  );
};
export default NYAPI;
