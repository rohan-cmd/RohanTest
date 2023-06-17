import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    year: "",
    department: "",
    dob: "",
    age: "",
    caste: "",
    state: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic to handle form submission here
  };

  return (
    <div className="container">
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="text"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="caste">Caste:</label>
          <input
            type="text"
            name="caste"
            id="caste"
            value={formData.caste}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
