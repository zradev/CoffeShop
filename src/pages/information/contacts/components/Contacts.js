import React from "react";
import Heading from "../../../../components/common/Heading";
import "../Contacts.css";

const Contacts = () => {
  const submitForm = () => {
    console.log("Submitted");
    alert("The form was submitted");
  };

  return (
    <>
      <Heading title="Contacts" subtitle="Get Help And Friendly Support" />
      <div className="contact">
        <form onSubmit={submitForm}>
          <h4>Fillup The Form</h4>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Full Name")}
            />
            <input
              type="email"
              placeholder="Email"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Email")}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Subject")}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Details..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Details...")}
          ></textarea>
          <button>Submit Request</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
