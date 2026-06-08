import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProducts from './components/FeaturedProducts'
import ThreeSections from './components/ThreeSections'
import MadeLocally from './components/MadeLocally'
import Gallery from './components/Gallery'
import MoreThanFabric from './components/MoreThanFabric'
import Community from './components/Community'
import Footer from './components/Footer'
import CartPage from './components/CartPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id)
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty } : item))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="app">
      <Header
        onCartOpen={() => setCartOpen(true)}
        cartCount={cartCount}
      />
      <main>
        <Hero />
        <About />
        <FeaturedProducts onAddToCart={addToCart} />
        <ThreeSections />
        <MadeLocally />
        <Gallery />
        <MoreThanFabric />
        <Community />
      </main>
      <Footer />
      {cartOpen && (
        <CartPage
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}
    </div>
  )
}

export default App
