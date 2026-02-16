import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const contactInfo = [
    { label: "School Name", value: "Gardent TVET School" },
    { label: "Location", value: "Ngoma District, Kibungo, Rwanda" },
    { label: "Phone", value: "+250 722 336 363" },
    { label: "Email", value: "info@gardenttvet.rw" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          {contactInfo.map((info, index) => (
            <p key={index}>
              <strong>{info.label}:</strong>{" "}
              {info.label === "Email" ? (
                <a href={`mailto:${info.value}`}>{info.value}</a>
              ) : info.label === "Phone" ? (
                <a href={`tel:${info.value}`}>{info.value}</a>
              ) : (
                info.value
              )}
            </p>
          ))}
        </div>

        <div className="contact-form-card">
          <h2>Send us a Message</h2>
          {error && <div className="error-message">{error}</div>}
          {status && <div className="success-message">{status}</div>}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
