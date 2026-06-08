import './Header.css'

function Header({ onCartOpen, cartCount }) {
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
        <a href="#collections" className="nav-link">SHOP NOW</a>
        <button className="nav-link cart-btn" onClick={onCartOpen} aria-label="Open cart">
          CART{cartCount > 0 && <span className="cart-btn__count">{cartCount}</span>}
        </button>
      </nav>
    </header>
  )
}

export default Header
