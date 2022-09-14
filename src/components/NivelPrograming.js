import React from 'react';
import { FaMehBlank } from "react-icons/fa";
import { FaLaughBeam } from "react-icons/fa";
import logoHtml from '../img/logo-html.png';
import logoCss from '../img/logo-css.png';
import logoJavaScript from '../img/logo-javascript.png';
import logoNodeJs from '../img/logo-node.png';
import logoReact from '../img/logo-react.png';

export const NivelPrograming = () => {
  
  return (
    <div className='nivelProgramacion' id='nivPro'>
      
        <img src={logoHtml} alt='logo html'/>
        {/* <FaLaughBeam/><br/><FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/> */}


        <img src={logoCss} alt='logo css'/>

        {/* <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/> */}

        <img src={logoJavaScript} alt='logo javascript'/>
        {/* <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/> */}

        <img src={logoNodeJs} alt= 'logo nodejs'/>

        {/* <FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/><FaMehBlank/> */}
 

        <img src={logoReact} alt= 'logo react'/>

        {/* <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/> */}

    </div>
  )
}
