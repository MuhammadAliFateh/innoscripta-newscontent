import { ReactNode } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SearchComponent from "../FilterComponent/SearchComponent";

//in the action call interface to use multiple parameter
interface ILayout {
    title: string,
    filterNode : ReactNode,
    searchNode: ReactNode,
    cardNode: ReactNode
}
const LayoutComponent = (props: ILayout) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h1 className="text-dark">{props.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
            {props.filterNode}
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-9 ">
            {props.searchNode}
          <div className="row">
            {props.cardNode}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LayoutComponent;
