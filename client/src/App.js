import { Routes, Route } from 'react-router-dom';

//importar los componentes que necesitan renderizarse en diferentes rutas
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
