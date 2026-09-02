import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">

      {/* ================= TOP ================= */}

      <div className="about-container">

        <div className="about-image">

          <img
            src="/dp.png"
            alt="Students learning together"
          />

          <div className="about-experience">
            <strong>10K+</strong>
            <span>Students Learning</span>
          </div>

        </div>


        <div className="about-content">

          <span className="about-label">
            ABOUT OUR PLATFORM
          </span>

          <h2>
            Making Quality
            <span> Education Accessible.</span>
          </h2>

          <p className="about-main-text">
            We believe that learning should be simple, practical and
            accessible to everyone. Our platform brings together
            high-quality courses designed to help students learn
            skills that actually matter.
          </p>

          <p>
            From technology and programming to professional and
            career-focused skills, our courses are created to provide
            a structured learning experience with practical knowledge.
          </p>


          <div className="about-points">

            <div>
              <span>✓</span>
              <p>Industry-focused courses</p>
            </div>

            <div>
              <span>✓</span>
              <p>Learn at your own pace</p>
            </div>

            <div>
              <span>✓</span>
              <p>Practical projects</p>
            </div>

            <div>
              <span>✓</span>
              <p>Expert instructors</p>
            </div>

          </div>

        </div>

      </div>


      {/* ================= MISSION ================= */}

      <div className="mission-section">

        <div className="mission-heading">

          <span>OUR MISSION</span>

          <h2>
            Learn Today.
            <strong> Grow Tomorrow.</strong>
          </h2>

          <p>
            Our mission is to help learners develop valuable skills,
            gain confidence and move closer to their career goals.
          </p>

        </div>


        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-number">
              01
            </div>

            <h3>Learn</h3>

            <p>
              Access structured courses created to make complex
              topics easier to understand.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-number">
              02
            </div>

            <h3>Practice</h3>

            <p>
              Apply your knowledge through projects, exercises
              and practical learning.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-number">
              03
            </div>

            <h3>Grow</h3>

            <p>
              Build confidence and skills that help you achieve
              your academic and career goals.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;