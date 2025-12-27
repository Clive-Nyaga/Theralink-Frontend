import { useState } from 'react'
import './Registration.css'
import Header from './Header'

function PatientDashboard({ onGetStarted, onGoHome }) {
  const [profileData, setProfileData] = useState({
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    medicalHistory: '',
    currentMedications: '',
    therapyGoals: '',
    preferredLanguage: '',
    sessionPreference: '',
    availabilityDays: [],
    availabilityTimes: '',
    specialConcerns: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setProfileData(prev => ({
        ...prev,
        availabilityDays: checked 
          ? [...prev.availabilityDays, value]
          : prev.availabilityDays.filter(day => day !== value)
      }))
    } else {
      setProfileData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Patient profile:', profileData)
    // Handle profile completion logic here
  }

  return (
    <>
      <Header onGetStarted={onGetStarted} onGoHome={onGoHome} />
      <div className="registration-container" style={{ paddingTop: '100px' }}>
        <div className="registration-form">
          <h2>Complete Your Profile</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--soft-brown)' }}>
            Help us match you with the right therapist by completing your profile
          </p>
          
          <form onSubmit={handleSubmit}>
            <h3>Emergency Contact</h3>
            <div className="form-row">
              <input
                type="text"
                name="emergencyContactName"
                placeholder="Emergency Contact Name"
                value={profileData.emergencyContactName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="emergencyContactPhone"
                placeholder="Emergency Contact Phone"
                value={profileData.emergencyContactPhone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="emergencyContactRelation"
              placeholder="Relationship (e.g., Parent, Spouse, Friend)"
              value={profileData.emergencyContactRelation}
              onChange={handleChange}
              required
            />

            <h3>Medical Information</h3>
            <textarea
              name="medicalHistory"
              placeholder="Brief medical history (optional)"
              value={profileData.medicalHistory}
              onChange={handleChange}
              rows="3"
            />
            <textarea
              name="currentMedications"
              placeholder="Current medications (optional)"
              value={profileData.currentMedications}
              onChange={handleChange}
              rows="2"
            />

            <h3>Therapy Preferences</h3>
            <textarea
              name="therapyGoals"
              placeholder="What would you like to achieve through therapy?"
              value={profileData.therapyGoals}
              onChange={handleChange}
              rows="3"
              required
            />
            
            <select
              name="preferredLanguage"
              value={profileData.preferredLanguage}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Language</option>
              <option value="english">English</option>
              <option value="swahili">Swahili</option>
              <option value="both">Both English & Swahili</option>
            </select>

            <select
              name="sessionPreference"
              value={profileData.sessionPreference}
              onChange={handleChange}
              required
            >
              <option value="">Session Preference</option>
              <option value="online">Online Sessions Only</option>
              <option value="in-person">In-Person Sessions Only</option>
              <option value="both">Both Online & In-Person</option>
            </select>

            <h3>Availability</h3>
            <div className="checkbox-group">
              <label>Available Days:</label>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <label key={day} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={day}
                    checked={profileData.availabilityDays.includes(day)}
                    onChange={handleChange}
                  />
                  {day}
                </label>
              ))}
            </div>

            <input
              type="text"
              name="availabilityTimes"
              placeholder="Preferred times (e.g., Morning, Evening, 2-5 PM)"
              value={profileData.availabilityTimes}
              onChange={handleChange}
              required
            />

            <textarea
              name="specialConcerns"
              placeholder="Any specific concerns or areas you'd like to focus on? (optional)"
              value={profileData.specialConcerns}
              onChange={handleChange}
              rows="3"
            />

            <button type="submit" className="btn-primary">Complete Profile</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PatientDashboard