// GetInTouchForm.js

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



function GetInTouchForm({ buttonColor }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState("");
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9002/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          choice,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        if(data.err_code === "USER_ALREADY_EXIST"){
          toast.error("User already exist");
        }
        toast.success("Thank you for getting in touch! We will respond shortly.");
      } else {
        // Display error message from server
        console.log(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <div className="grid min-h-full place-items-center">
      <form className="w-full max-w-lg bg-white rounded-lg " onSubmit={handleSubmit} >
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="firstname" className="block text-xs font-semibold">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              id="firstname"
              type="text"
              name="firstname"
              className="block  w-[100%] h-[60%] p-3 mt-2 border-slate-200 border-2 rounded-lg"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="lastname" className="block text-xs font-semibold">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              id="lastname"
              type="text"
              name="lastname"
              className="block w-full h-[60%] p-3 mt-2 border-2 border-slate-200 rounded-lg"
              required
            />
          </div>
        </div>

        <label htmlFor="email" className="block mt-4 text-xs font-semibold">E-mail</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          name="email"
          className="block w-full h-[60%] p-3 mt-2 border-2 border-slate-200 rounded-lg"
          required
        />

        <label htmlFor="service" className="block mt-4 text-xs font-semibold">What Can We Do For You</label>
        <select
          onChange={(e) => setChoice(e.target.value)}
          value={choice}
          id="service"
          name="service"
          className="block w-full h-[60%] p-3 mt-2 border-slate-200 border-2 rounded-lg"
          required
        >
          <option value="">Choice</option>
          <option value="buff">Buff</option>
          <option value="chicken">Chicken</option>
          <option value="veg">Veg</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="contact-number" className="block mt-4 text-xs font-semibold w-full">Phone Number</label>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={setPhone}
          inputProps={{
            name: 'phone',
            required: true,
          }}
          containerClass="custom-phone-container"
          inputClass="custom-phone-input"
          buttonClass="custom-phone-button"
          className="w-full h-[60%]"
        />

        <label htmlFor="message" className="block mt-4 text-xs font-semibold">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id="message"
          name="message"
          className="block w-full h-[60%] p-3 mt-2 border-slate-200 border-2 rounded-lg"
          required
        />
        <div className='mt-8 flex justify-start'>
          <button
            type="submit"
            className={`py-1 px-10 text-white rounded-3xl ${buttonColor === 'green' ? 'bg-customGreen' : 'bg-coustemOrange'}`}
          >
            Send Message
          </button>
        </div>
        {submitMessage && (
          <div className="mt-4 text-green-600">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default GetInTouchForm;
