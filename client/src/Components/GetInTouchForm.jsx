import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function GetInTouchForm() {
  const [phone, setPhone] = useState('');

  return (
    <div className="grid min-h-full place-items-center ">
      <form className="w-full max-w-lg bg-white  rounded-lg ">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="firstname" className="block text-xs font-semibold">First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="block w-full p-3 mt-2 border-slate-200 border-2 rounded-lg"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="lastname" className="block text-xs font-semibold">Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="block w-full p-3 mt-2 border-2 border-slate-200 rounded-lg"
              required
            />
          </div>
        </div>

        <label htmlFor="email" className="block mt-4 text-xs font-semibold">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          className="block w-full p-3 mt-2 border-2 border-slate-200 rounded-lg"
          required
        />

        <label htmlFor="service" className="block mt-4 text-xs font-semibold">What Can We Do For You</label>
        <select
          id="service"
          name="service"
          className="block w-full p-3 mt-2 border-slate-200 border-2 rounded-lg"
          required
        >
          <option value="">Choice</option>
          <option value="buff">Buff</option>
          <option value="chicken">Chicken</option>
          <option value="veg">Veg</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="contact-number" className="block mt-4 text-xs font-semibold">Phone Number</label>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={setPhone}
          inputProps={{
            name: 'phone',
            required: true,
            className: 'w-full p-3 mt-4 border-slate-200 border-2 rounded-lg',
          }}
          containerClass="w-full"
          inputClass="w-full"
        />

        <label htmlFor="message" className="block mt-4 text-xs font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          className="block w-full p-3 mt-2 border-slate-200 border-2 rounded-lg"
          required
        />
        <div className='mt-8 flex justify-start'>

     <a href="#" className=" py-1 px-4  text-white bg-coustemOrange rounded-3xl">Send Message</a>
        </div>


      </form>
    </div>
  );
}

export default GetInTouchForm;
