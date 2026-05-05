import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop'>
        {/* logo */}
        <h1>
            chill <span>Zone</span>  🍦 
        </h1>
        <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href="reviews">Reviews</a></li>
            <li><a href="gallery">Gallery</a></li>
            <li><a href="contact"> Contact</a></li>
        </ul>
        {/* CTA */}
        <a>
            order Now →
        </a>
    </nav>
  )
}

export default Navbar