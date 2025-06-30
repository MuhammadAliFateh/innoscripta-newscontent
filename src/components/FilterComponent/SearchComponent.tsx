import { useContext } from "react";
import { DataContext } from "../ContextAPI/ContextState";
import { ISearch } from "./FilterComponent.interface";

const SearchComponent = (props: ISearch) => {
  const ContextValue = useContext(DataContext);
    if (!ContextValue) {
        return <p>Loading context...</p>; 
    }
    const {searchQuery, setSearchQuery} = ContextValue;

  return (
    <div
      className="mb-3 mt-3"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="Search content"
        name="email"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <div className="ml-3">
        <button
          type="button"
          className="ml-2 btn btn-primary"
          onClick={() => props.action()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
