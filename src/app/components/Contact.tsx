'use client'
import { motion } from 'motion/react';
import React, { FormEvent, useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const email = 'ethan.boneortega@gmail.com'; // Replace with your email address
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

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder='Your message'
            className='placeholder:text-base py-2 text-sm focus-visible:outline-none focus-visible:border-opacity-100 font-montserrat w-full h-24 bg-transparent border-[1px] rounded-md border-gray-300 border-opacity-30 text-white placeholder:text-gray-500 indent-2 resize-none overflow-auto'
          />

        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center mt-4'>
          <motion.button
            type="submit"
            className='relative w-full md:w-auto bg-transparent text-white border-[1px] rounded-md border-white py-2 min-w-48 overflow-hidden'
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { color: '#ffffff' },
              hover: { color: '#ffffff' }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-success z-[-1]"
              variants={{
                rest: { scaleX: 0, originX: 0 },
                hover: { scaleX: 1, originX: 0, transition: { duration: 0.3, ease: 'easeOut' } }
              }}
              style={{ transformOrigin: '0 50%' }}
            />
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
