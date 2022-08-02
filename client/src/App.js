import { Routes, Route } from 'react-router-dom';
//importar los componentes que necesitan renderizarse en diferentes rutas
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Details from './components/Details/Details.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
