import React from 'react'

const Navbar = () => {
  return (
    <nav>
        {/* logo */}
        <h1>
            chill <span>Zone</span>  🍦 
        </h1>
        <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href="reviews">Reviews</a></li>
            <li><a href="gallery">Gallery</a></li>
            <li><a> Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar