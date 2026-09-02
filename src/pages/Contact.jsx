import React, { useState } from "react";
import "./Contact.css";
import {useAuth} from "../store/auth"


const defaultContactFormData = {
    username: "",
    email: "",
    phone: "",
    message: "",
    }
const Contact = () => {
  const [formData, setFormData] = useState(defaultContactFormData);

  const [userData, setUserData] =  useState(true)

     const {user} =  useAuth();
   
     if(userData && user){
      setFormData({
        username:user.username,
        email:user.email,
        message:"",
      })

      setUserData(false)
     }



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
try{
const response = await fetch("http://localhost:3000/api/form/contact",{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },
  body:JSON.stringify(user)


})

if(response.ok){
  setFormData(defaultContactFormData)

}

}catch(error){
  console.log(error);
}
   




    console.log(formData);

    alert("Registration submitted successfully!");

    // setFormData({
    //   username: "",
    //   email: "",
   
    //   message: "",
    // });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Contact</h1>
        

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
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
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit">
            submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;