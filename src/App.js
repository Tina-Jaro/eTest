import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />


      </BrowserRouter>

    </div>

  );
}

export default App;
