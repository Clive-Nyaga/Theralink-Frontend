import { useState } from 'react'
import './App.css'
import PatientRegistration from './components/PatientRegistration'
import TherapistRegistration from './components/TherapistRegistration'
import PatientLogin from './components/PatientLogin'
import TherapistLogin from './components/TherapistLogin'
import PatientDashboard from './components/PatientDashboard'
import TherapistDashboard from './components/TherapistDashboard'
import UserTypeSelection from './components/UserTypeSelection'
import theralinkLogo from './assets/TheraLink.png'

function App() {
  const [currentView, setCurrentView] = useState('landing')

  if (currentView === 'user-type-selection') {
    return <UserTypeSelection 
      onSelectUserType={(type) => setCurrentView(`${type}-registration`)} 
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
    />
  }

  if (currentView === 'patient-registration') {
    return <PatientRegistration 
      onSwitchToLogin={() => setCurrentView('patient-login')}
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
      onSwitchToDashboard={() => setCurrentView('patient-dashboard')}
    />
  }

  if (currentView === 'therapist-registration') {
    return <TherapistRegistration 
      onSwitchToLogin={() => setCurrentView('therapist-login')}
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
      onSwitchToDashboard={() => setCurrentView('therapist-dashboard')}
    />
  }

  if (currentView === 'patient-login') {
    return <PatientLogin 
      onSwitchToRegister={() => setCurrentView('patient-registration')}
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
      onSwitchToDashboard={() => setCurrentView('patient-dashboard')}
    />
  }

  if (currentView === 'therapist-login') {
    return <TherapistLogin 
      onSwitchToRegister={() => setCurrentView('therapist-registration')}
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
      onSwitchToDashboard={() => setCurrentView('therapist-dashboard')}
    />
  }

  if (currentView === 'patient-dashboard') {
    return <PatientDashboard 
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
    />
  }

  if (currentView === 'therapist-dashboard') {
    return <TherapistDashboard 
      onGetStarted={() => setCurrentView('user-type-selection')}
      onGoHome={() => setCurrentView('landing')}
    />
  }
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={theralinkLogo} alt="TheraLink" className="logo-img" />
            <span className="theralink-text">TheraLink</span>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="btn-primary" onClick={() => setCurrentView('user-type-selection')}>Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Mental Health Journey Starts Here</h1>
          <p>Connect with licensed therapists across Kenya through our secure, compassionate platform. Whether you're taking your first step toward healing or seeking professional growth, TheraLink provides a safe space for mental wellness.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Licensed Therapists</span>
            </div>
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Sessions Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">47</span>
              <span className="stat-label">Counties Served</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setCurrentView('user-type-selection')}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Comprehensive Mental Health Solutions</h2>
          <p className="section-subtitle">Accessible, professional, and culturally sensitive therapy services designed for Kenyans</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <div className="service-icon">💻</div>
              </div>
              <h3>Online Therapy Sessions</h3>
              <p>Connect with therapists from anywhere in Kenya through secure video calls. Perfect for busy schedules, remote areas, or those who prefer privacy at home.</p>
              <ul className="service-features">
                <li>✓ End-to-end encrypted sessions</li>
                <li>✓ Flexible scheduling 7 days a week</li>
                <li>✓ Multi-language support (English, Swahili)</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-image">
                <div className="service-icon">🏥</div>
              </div>
              <h3>In-Person Consultations</h3>
              <p>Meet your therapist face-to-face at our partner clinics across major Kenyan cities. Experience the comfort of traditional therapy in modern, welcoming environments.</p>
              <ul className="service-features">
                <li>✓ Clinics in Nairobi, Mombasa, Kisumu</li>
                <li>✓ Comfortable, private therapy rooms</li>
                <li>✓ Easy parking and accessibility</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-image">
                <div className="service-icon">👥</div>
              </div>
              <h3>Specialized Programs</h3>
              <p>Targeted therapy programs addressing specific mental health challenges common in Kenya, from stress management to trauma recovery.</p>
              <ul className="service-features">
                <li>✓ Anxiety and depression support</li>
                <li>✓ Relationship and family counseling</li>
                <li>✓ Youth and adolescent programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Kenyans Choose TheraLink</h2>
              <p className="section-subtitle">Built specifically for the Kenyan context with deep understanding of our culture and mental health needs</p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">💰</span>
                  <div>
                    <h4>Affordable & Accessible</h4>
                    <p>Therapy sessions from KSh 2,000. We accept NHIF, private insurance, and offer sliding scale fees for students and low-income individuals.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎓</span>
                  <div>
                    <h4>Qualified Kenyan Therapists</h4>
                    <p>All therapists are licensed by the Kenya Association of Professional Counsellors (KAPC) and understand local cultural contexts and challenges.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <div>
                    <h4>Complete Privacy & Security</h4>
                    <p>Your mental health journey is confidential. We use bank-level encryption and comply with Kenya's Data Protection Act 2019.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <div>
                    <h4>Culturally Sensitive Care</h4>
                    <p>Our therapists understand Kenyan family dynamics, workplace stress, and cultural factors that impact mental health.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <div className="image-placeholder">
                <span>🧠💚</span>
                <p>Kenyan Mental Health Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Stories of Healing and Growth</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="avatar">👩</div>
              </div>
              <p>"TheraLink helped me find a therapist who truly understands the pressures of working in Nairobi. The online sessions fit perfectly with my schedule."</p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Marketing Professional, Nairobi</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="avatar">👨</div>
              </div>
              <p>"As a therapist, TheraLink has allowed me to reach clients across Kenya and grow my practice while maintaining the quality of care I'm passionate about."</p>
              <div className="testimonial-author">
                <strong>Dr. James K.</strong>
                <span>Licensed Therapist, Mombasa</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="avatar">👩</div>
              </div>
              <p>"The cultural sensitivity and understanding I received made all the difference. Finally, therapy that feels right for someone like me."</p>
              <div className="testimonial-author">
                <strong>Grace W.</strong>
                <span>University Student, Eldoret</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Mental Health Journey?</h2>
            <p>Join thousands of Kenyans who have found support, healing, and growth through TheraLink. Your mental health matters, and help is just a click away.</p>
            <div className="cta-features">
              <span>✓ Quick 5-minute signup</span>
              <span>✓ Match with therapists in 24 hours</span>
              <span>✓ First consultation available this week</span>
            </div>
            <button className="btn-primary" onClick={() => setCurrentView('user-type-selection')}>Start Your Journey Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TheraLink</h3>
              <p>Making mental health care accessible to all Kenyans.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#">Online Therapy</a>
              <a href="#">In-Person Sessions</a>
              <a href="#">Group Therapy</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Emergency Resources</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TheraLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
