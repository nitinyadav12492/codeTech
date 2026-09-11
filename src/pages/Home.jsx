import React from "react";
import {
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaStar,
  FaTerminal,
} from "react-icons/fa";

import "./Home.css";

const STATS = [
  {
    value: "10",
    suffix: "K+",
    label: "Active learners",
  },
  {
    value: "50",
    suffix: "+",
    label: "Practical courses",
  },
  {
    value: "30",
    suffix: "+",
    label: "Industry mentors",
  },
  {
    value: "4.9",
    suffix: "",
    label: "Average rating",
  },
];

const FEATURES = [
  {
    number: "01",
    icon: <FaGraduationCap />,
    title: "Learn from builders",
    description:
      "Get practical guidance from people who have shipped products in the real world.",
    dark: true,
  },
  {
    number: "02",
    icon: <FaLaptopCode />,
    title: "Make real things",
    description:
      "Turn every lesson into a project you can use, share, and be proud of.",
  },
  {
    number: "03",
    icon: <FaMobileAlt />,
    title: "Learn your way",
    description:
      "Short, focused sessions that fit the way modern developers actually work.",
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Move with confidence",
    description:
      "Build the skills, portfolio, and momentum to take your next step.",
  },
];

const Home = () => {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">
        <div className="hero-grid-pattern"></div>

        <div className="hero-container">

          {/* Hero Content */}
          <div className="hero-content">

            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              The modern way to learn tech
            </div>

            <h1>
              Build what
              <br />
              <em>matters.</em>
            </h1>

            <p>
              CodeTech turns curious minds into confident builders with
              focused courses, real projects, and a community that keeps
              you moving.
            </p>

            <div className="hero-buttons">

              <a
                href="/services"
                className="hero-primary-btn"
              >
                Explore learning paths
                <FaArrowRight />
              </a>

              <a
                href="#why-codetech"
                className="hero-secondary-btn"
              >
                <FaTerminal />
                See how it works
              </a>

            </div>

            <div className="hero-trust">
              <span>Trusted by</span>

              <strong>
                10,000+ ambitious developers
              </strong>

              <span className="trust-line"></span>
            </div>

          </div>

          {/* Hero Visual */}
          <div
            className="hero-visual"
            aria-label="CodeTech learning platform preview"
          >

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            {/* Code Window */}
            <div className="code-window">

              <div className="window-bar">

                <span></span>
                <span></span>
                <span></span>

                <b>codetech / roadmap.js</b>

              </div>

              <div className="code-body">

                <span className="line-number">01</span>

                <code>
                  <i>const</i>{" "}
                  <strong>future</strong> ={" "}
                  <em>build</em>{"{"}
                </code>

                <span className="line-number">02</span>

                <code>
                  &nbsp;&nbsp;skill:{" "}
                  <mark>"full-stack"</mark>,
                </code>

                <span className="line-number">03</span>

                <code>
                  &nbsp;&nbsp;practice:{" "}
                  <mark>true</mark>,
                </code>

                <span className="line-number">04</span>

                <code>
                  &nbsp;&nbsp;community:{" "}
                  <mark>"always-on"</mark>
                </code>

                <span className="line-number">05</span>

                <code>
                  {"});"}
                </code>

                <span className="cursor"></span>

              </div>

              <div className="window-footer">

                <span>
                  <FaCode />
                  main
                </span>

                <span>
                  ● synced just now
                </span>

              </div>

            </div>

            {/* Course Badge */}
            <div className="visual-badge badge-course">

              <FaLaptopCode />

              <span>
                50+
                <small>courses</small>
              </span>

            </div>

            {/* Rating Badge */}
            <div className="visual-badge badge-rating">

              <FaStar />

              <span>
                4.9
                <small>learner rating</small>
              </span>

            </div>

            <img
              className="hero-mark"
              src="/dp.png"
              alt=""
            />

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stats-container">

          {STATS.map((stat) => (
            <div
              className="stat"
              key={stat.label}
            >

              <h2>
                {stat.value}
                <span>{stat.suffix}</span>
              </h2>

              <p>{stat.label}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= WHY CODETECH ================= */}

      <section
        className="why-section"
        id="why-codetech"
      >

        <div className="why-heading">

          <div>

            <span className="section-kicker">
              WHY CODETECH
            </span>

            <h2>
              Learning that ships
              <br />
              <em>with you.</em>
            </h2>

          </div>

          <p>
            No endless theory. Just a clear path from your first
            line of code to your next opportunity.
          </p>

        </div>


        {/* Feature Cards */}

        <div className="feature-grid">

          {FEATURES.map((feature) => (
            <div
              key={feature.number}
              className={`feature-card ${
                feature.dark ? "feature-card-dark" : ""
              }`}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <span>{feature.number}</span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
};

export default Home;