import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Body">
      <div className="App">
        <h1>Admission Form</h1>
        <div className="form-container">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="course">Course:</label>
            <select id="course" name="course">
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;