import React from 'react';
import pdf from '../img/curriculum.pdf';

export const PdfDescargable = () => {
  return (
    <div className='container'>
    <div className='containerPdf'>
      <a href={pdf} download="html-presupuesto" className="button">
        <ul>
          <li>Download</li>
          <li>Downloading</li>
          <li>Open File</li>
        </ul>
        <div>
          <svg viewBox="0 0 24 24"></svg>
        </div>
      </a>
      </div>
      <div className='tarjetaPdfCurr'>
        <a href={pdf} download="html-presupuesto">
        </a>
      </div>
      </div>
  )
}
