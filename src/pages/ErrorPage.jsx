import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="error-page">
      <div className="error-container">

        <div className="error-number">
          404
        </div>

        <div className="error-content">

          <span className="error-label">
            PAGE NOT FOUND
          </span>

          <h1>
            Oops! This Page
            <span> Doesn't Exist.</span>
          </h1>

          <p>
            The page you're looking for may have been moved, deleted,
            or the URL might be incorrect. Don't worry, let's get you
            back to learning.
          </p>

          <div className="error-buttons">

            <button
              className="error-home-btn"
              onClick={() => navigate("/")}
            >
              Back to Home
              <span>→</span>
            </button>

            <button
              className="error-course-btn"
              onClick={() => navigate("/courses")}
            >
              Explore Courses
            </button>

          </div>

        </div>

        <div className="error-decoration">
          <div className="error-circle circle-one"></div>
          <div className="error-circle circle-two"></div>
          <div className="error-circle circle-three"></div>
        </div>

      </div>
    </section>
  );
};

export default ErrorPage;