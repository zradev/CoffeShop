import Catalogue from "../../../components/catalogue/Catalogue";
import Heading from "./../../../components/common/Heading";

const CoffeeCatalogue = () => {
  return (
    <>
      <Heading title="Coffee" subtitle="We choose the best products for you." />
      <Catalogue category="coffee" />
    </>
  );
};

export default CoffeeCatalogue;
