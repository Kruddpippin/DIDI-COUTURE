import { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  {
    id: '01',
    image: '/hero1.jpg',
    cta: 'Shop Now',
    title: 'Explore our First Collection',
    href: '#collections',
  },
  {
    id: '02',
    image: '/hero2.jpg',
    cta: 'Our Story',
    title: 'A modern expression of heritage',
    href: '/pages/about',
  },
  {
    id: '03',
    image: '/hero3.jpg',
    cta: 'Community',
    title: 'Rooted in culture. Worn with pride.',
    href: 'https://www.instagram.com/',
  },
  {
    id: '04',
    image: '/hero4.jpg',
    cta: 'Shop Now',
    title: 'Crafted for those who wear their identity.',
    href: '#collections',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [activeSlide])

  return (
    <section className="hero">
      <div className="hero__slides">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero__slide ${idx === activeSlide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="hero__content container">
              <div className="hero__cta-block">
                <a href={slide.href} className="hero__cta">
                  <span className="hero__cta-label">{slide.cta}</span>
                </a>
                <h1 className="hero__title">{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom pagination */}
      <div className="hero__pagination">
        <div className="hero__pagination-inner container">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              className={`hero__pagination-item ${idx === activeSlide ? 'is-active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${slide.id}`}
            >
              <span className="serif">{slide.id}</span>
            </button>
          ))}
          <span className="hero__scroll serif">Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
