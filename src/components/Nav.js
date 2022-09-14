import React from 'react';
import githubImage from '../img/logo-github.png';
import linkedingImage from '../img/logo-linkeding1.png';
export const Nav = () => {
  
  return (
    <div className='nav' id='nav'>
      <div className='nav'>
      <a href='https://github.com/Dizqpon'><img src={githubImage} alt='Enlace Github'/></a>
      </div>
      <div className='nav'>
      <a href='https://www.linkedin.com/in/david-izquierdo-ponce-codeku/'><img src={linkedingImage} alt='Enlace Linkeding'/></a>
      </div>
    </div>
  )
}
