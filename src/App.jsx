import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './Components/Navbar'
import ErrorPage from './pages/ErrorPage'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer'
import AdminLayout from './Components/layout/Admin-Layout'
import AdminUsers from './pages/Admin-Users'
import AdminContacts from './pages/Admin-Contact'
import AdminServices from './pages/Admin-Services'

export const App = () => {
  return (
    <>
    <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminUsers />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
              <Route path="services" element={<AdminServices />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
           <Footer/>

  
    </BrowserRouter>
      </>
  )
}
