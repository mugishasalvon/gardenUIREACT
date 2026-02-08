import "./Home.css";
import ImageSlider from "./ImageSlider";
import laviela from "./laviela.jpg";
import salvo from "./salvo.jpg";
import kigali from "./kigali.jpeg";

const campusImages = [laviela, salvo, kigali];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <h1>Welcome to Garden TVET School</h1>
        <p>
          At Garden TVET School, we are committed to empowering learners with
          quality technical and vocational education. We focus on practical
          skills, innovation, and professionalism to prepare students for
          employment, entrepreneurship, and lifelong success.
        </p>
        <button>Get Started</button>
      </section>

      <section className="campus-highlight">
        <div className="container">
          <h2>Our Campus</h2>
          <ImageSlider images={campusImages} />
          <p>
            Our campus provides a safe, supportive, and well-equipped learning
            environment where students can grow academically, technically, and
            personally.
          </p>
        </div>
      </section>

      <section className="features">
        <h2 style={{ color: "#ffffff" }}>Why Choose Garden TVET School?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3 style={{ color: "#ffffff" }}>Practical Training</h3>
            <p style={{ color: "#ffffff" }}>
              We emphasize hands-on learning to ensure students gain real-world
              skills that meet industry standards.
            </p>
          </div>

          <div className="feature-card">
            <h3 style={{ color: "#ffffff" }}>Qualified Instructors</h3>
            <p style={{ color: "#ffffff" }}>
              Our instructors are skilled professionals dedicated to mentoring
              and supporting every learner.
            </p>
          </div>

          <div className="feature-card">
            <h3 style={{ color: "#ffffff" }}>Modern Facilities</h3>
            <p style={{ color: "#ffffff" }}>
              We offer modern workshops, tools, and classrooms designed to
              enhance learning and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2 style={{ color: "#ffffff" }}>Start Your Journey With Us</h2>
        <p style={{ color: "#ffffff" }}>
          Join Garden TVET School today and build the skills, confidence, and
          knowledge you need for a successful future.
        </p>
        <button>Apply Now</button>
      </section>
    </main>
  );
}

export default Home;
