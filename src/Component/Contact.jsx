import "./Contact.css";

function Contact() {
  const contactInfo = [
    { label: "School Name", value: "Gardent TVET School" },
    { label: "Location", value: "Ngoma District, Kibungo, Rwanda" },
    { label: "Phone", value: "+250 722 336 363" },
    { label: "Email", value: "info@gardenttvet.rw" },
  ];

  return (
    <section className="contact-section">
      <h1>Contact Us</h1>

      <div className="contact-card">
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
    </section>
  );
}

export default Contact;
