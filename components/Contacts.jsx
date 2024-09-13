'use client'
import { Button, Card, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <div id='contact' className='px-4 md:px-[8%] py-10 md:py-20 bg-gray-100 flex flex-col lg:flex-row gap-y-10 gap-x-10'>
      
      {/* Form Section */}
      <div className='w-full lg:w-1/2 rounded-3xl border shadow-lg hover:shadow-2xl border-blue-950 bg-white'>
        <div className='w-full shadow-md p-6 md:p-10'>
          <h1 className='text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-6 md:mb-10'>
            Let’s work together!
          </h1>
          <Form layout='vertical' className='w-full max-w-xl mx-auto bg-white rounded-lg'>
            {/* Fullname Field */}
            <Form.Item
              label='Fullname'
              name='fullname'
              rules={[{ required: true, message: 'Please enter your fullname' }]}
              className='mb-6'
            >
              <Input
                size='large'
                placeholder='Fullname'
                className='w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
              className='mb-6'
            >
              <Input
                size='large'
                placeholder='example@gmail.com'
                className='w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </Form.Item>

            {/* Message Field */}
            <Form.Item
              label='Message'
              name='message'
              rules={[{ required: true, message: 'Please enter your message' }]}
              className='mb-6'
            >
              <TextArea
                rows={4}
                placeholder='Message'
                className='w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <button className='bg-gradient-to-r from-indigo-600 to-indigo-900 px-6 md:px-9 py-3 rounded-full text-white font-bold w-full'>
                Send Message
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center gap-y-8 px-6 md:px-16'>
        {/* Phone Section */}
        <div className='flex items-center gap-x-4 md:gap-x-5'>
          <div className='w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-900'>
            <PhoneCall className='text-white' />
          </div>
          <div>
            <h1 className='text-blue-950 font-bold text-lg md:text-xl'>Phone</h1>
            <h1 className='text-blue-950 font-semibold text-base md:text-xl'>+91 9558298810</h1>
          </div>
        </div>

        {/* Email Section */}
        <div className='flex items-center gap-x-4 md:gap-x-5'>
          <div className='w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-900'>
            <Mail className='text-white' />
          </div>
          <div>
            <h1 className='text-blue-950 font-bold text-lg md:text-xl'>Email</h1>
            <h1 className='text-blue-950 font-semibold text-base md:text-xl'>jugal7662techsunset@gmail.com</h1>
          </div>
        </div>

        {/* Address Section */}
        <div className='flex items-center gap-x-4 md:gap-x-5'>
          <div className='w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-900'>
            <MapPin className='text-white' />
          </div>
          <div>
            <h1 className='text-blue-950 font-bold text-lg md:text-xl'>Address</h1>
            <h1 className='text-blue-950 font-semibold text-base md:text-lg'>
              AT-Borasingi, Po-Barida, Ganjam, Odisha, PIN-761104
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
