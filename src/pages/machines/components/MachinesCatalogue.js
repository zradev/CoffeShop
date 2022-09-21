import Catalogue from "../../../components/catalogue/Catalogue";
import Heading from "../../../components/common/Heading";

const GrindersCatalogue = () => {
  return (
    <>
      <Heading
        title="Machines"
        subtitle="We choose the best products for you."
      />
      <Catalogue category="machines" />
    </>
  );
};

export default GrindersCatalogue;
