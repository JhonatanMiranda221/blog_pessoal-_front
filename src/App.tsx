

import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Navbar from "./components/navbar/Navbar"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
      <Home/>
      <Footer/>
      </Routes>
      </div>
      </BrowserRouter>
   </>
   

  )
}

export default App
