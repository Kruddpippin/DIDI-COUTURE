import { useState, useRef } from 'react'
import './FeaturedProducts.css'

const products = [
  {
    id: 'dc-kaftan-navy',
    title: '[PRE_ORDER] DIDI COUTURE Kaftan [Navy]',
    code: 'DC_SS26_KFT_N',
    price: 'R 1,200.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/ODD_Navy_Back.jpg?v=1778054735',
    hover: 'https://oddritualgolf.com/cdn/shop/files/ODD_Navy.jpg?v=1778054734',
    href: '/products/didi-couture-kaftan-navy',
  },
  {
    id: 'dc-kaftan-white',
    title: '[PRE_ORDER] DIDI COUTURE Kaftan [White]',
    code: 'DC_SS26_KFT_W',
    price: 'R 1,200.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/ODD_WHITE_Back.jpg?v=1778056523',
    hover: 'https://oddritualgolf.com/cdn/shop/files/ODD_WHITE.jpg?v=1778056523',
    href: '/products/didi-couture-kaftan-white',
  },
  {
    id: 'dc-cord-cap-maroon',
    title: '[PRE_ORDER] DIDI COUTURE Corduroy Cap [Maroon]',
    code: 'DC_SS26_COR_M',
    price: 'R 850.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/CORDCAP_Maroon_F_d09ad2d0-7205-410f-b261-6eaa0be55862.jpg?v=1778057661',
    hover: 'https://oddritualgolf.com/cdn/shop/files/CORDCAP_Maroon_S.jpg?v=1778057505',
    href: '/products/didi-couture-corduroy-cap-maroon',
  },
  {
    id: 'dc-monogram-tee-black',
    title: 'DC Monogram Tee [Black]',
    code: 'DC_MNG_T_B',
    price: 'R 1,000.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/T_BLK_MNG_B.jpg?v=1769258644',
    hover: 'https://oddritualgolf.com/cdn/shop/files/DSC08485.jpg?v=1769261658',
    href: '/products/dc-monogram-tee-black',
  },
  {
    id: 'dc-classic-tee-white',
    title: 'DIDI COUTURE Classic Tee [White]',
    code: 'DC_CLS_T_W',
    price: 'R 1,000.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/T_WHT_BRD_B.jpg?v=1769259626',
    hover: 'https://oddritualgolf.com/cdn/shop/files/DSC08398.jpg?v=1769262035',
    href: '/products/didi-couture-classic-tee-white',
  },
  {
    id: 'dc-cap-navy',
    title: 'DIDI COUTURE Cap [Navy]',
    code: 'DC_CAP_N',
    price: 'R 750.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/DSC08915_4734c6f8-8d31-4399-949f-8c4565a6f4fc.jpg?v=1769257141',
    hover: 'https://oddritualgolf.com/cdn/shop/files/DSC08353.jpg?v=1769260740',
    href: '/products/didi-couture-cap-navy',
  },
  {
    id: 'dc-monogram-cap',
    title: 'DC Monogram Cap [White/Brown]',
    code: 'DC_MNG_CAP_WB',
    price: 'R 750.00',
    image: 'https://oddritualgolf.com/cdn/shop/files/DSC08933.jpg?v=1769257752',
    hover: 'https://oddritualgolf.com/cdn/shop/files/DSC08829.jpg?v=1769261491',
    href: '/products/dc-monogram-cap-white-brown',
  },
]

function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState(null)
  const trackRef = useRef(null)

  return (
    <section className="featured section">
      <div className="featured__label">
        <span>( FEATURED COLLECTION )</span>
      </div>

      <div className="featured__track" ref={trackRef}>
        {products.map((product) => (
          <a
            key={product.id}
            href={product.href}
            className="product-card"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="product-card__image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className={`product-card__image ${hoveredId === product.id ? 'is-hidden' : ''}`}
                loading="lazy"
              />
              <img
                src={product.hover}
                alt=""
                className={`product-card__image product-card__image--hover ${hoveredId === product.id ? 'is-visible' : ''}`}
                loading="lazy"
                aria-hidden="true"
              />
            </div>
            <div className={`product-card__info ${hoveredId === product.id ? 'is-visible' : ''}`}>
              <div className="product-card__top">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__code">({product.code})</p>
              </div>
              <div className="product-card__bottom">
                <span className="product-card__price">{product.price}</span>
                <span className="product-card__arrow" aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="featured__view-all">
        <a href="/collections/all" className="view-all-btn">
          <span className="bracket">[</span>
          <span>VIEW ALL COLLECTIONS</span>
          <span className="bracket">]</span>
        </a>
      </div>
    </section>
  )
}

export default FeaturedProducts
