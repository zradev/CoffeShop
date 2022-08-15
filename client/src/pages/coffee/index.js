import React from "react";
import Heading from "./../../components/common/Heading";
import CoffeeCatalogue from "./components/CoffeeCatalogue";

const index = () => {
  return (
    <>
      <Heading title="Coffee" subtitle="We choose the best products for you." />
      <CoffeeCatalogue />
    </>
  );
};

export default index;
