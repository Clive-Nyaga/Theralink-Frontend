import './Registration.css'
import Header from './Header'

function UserTypeSelection({ onSelectUserType, onGetStarted, onGoHome }) {
  return (
    <>
      <Header onGetStarted={onGetStarted} onGoHome={onGoHome} />
      <div className="registration-container" style={{ paddingTop: '100px' }}>
      <div className="registration-form">
        <h2>Choose Your Path</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--soft-brown)' }}>
          How would you like to use TheraLink?
        </p>
        
        <div className="user-type-options">
          <div className="user-type-card" onClick={() => onSelectUserType('patient')}>
            <div className="user-type-icon">🧠</div>
            <h3>I Need Therapy</h3>
            <p>Find qualified therapists and book sessions for mental health support</p>
          </div>
          
          <div className="user-type-card" onClick={() => onSelectUserType('therapist')}>
            <div className="user-type-icon">👩‍⚕️</div>
            <h3>I'm a Therapist</h3>
            <p>Join our platform to connect with clients and grow your practice</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default UserTypeSelection