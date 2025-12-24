import theralinkLogo from '../assets/TheraLink.png'

function Header({ onGetStarted, onGoHome }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={onGoHome} style={{ cursor: 'pointer' }}>
          <img src={theralinkLogo} alt="TheraLink" className="logo-img" />
          <span className="theralink-text">TheraLink</span>
        </div>
        <nav className="nav">
          <a href="#services" onClick={onGoHome}>Services</a>
          <a href="#about" onClick={onGoHome}>About</a>
          <a href="#contact" onClick={onGoHome}>Contact</a>
          <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
        </nav>
      </div>
    </header>
  )
}

export default Header