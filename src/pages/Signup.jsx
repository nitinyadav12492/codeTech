import React, { useState } from "react";
import { API_URL } from "../config";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";

const Signup = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", formData);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Server response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful! Please login to continue.");

      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
      });

      navigate("/login");

    } catch (error) {
      console.error("Error during signup:", error);

      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        <h1>Create Account</h1>

        <p>Sign up to create your account</p>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="signup-form-group">

            <label>Username</label>

            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />

          </div>


          {/* Email */}
          <div className="signup-form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* Phone */}
          <div className="signup-form-group">

            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter 10 digit phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>


          {/* Password */}
          <div className="signup-form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          <button type="submit">
            Sign Up
          </button>

        </form>


        <p className="login-text">

          Already have an account?

          <a href="/login">
            Login
          </a>

        </p>

      </div>

    </div>
  );
};

export default Signup;