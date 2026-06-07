import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <a href="/" aria-label="DIDI COUTURE home">
          <span className="logo-text">DIDI COUTURE</span>
        </a>
      </div>

      <button className="site-header__menu-toggle" aria-label="Open menu">
        <span className="menu-bar"></span>
      </button>

      <nav className="site-header__nav">
        <a href="/collections/all" className="nav-link">SHOP NOW</a>
        <a href="#cart" className="nav-link">CART</a>
      </nav>
    </header>
  )
}

export default Header
