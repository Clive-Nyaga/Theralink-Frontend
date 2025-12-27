import { useState } from 'react'
import './Registration.css'
import Header from './Header'

function TherapistDashboard({ onGetStarted, onGoHome }) {
  const [profileData, setProfileData] = useState({
    licenseNumber: '',
    yearsExperience: '',
    education: '',
    specializations: [],
    languagesSpoken: [],
    sessionTypes: [],
    availabilityDays: [],
    availabilityTimes: '',
    sessionRate: '',
    bio: '',
    certifications: '',
    workLocation: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const field = name.includes('specializations') ? 'specializations' :
                   name.includes('languages') ? 'languagesSpoken' :
                   name.includes('sessionTypes') ? 'sessionTypes' : 'availabilityDays'
      
      setProfileData(prev => ({
        ...prev,
        [field]: checked 
          ? [...prev[field], value]
          : prev[field].filter(item => item !== value)
      }))
    } else {
      setProfileData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Therapist profile:', profileData)
    // Handle profile completion logic here
  }

  return (
    <>
      <Header onGetStarted={onGetStarted} onGoHome={onGoHome} />
      <div className="registration-container" style={{ paddingTop: '100px' }}>
        <div className="registration-form">
          <h2>Complete Your Professional Profile</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--soft-brown)' }}>
            Help clients find you by completing your professional profile
          </p>
          
          <form onSubmit={handleSubmit}>
            <h3>Professional Credentials</h3>
            <input
              type="text"
              name="licenseNumber"
              placeholder="KAPC License Number"
              value={profileData.licenseNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="yearsExperience"
              placeholder="Years of Experience"
              value={profileData.yearsExperience}
              onChange={handleChange}
              required
            />
            <textarea
              name="education"
              placeholder="Education & Qualifications (e.g., Masters in Clinical Psychology, University of Nairobi)"
              value={profileData.education}
              onChange={handleChange}
              rows="3"
              required
            />

            <h3>Specializations</h3>
            <div className="checkbox-group">
              {['Anxiety & Depression', 'Relationship Counseling', 'Family Therapy', 'Trauma & PTSD', 'Addiction Recovery', 'Youth & Adolescent', 'Grief Counseling', 'Stress Management'].map(spec => (
                <label key={spec} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="specializations"
                    value={spec}
                    checked={profileData.specializations.includes(spec)}
                    onChange={handleChange}
                  />
                  {spec}
                </label>
              ))}
            </div>

            <h3>Languages & Session Types</h3>
            <div className="checkbox-group">
              <label>Languages Spoken:</label>
              {['English', 'Swahili', 'Kikuyu', 'Luo', 'Luhya', 'Kamba'].map(lang => (
                <label key={lang} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="languages"
                    value={lang}
                    checked={profileData.languagesSpoken.includes(lang)}
                    onChange={handleChange}
                  />
                  {lang}
                </label>
              ))}
            </div>

            <div className="checkbox-group">
              <label>Session Types Offered:</label>
              {['Online Video Sessions', 'In-Person Sessions', 'Phone Sessions', 'Group Therapy'].map(type => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="sessionTypes"
                    value={type}
                    checked={profileData.sessionTypes.includes(type)}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>

            <h3>Availability & Rates</h3>
            <div className="checkbox-group">
              <label>Available Days:</label>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <label key={day} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="availabilityDays"
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
              placeholder="Available times (e.g., 9 AM - 5 PM, Evenings)"
              value={profileData.availabilityTimes}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="sessionRate"
              placeholder="Session Rate (KSh per hour)"
              value={profileData.sessionRate}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="workLocation"
              placeholder="Work Location/Clinic (if offering in-person sessions)"
              value={profileData.workLocation}
              onChange={handleChange}
            />

            <h3>Professional Bio</h3>
            <textarea
              name="bio"
              placeholder="Tell potential clients about your approach, experience, and what makes you unique as a therapist"
              value={profileData.bio}
              onChange={handleChange}
              rows="4"
              required
            />

            <textarea
              name="certifications"
              placeholder="Additional certifications or training (optional)"
              value={profileData.certifications}
              onChange={handleChange}
              rows="2"
            />

            <button type="submit" className="btn-primary">Complete Profile</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TherapistDashboard