import React from "react";
import Catalogue from "../../../components/catalogue/Catalogue";
import Heading from "../../../components/common/Heading";

const GrindersCatalogue = () => {
  return (
    <>
      <Heading
        title="Grinders"
        subtitle="We choose the best products for you."
      />
      <Catalogue category="grinders" />
    </>
  );
};

export default GrindersCatalogue;
