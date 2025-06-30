import { IModalRequest } from "./ModalComponent.interface";

const ModalComponent = (props: IModalRequest) => {
    console.log("Testing_A1");
    console.warn(props);
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
            {
                props.urlToImage !== '' ? (<img className="h-10" height="40%" src={props.urlToImage} alt="Card image" />) : null
            }
          <div className="modal-body">
            {props.content}
        </div>
          
          <div className="modal-footer justify-content-between">
            <div> 
                <span className="badge bg-primary mr-2">{props.author ? `author : ${props.author}`: ''}</span>
                <span className="badge bg-primary mr-2">{props.sourceName ? `source : ${props.sourceName}`: ''}</span>
            </div>
            
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalComponent;
