import React, {useState} from 'react'
import imagenWeb1 from '../img/web1.png';
import imagenWeb2 from '../img/web2.png';
import imagenWeb3 from '../img/web3.png';
import imagenWeb4 from '../img/web4.png';
import flechaIzquierda from '../img/izquierda.png';
import flechaDerecha from '../img/derecha.png';


export const TrabajosRealizados = () => {
    const imagenes = [
        {imagenWeb1},
        {imagenWeb2},
        {imagenWeb3},
        {imagenWeb4},
    ];
    const maximoCarrusel = imagenes.length-1;
    const [carruselNum, setCarruselNum] = useState('0');
    const retrocederFoto = () => {
        if (carruselNum > 0) {
            setCarruselNum(Math.max(0, carruselNum - 1));
        } else {
            setCarruselNum(maximoCarrusel);
        }
        
    }
    const avanzarFoto = () => {
        if (carruselNum < maximoCarrusel) {
            setCarruselNum(Math.min(maximoCarrusel, carruselNum + 1));
        } else {
            setCarruselNum(0);
        }
        
    }
    

  return (
    <div className='trabajosRealizados'>
        <button onClick={retrocederFoto}><img src={flechaIzquierda} alt='flechaIzquierda'/></button>
        <img src={Object.values(imagenes[carruselNum])} alt='Carrusel'/>
        <button onClick={avanzarFoto}><img src={flechaDerecha} alt= 'flechaDerecha'/></button>
    </div>
  )
}

