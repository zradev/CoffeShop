import React from "react";
import "./PropertyFilter.css";

const PropertyFilter = (props) => {
  return (
    <>
      <div className={`property-filter`}>
        <label>{props.name}</label>
        <ul>
          {props.uniqueList.map((uniqueItem, index) => (
            <li key={index} className="select-item">
              <input
                type="checkbox"
                id="checkbox"
                checked={props.selectedItems.includes(uniqueItem)}
                onChange={() => props.handleItemSelection(uniqueItem)}
              />
              <label htmlFor="checkbox">{uniqueItem}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PropertyFilter;
