import { useState } from "react";

function Contact() {
  // We store all the contact data in one state object
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // created generic function to handle input data
  function handleChange(event) {
    const { name, value } = event.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  }

  // handling the button click event and submit the data here and also prevent the default nature of submit button to stop page refresh/reload
  function handleClick(event) {
    event.preventDefault();
    alert(
      ` Contact data submitted \n\n Name: ${contactData.name} \n Email: ${contactData.email} \n Message: ${contactData.message}`,
    );

    // reset contact form data and set it to default state
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Contact Us</h3>
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="fullName"
                    placeholder="Enter your name"
                    value={contactData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={contactData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    name="message"
                    placeholder="Type your message"
                    value={contactData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
