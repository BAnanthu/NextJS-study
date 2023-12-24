// components/RegistrationForm.tsx
'use client'
import axios from 'axios';
import React, { useState } from 'react';
import axiosInstance1 from '../../../axios-config';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    parentPhone: '',
    parentEmail: '',
    class: '',
    admissionYear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log('Form data submitted:', formData);

    try {
      const response = await axiosInstance1.post('https://example.com/api/post', formData);

      // Handle the response, if needed
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-black rounded-md shadow-md grid grid-cols-2 gap-4">
      <h2 className="col-span-2 text-2xl font-semibold mb-6">Student Registration</h2>

      <div className="col-span-2 mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Student Name:
        </label>
        <input type="text" value={formData.name} onChange={handleChange} id="name" name="name" className="mt-1 p-2 w-full border rounded-md text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
          Date of Birth:
        </label>
        <input type="date" id="dob" value={formData.dob} onChange={handleChange} name="dob" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="col-span-2 mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
          Address:
        </label>
        <textarea id="address"  onChange={handleChange} value={formData.address} name="address" rows={4} className="mt-1 p-2 w-full border rounded-md  text-black" required></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone Number:
        </label>
        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} name="phone" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email:
        </label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" className="mt-1 p-2 w-full border rounded-md" required />
      </div>

      <div className="col-span-2 mb-4">
        <label htmlFor="parentName" className="block text-sm font-medium text-gray-600">
          Parent/Guardian Name:
        </label>
        <input type="text" id="parentName" value={formData.email} onChange={handleChange} name="parentName" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-600">
          Parent/Guardian Phone:
        </label>
        <input type="tel" id="parentPhone" value={formData.parentPhone} onChange={handleChange} name="parentPhone" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-600">
          Parent/Guardian Email:
        </label>
        <input type="email" id="parentEmail" value={formData.parentEmail} onChange={handleChange} name="parentEmail" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-600">
          Previous School (if any):
        </label>
        <input type="text" id="previousSchool"  value={formData.parentEmail} onChange={handleChange} name="previousSchool" className="mt-1 p-2 w-full border rounded-md  text-black" />
      </div>

      <div className="mb-4">
        <label htmlFor="class" className="block text-sm font-medium text-gray-600">
          Class Applying For:
        </label>
        <input type="text" id="class" value={formData.class} onChange={handleChange} name="class" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="admissionYear" className="block text-sm font-medium text-gray-600">
          Admission Year:
        </label>
        <input type="text" id="admissionYear"  value={formData.admissionYear} onChange={handleChange} name="admissionYear" className="mt-1 p-2 w-full border rounded-md  text-black" required />
      </div>

      <div className="col-span-2 flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
