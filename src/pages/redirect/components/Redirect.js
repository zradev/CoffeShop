import React from "react";
import "../Redirect.css";

const Redirect = () => {
  return (
    <>
      <div className="redirect">
        <img
          src={
            "https://ik.imagekit.io/jtpsjzhns/images/components/redirect_-i7POAE6VW.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664180783264"
          }
          alt=""
        />
        <h3>This Page Isn't Available Right Now</h3>
        <p>
          The page you requested cannot be displayed right now. It may be
          temporarily unavailable, the link you clicked on may have expired, or
          you may not have permission to view this page.
        </p>
      </div>
    </>
  );
};

export default Redirect;
