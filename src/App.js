import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CryptoDetail from './pages/CryptoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
      </Routes>
    </Router>
  );
}

export default App; 