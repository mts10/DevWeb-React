import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Planos from './pages/planos';
import Detalhes from './pages/detalhes';
import Footer from './components/Footer';
import './index.css';
import Header from './components/Header';

function App() {
  
  return (
    
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about/:name' element={<About />} />
          <Route path='planos' element={<Planos />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<h1>Pagina nao encontrada!</h1>}/>
        </Routes>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
