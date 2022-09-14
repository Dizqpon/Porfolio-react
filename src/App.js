import './App.css';
import { Formacion } from './components/Formacion';
import { Header } from './components/Header';
import { InfoInteres } from './components/InfoInteres';
import { Nav } from './components/Nav';
import { NivelPrograming } from './components/NivelPrograming';
import { PdfDescargable } from './components/PdfDescargable';
import { TrabajosRealizados } from './components/TrabajosRealizados';

function App() {

  return (
    <div className='fondo'>
      <div className="App">
        <div>
        <Header/>
        </div>
        <div>
          <Nav/>
        </div>
        <div>
          <InfoInteres/>
        </div>
        <div>
          <NivelPrograming/>
        </div>
        <div>
          <PdfDescargable/>
        </div>
        <div>
          <TrabajosRealizados/>
        </div>
        <div>
          <Formacion/>
        </div>
      </div>
    </div>
  );
}

export default App;
