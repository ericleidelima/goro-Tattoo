//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css'
import Home from "./pages/Home";
import Curiosidades from './pages/Curiosidades';

import Galeria from './pages/Galeria';
import EstilosDeTattoo from './pages/EstilosDeTattoo';
import Modelo from './pages/Modelo';
import Espelho from './hooks/Espelho';

import Regras from './pages/R.project';

function App() {
  //const [count, setCount] = useState(0)

  return (
     <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Curiosidades' element={<Curiosidades />} />

            <Route path='/pages/EstilosDeTattoo' element={<EstilosDeTattoo />} />
            <Route path='/Galeria' element={<Galeria />} />
            <Route path='/pages/Modelo' element={<Modelo />} />

            <Route path='/hooks/Espelho' element={<Espelho />} />

            <Route path='./pages/Regras' element={<Regras />} />

            <Route path='*' element={<h1>Not Font</h1>} />
          </Routes>
        </BrowserRouter>
     </div>
  )
}

export default App
