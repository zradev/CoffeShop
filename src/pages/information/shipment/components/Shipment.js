import React from "react";
import Heading from "../../../../components/common/Heading";

const Shipment = () => {
  return (
    <>
      <div className="marginX">
        <Heading title="Shipment" />
        <div className="content">
          <p>
            Please allow 1-3 business days for order processing at our
            warehouse.
          </p>
          <p>Standard Shipping: 6-10 Working Days.</p>
          <p>Express Shipping: 3-5 Working Days.</p>
          <h3>PROCESSING TIME</h3>
          <p>
            The order processing time might take up to 1- 3 business days*.
            Processing includes checking, packing, and sending your orders to
            the post-office. After all these procedures, the tracking number
            will be provided to you via email.
          </p>
          <p>
            If you place your order after 12:00 PM Eastern Standard Time on
            Friday, or over the weekend (Saturday or Sunday), your order will be
            shipped the following week.
          </p>
          <h3>ORDER PAYMENT</h3>
          <p>All customers are charged at the time of purchase.</p>
          <p>All payments are in USD.</p>
          <p>
            Paying in local currency means your home bank handles the currency
            conversion; they will convert the currency from USD to Local
            currency for you.
          </p>
          <h3>SEPARATE SHIPMENTS</h3>
          <p>
            When you order multiple items at a time, they may be shipped
            separately so they get to you faster. Due to warehouse locations and
            product availability, items may be shipped in separate shipments.
            You may receive one item before the next. We do this so that you can
            get your items as fast as possible. In this case, you will be
            provided with two or more tracking numbers.
          </p>
          <p>
            We’re available 9:00am to 6:00pm Monday through Friday and we
            typically respond in 1 business days.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Shipment;
