import { useContext, useState } from "react";
import { IFilterComponent, IFilterItems } from "./FilterComponent.interface";
import { DataContext } from "../ContextAPI/ContextState";

const FilterComponent = (props: IFilterComponent) => {
  const contextValue = useContext(DataContext);
  const [fieldList, setFieldList] = useState<string[]>(['']);
  if (!contextValue) {
    return <p>Loading context...</p>;
  }
  
  const checkField = (fieldName: string, setFieldValue: (val: string)=>void) =>{
    if (fieldList?.includes(fieldName)) {
        setFieldValue('');
        setFieldList(prev => prev.filter(item => item !== fieldName));
    } else {
        setFieldList(prev => [...prev, fieldName]);
    }
  }
  const renderOption = (itemList : string[] | undefined)=>{
    if(itemList && itemList.length > 0){
        return itemList.map((item, index)=>{
            return <option value={item}>{item}</option>
        })
    }
  }
  const renderFilter = (fields: IFilterItems[]) =>{
    return fields.map((item, index)=>{
        const {itemName, itemValue, itemSetValue, itemList} = item
        return (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={itemName}
            onChange={()=>checkField(itemName, itemSetValue)}
          />
          <label className="form-check-label">{itemName}</label>
          <select className="form-select"
            id="email"
            value={itemValue}
            style={{display: fieldList && fieldList.includes(itemName) ? "block": "none"}}
            onChange={(e)=>itemSetValue(e.target.value)}
            >
                <option value="">Choose source</option>
                {renderOption(itemList)}
            </select>
          
        </div>
    )

    })
    
  }
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4 className="card-title">Filter</h4>
        {
            renderFilter(props.items)
        }
        <div className="ml-3 mt-3" style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }}>
          <button type="button"  className="btn btn-primary" onClick={()=>props.action()}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;