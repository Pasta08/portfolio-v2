'use client'
import React, { FormEvent, useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const email = 'example@example.com'; // Replace with your email address
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Hello, my name is ${encodeURIComponent(firstName)} ${encodeURIComponent(lastName)}.`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=''>
      <form onSubmit={handleSendEmail} className='w-full md:flex'>
        <div className='flex flex-col gap-3 md:w-1/2'>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder='First name'
            className='focus-visible:outline-none focus-visible:border-opacity-100 font-montserrat w-full h-10 bg-transparent border-[1px] rounded-md border-gray-300 border-opacity-30 text-white placeholder:text-gray-500 indent-2'
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder='Last name'
            className='focus-visible:outline-none focus-visible:border-opacity-100 font-montserrat w-full h-10 bg-transparent border-[1px] rounded-md border-gray-300 border-opacity-30 text-white placeholder:text-gray-500 indent-2'
          />

          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder='Subject'
            className='focus-visible:outline-none focus-visible:border-opacity-100 font-montserrat w-full h-10 bg-transparent border-[1px] rounded-md border-gray-300 border-opacity-30 text-white placeholder:text-gray-500 indent-2'
          />

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder='Your message'
            className='focus-visible:outline-none focus-visible:border-opacity-100 font-montserrat w-full h-24 bg-transparent border-[1px] rounded-md border-gray-300 border-opacity-30 text-white placeholder:text-gray-500 indent-2'
          />
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center mt-4'>
          <button type="submit" className='w-full md:w-auto bg-transparent text-white border-[1px] rounded-md border-white py-2 min-w-48' >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
