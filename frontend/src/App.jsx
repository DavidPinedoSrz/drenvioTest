import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Articulos from './pages/Articulos';
import Subida from './pages/Subida';

function App() {
  return (
    <div className="container">
     <Router>
      <nav>
        <Link to="/">Artículos</Link> | <Link to="/subida">Subida</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Articulos />} />
        <Route path="/subida" element={<Subida />} />
      </Routes>
     </Router>
    </div>  
  );
}

export default App;