// components/RegistrationForm.tsx
import React from 'react';

const RegistrationForm: React.FC = () => {
  return (
    <form action="#" method="post">
      <h2>Student Registration</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default RegistrationForm;
