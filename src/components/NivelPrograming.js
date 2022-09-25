import React from 'react';
import { FaMehBlank } from "react-icons/fa";
import { FaLaughBeam } from "react-icons/fa";
import logoHtml from '../img/logo-html.png';
import logoCss from '../img/logo-css.png';
import logoJavaScript from '../img/logo-javascript.png';
import logoNodeJs from '../img/logo-node.png';
import logoReact from '../img/logo-react.png';
import logoJava from '../img/logo-java.png';

export const NivelPrograming = () => {
  
  return (
    <div id='nivPro'>
      <div className='nivelProgramacion' >
        <img src={logoHtml} alt='logo html'/>

        <img src={logoCss} alt='logo css'/>

        <img src={logoJavaScript} alt='logo javascript'/>
        
        <img src={logoNodeJs} alt= 'logo nodejs'/>

        <img src={logoReact} alt= 'logo react'/> 

        <img src={logoJava} alt= 'logo java' /> 
      </div>
      <div className='contenedorNivel'>
    <div className='inputNivel html'>
      <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/>
    </div>
    <div className='inputNivel css'>
      <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/>
    </div>
    <div className='inputNivel javaScript'>
      <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/>
    </div>
    <div className='inputNivel nodeJs'>
      <FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/><FaMehBlank/>
    </div>
    <div className='inputNivel reactJs'>
      <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/>
    </div>
    <div className='inputNivel java'>
      <FaLaughBeam/><FaLaughBeam/><FaLaughBeam/><FaMehBlank/><FaMehBlank/>
    </div>
    </div>
    </div>
  )
}
