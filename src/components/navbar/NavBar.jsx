import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'



function NavBar() {

  const [sticky , setSticky] = useState(false)
  useEffect(()=>{
       window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true): setSticky(false);
       })
  }, [])

  return (
    <nav className={ `container ${sticky? 'dark-nav' : ''}` }>
        <h1 className='logo'>DigiWorld</h1>
        <ul>
          
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            
            <li><Link to='services' smooth={true} offset={-240} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-130} duration={500}>About</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
