import React from "react";
import "./Home.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode, FaMobileAlt,  } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaStar,  } from "react-icons/fa";
import { FaUser,  } from "react-icons/fa";
// import Weather from "../Components/Weather";

const Home = () => {
  return (
    <main>

    
      <section className="hero-section">

        <div className="hero-container">

       
          <div className="hero-content">

            <div className="hero-badge">
              Learn. Grow. Succeed.
            </div>

            <h1>
              Learn Skills That
              <span> Build Your Future.</span>
            </h1>

            <p>
              Learn practical and industry-ready skills from expert
              instructors. Master new technologies, build real projects,
              and take your career to the next level.
            </p>

            <div className="hero-buttons">

              <a href="/services" className="hero-primary-btn">
                Explore Courses
                <span>→</span>
              </a>

              <a href="#about" className="hero-secondary-btn">
                Learn More
              </a>

            </div>

            {/* Trust */}
            <div className="hero-trust">

              <div className="avatars">
                <div><FaUser className="text-blue-600" /></div>
                <div><FaUser className="text-blue-600" /></div>
                <div><FaUser className="text-blue-600" /></div>
                <div><FaUser className="text-blue-600" /></div>
              </div>

              <div>
                <strong>10,000+</strong>
                <p>Students learning with us</p>
              </div>

            </div>

          </div>


          {/* Right Visual */}
          <div className="hero-image-wrapper">

            <div className="hero-image-card">

              <img
                src="/dp.png"
                alt="Students learning"
              />

            </div>

          

            <div className="floating-card course-card">

              <div className="floating-icon">
                📚
              </div>

              <div>
                <span>Courses</span>
                <strong>50+</strong>
              </div>

            </div>


            <div className="floating-card student-card">

              <div className="student-icon">
                <FaStar className="text-yellow-400 text-2xl" />
              </div>

              <div>
                <strong>4.9/5</strong>
                <span>Student Rating</span>
              </div>

            </div>

          </div>

        </div>

      </section>


     

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat">
            <h2>10K+</h2>
            <p>Active Students</p>
          </div>

          <div className="stat">
            <h2>50+</h2>
            <p>Professional Courses</p>
          </div>

          <div className="stat">
            <h2>30+</h2>
            <p>Expert Instructors</p>
          </div>

          <div className="stat">
            <h2>4.9</h2>
            <p>Average Rating</p>
          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="why-section">

        <div className="why-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Everything You Need
            <br />
            <strong>To Learn Better.</strong>
          </h2>

          <p>
            We make learning simple, practical and accessible for everyone.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <FaGraduationCap className="text-xl" />
            </div>

            <h3>Expert Instructors</h3>

            <p>
              Learn from experienced professionals who understand
              real-world industry requirements.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaLaptopCode className="text-blue-500" />
            </div>

            <h3>Practical Learning</h3>
              <FaMobileAlt className="text-green-500" />
            <p>
              Work on real projects and practical exercises instead
              of only watching theoretical lectures.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>Learn Anywhere</h3>

            <p>
              Access your courses anytime and continue learning
              from wherever you are.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
           <FaRocket className="text-xl" />
            </div>

            <h3>Career Focused</h3>

            <p>
              Build skills that help you prepare for internships,
              jobs and your professional career.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;