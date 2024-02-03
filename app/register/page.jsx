"use client";

// pages/Registration.js
import React, { useState } from 'react';
import '@stylesheets/Registration.scss';

const Registration = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    entity: '', // ISP, TIP, DSA, Cable Operator, Business Partner
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    areaCovered: '',
    // Add more fields as needed
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleClick = () => {
      e.preventDefault();
      const btn = document.querySelector("#btn");
      const btnText = document.querySelector("#btnText");
  
      btnText.innerHTML = "Thanks";
      btn.classList.add("active");
    };

  return (
    <div className="registration">
      <h1 className='heading'>Register with the SSCN Model</h1>
      <form>
        {/* Entity Type Dropdown */}
        <div className="formGroup">
          <label>Select Entity Type:</label>
          <select
            name="entity"
            value={formData.entity}
            onChange={handleChange}
          >
            <option value="">Select Entity Type</option>
            <option value="ISP">ISP</option>
            <option value="TIP">TIP</option>
            <option value="DSA">DSA</option>
            <option value="Cable Operator">Cable Operator</option>
            <option value="Business Partner">Business Partner</option>
          </select>
        </div>

        {/* Company Name */}
        <div className="formGroup">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        {/* Contact Person */}
        <div className="formGroup">
          <label>Contact Person:</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="formGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="formGroup">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Area Covered */}
        <div className="formGroup">
          <label>Area Covered:</label>
          <input
            type="text"
            name="areaCovered"
            value={formData.areaCovered}
            onChange={handleChange}
          />
        </div>

        {/* Add more form fields as needed */}

        {/* Submit Button */}
        <button id="btn" onClick={handleClick}>
            <p id="btnText">Submit</p>
            <div className="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
        </button>
    
      </form>
    </div>
  );
};

export default Registration;
