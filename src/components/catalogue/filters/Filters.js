import React from "react";
import PropertyFilter from "./propertyFilter/PropertyFilter";
import PriceRange from "./priceRange/PriceRange";

const Filters = (props) => {
  return (
    <>
      <PropertyFilter
        name="brands"
        uniqueList={props.uniqueBrandList}
        selectedItems={props.selectedBrands}
        handleItemSelection={props.handleBrandSelection}
      />
      <PropertyFilter
        name="location"
        uniqueList={props.uniqueLocationList}
        selectedItems={props.selectedLocation}
        handleItemSelection={props.handleLocationSelection}
      />
      <PriceRange filter={props.onPriceRangeChange} />
    </>
  );
};

export default Filters;
