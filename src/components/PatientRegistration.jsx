import { useState } from 'react'
import './Registration.css'

function PatientRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    county: '',
    password: '',
    confirmPassword: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianIdNumber: '',
    guardianPhone: ''
  })
  
  const [showGuardianFields, setShowGuardianFields] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Check if user is under 18
    if (name === 'dateOfBirth') {
      const birthDate = new Date(value)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()
      setShowGuardianFields(age < 18)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Patient registration:', formData)
    // Handle registration logic here
  }

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
          
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          
          {showGuardianFields && (
            <div className="guardian-section">
              <h3>Guardian Information (Required for under 18)</h3>
              <div className="form-row">
                <input
                  type="text"
                  name="guardianFirstName"
                  placeholder="Guardian First Name"
                  value={formData.guardianFirstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="guardianLastName"
                  placeholder="Guardian Last Name"
                  value={formData.guardianLastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="guardianIdNumber"
                placeholder="Guardian ID Number"
                value={formData.guardianIdNumber}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="guardianPhone"
                placeholder="Guardian Phone Number"
                value={formData.guardianPhone}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          
          <select
            name="county"
            value={formData.county}
            onChange={handleChange}
            required
          >
            <option value="">Select County</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Eldoret">Eldoret</option>
          </select>
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
          <button type="submit" className="btn-primary">Register as Patient</button>
        </form>
      </div>
    </div>
  )
}

export default PatientRegistration