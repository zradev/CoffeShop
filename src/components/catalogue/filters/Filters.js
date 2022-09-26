import React, { useMemo } from "react";
import PropertyFilter from "./propertyFilter/PropertyFilter";
import PriceRange from "./priceRange/PriceRange";

const Filters = (props) => {
  const uniqueBrandList = useMemo(() => {
    return [...new Set(props.products.map((item) => item.brand))];
  }, [props.products]);

  const uniqueLocationList = useMemo(() => {
    return [...new Set(props.products.map((item) => item.location))];
  }, [props.products]);

  return (
    <>
      <PropertyFilter
        name="brands"
        uniqueList={uniqueBrandList}
        selectedItems={props.selectedBrands}
        handleItemSelection={props.handleBrandSelection}
      />
      <PropertyFilter
        name="location"
        uniqueList={uniqueLocationList}
        selectedItems={props.selectedLocation}
        handleItemSelection={props.handleLocationSelection}
      />
      <PriceRange filter={props.onPriceRangeChange} />
    </>
  );
};

export default Filters;
