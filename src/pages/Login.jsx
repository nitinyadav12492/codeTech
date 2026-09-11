import React, { useState } from "react";
import { API_URL } from "../config";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";

const Login = () => {
 
  const [formData, setFormData] = useState({
   
    email: "",
    
    password: "",
  });
   const { storetokenInLs } = useAuth();
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

    console.log(formData);
     
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // store token and update auth state
      if (data.token) storetokenInLs(data.token);

      alert("Login successful!");

      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      alert(error.message || "Something went wrong");
    }
   
  

    }

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Login</h1>
        

        <form onSubmit={handleSubmit}>
          
          

          <div className="form-group">
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

          <div className="form-group">
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
           Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;