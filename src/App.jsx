import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/InicioSe/Login';
import Registrar from './components/Registro/Registrar';
import Pagina from './components/Pagina/Pagina';
import About from './components/Quienes_Somos/About';

function App() {
  const [count, setCount] = useState(0) 

  return (
    <Routes>
      <Route path='/' element={<Pagina></Pagina>}></Route>
      <Route path='/Iniciar' element={<Login></Login>}></Route>
      <Route path='/Registro' element={<Registrar></Registrar>}></Route>
      <Route path='/QuienesSomos' element={<About></About>}></Route>
    </Routes>
  );
}

export default App
