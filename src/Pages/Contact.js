import React from "react";
import ContactCard from "../Components/ContactCard.js";
import EnquiryForm from "../Components/EnquiryForm.js";
import "../styles/ContactUs.css";

function Contact() {
  return (
    <div>
      <h1 className="contactheading">Contact Us</h1>
      <div className="contactus">
        <div className="card">
          <ContactCard />
        </div>
        <div className="form">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
