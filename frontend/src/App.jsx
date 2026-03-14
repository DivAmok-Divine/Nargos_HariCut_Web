import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import ScrollToTop from './components/ui/ScrollToTop';
import UnderConstruction from './components/layout/UnderConstruction';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<UnderConstruction pageName="Services" />} />
          <Route path="/portfolio" element={<UnderConstruction pageName="Portfolio" />} />
          <Route path="/contact" element={<UnderConstruction pageName="Contact" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
