import React from "react";
import Brands from "./components/Brands";
import Heading from "./../../components/common/Heading";

const index = () => {
  return (
    <>
      <Heading
        title="Our Brands"
        subtitle="We choose the best brands for you."
      />
      <Brands />
    </>
  );
};

export default index;
