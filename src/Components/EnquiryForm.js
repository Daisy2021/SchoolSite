import React from "react";
import "../styles/EnquiryForm.css";

function EnquiryForm({ close }) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6339164-6e84-4624-85b5-6bf3db7b8e6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(alert("Form Submitted Successfully"));
      event.target.reset();
      close();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="enquiry-form">
      <form onSubmit={onSubmit} className="form">
        <h1 className="form-heading">Enquiry Form</h1>
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contactNumber"
            placeholder="ContactNumber"
            required
          />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message..." required></textarea>
        </div>
        <div className="form-group">
          <input
            type="hidden"
            name="access_key"
            value="e6339164-6e84-4624-85b5-6bf3db7b8e6f"
          />
        </div>
        <button type="submit" className="btn">
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default EnquiryForm;
