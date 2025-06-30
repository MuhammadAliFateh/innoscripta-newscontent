import { ReactNode } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SearchComponent from "../FilterComponent/SearchComponent";

//in the action call interface to use multiple parameter
interface IPersonalizedLayout {
    title: string,
    cardNode: ReactNode
}
const PersonalizedLayoutComponents = (props: IPersonalizedLayout) => {
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
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <div className="row">
                {props.cardNode}
            </div>
            
        </div>
    </div>
  );
};
export default PersonalizedLayoutComponents;
