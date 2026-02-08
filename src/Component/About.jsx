import React, { useEffect } from "react";
import { FaBullseye, FaLightbulb, FaHandsHelping, FaTools, FaCar, FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section">
      <h1 data-aos="fade-up">About Garden TVET School</h1>

      <p className="about-intro" data-aos="fade-up" data-aos-delay="100">
        Garden TVET School is a technical and vocational training institution
        dedicated to preparing learners with practical skills, technical
        knowledge, and professional values. We focus on hands-on training that
        meets industry standards and supports national development.
      </p>

      <div className="about-cards">
        {/* Mission */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-icon"><FaBullseye /></div>
          <h2>Our Mission</h2>
          <p>
            To provide quality technical and vocational education that equips
            students with employable skills, entrepreneurship mindset, and
            ethical values for sustainable careers and community development.
          </p>
        </div>

        {/* Vision */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="400">
          <div className="card-icon"><FaLightbulb /></div>
          <h2>Our Vision</h2>
          <p>
            To become a center of excellence in technical and vocational
            education, producing skilled, innovative, and responsible graduates
            who can compete in the modern workforce.
          </p>
        </div>

        {/* Values */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="600">
          <div className="card-icon"><FaHandsHelping /></div>
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity and professionalism</li>
            <li>Excellence in training and assessment</li>
            <li>Innovation and creativity</li>
            <li>Respect and teamwork</li>
            <li>Commitment to community development</li>
          </ul>
        </div>
      </div>

      {/* Trades Section */}
      <div className="trades-section" data-aos="fade-up" data-aos-delay="800">
        <h2>Our Trades</h2>

        <div className="trade-cards">
          <div className="trade-card">
            <FaLaptopCode className="trade-icon" />
            <h3>Software Development</h3>
            <p>
              Training students in modern programming, web development, and
              digital problem-solving skills to prepare them for careers in
              technology and innovation.
            </p>
          </div>

          <div className="trade-card">
            <FaCar className="trade-icon" />
            <h3>Automobile Technology</h3>
            <p>
              Equipping learners with hands-on skills in vehicle maintenance,
              diagnostics, and repair using modern automotive tools and systems.
            </p>
          </div>

          <div className="trade-card">
            <FaTools className="trade-icon" />
            <h3>Building Construction</h3>
            <p>
              Providing practical training in construction techniques,
              materials, safety practices, and site management for the building
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
