import React, {useState} from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuBar } from './MenuBar';

export const Header = () => {
  const [state, setState] = useState(false);

  const openMenuDesplegable = () => {
    setState(true);
  };
  const closetMenuDesplegable = () => {
    setState(false);
  }
  
  return (
    <div id='header' onMouseLeave={closetMenuDesplegable}>
        <h1 className='icono'>D.</h1>
        <FontAwesomeIcon icon={faBars} className='menu' onMouseEnter={openMenuDesplegable} />
        {state === true && <MenuBar/>}
    </div>
  )
}
