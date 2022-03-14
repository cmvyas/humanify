import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);
  const mobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            HUMANIFY
          </Link>
         
       
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={mobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/xyz' className='nav-links' onClick={mobileMenu}>
                xyz
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/abc' className='nav-links' onClick={mobileMenu}>
                abc
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ihu' className='nav-links' onClick={mobileMenu}>
                ihu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
