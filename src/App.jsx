import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>TheraLink</h2>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mental Health Support for Every Kenyan</h1>
          <p>Connect with licensed therapists through secure online sessions or in-person visits. Your mental wellness journey starts here.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Find a Therapist</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>How We Help</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Online Therapy</h3>
              <p>Secure video sessions from the comfort of your home. Flexible scheduling that fits your life.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>In-Person Sessions</h3>
              <p>Face-to-face therapy at our partner clinics across Kenya. Professional, private environments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Local Expertise</h3>
              <p>Therapists who understand Kenyan culture and can communicate in your preferred language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Choose TheraLink?</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <div>
                    <h4>Affordable Care</h4>
                    <p>Therapy sessions starting from KSh 2,000. Insurance accepted.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <div>
                    <h4>Licensed Professionals</h4>
                    <p>All therapists are certified and registered with relevant Kenyan boards.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <div>
                    <h4>Complete Privacy</h4>
                    <p>End-to-end encrypted sessions and strict confidentiality protocols.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Mental Health Journey?</h2>
            <p>Join thousands of Kenyans who have found support through TheraLink</p>
            <button className="btn-primary">Book Your First Session</button>
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
