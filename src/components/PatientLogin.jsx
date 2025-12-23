import { useState } from 'react'
import './Registration.css'

function PatientLogin({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Patient login:', formData)
    // Handle login logic here
  }

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Patient Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️🗨️'}
            </button>
          </div>
          
          <button type="submit" className="btn-primary">Login</button>
        </form>
        
        <p className="form-link">
          Don't have an account? <button type="button" onClick={onSwitchToRegister} className="link-button">Register here</button>
        </p>
      </div>
    </div>
  )
}

export default PatientLogin