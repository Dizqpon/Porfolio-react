import React from 'react';
import pdf from '../img/html-css-online-3pagos.pdf';

export const PdfDescargable = () => {
  return (
    <div className='pdfDescargable'>
      <div className='tarjetaPdfCurr'>
        <a href={pdf} download="html-presupuesto">
        </a>
      </div>
    </div>
  )
}
