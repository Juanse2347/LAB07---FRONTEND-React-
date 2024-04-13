import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    salary: ''
  });

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    fetch("https://appcvds2.azurewebsites.net/api/employees", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h1>API Employees</h1>
      <form onSubmit={handlePostSubmit}>
        <label htmlFor="firstName">Nombre:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required /><br />
        <label htmlFor="lastName">Apellido:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required /><br />
        <label htmlFor="role">Rol:</label>
        <input type="text" id="role" name="role" value={formData.role} onChange={handleInputChange} required /><br />
        <label htmlFor="salary">Salario:</label>
        <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleInputChange} required /><br />
        <button type="submit">Crear Empleado</button>
      </form>
    </div>
  );
}

export default App;