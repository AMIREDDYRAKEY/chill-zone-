import React from 'react'

const Navbar = () => {
  return (
    <nav>
        {/* logo */}
        <h1>
            chill <span>Zone</span>  🍦 
        </h1>
        <ul>
            <li><a>Menu</a></li>
            <li><a>About</a></li>
            <li><a>Reviews</a></li>
            <li><a>Gallery</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar