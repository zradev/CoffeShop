import React from "react";

const NoResults = () => {
  return (
    <>
      <div className="no-results">
        <img
          src={require("../../../assets/images/components/no_result_found.png")}
          alt="no-results-found"
        />
        <div className="text">
          <h2>No Results Found!</h2>
          <p>Please try changing the filters.</p>
        </div>
      </div>
    </>
  );
};

export default NoResults;
