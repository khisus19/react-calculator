import React from 'react';
import freeCodeCampLogo from '../img/fcc_primary_large.svg';
import '../style/Logo.css'


const Logo = () => {
    return (
        <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Freecodecamp logo' />
      </div>
    )
}

export default Logo;