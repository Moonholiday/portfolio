import './styles/styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import '@fontsource/freehand';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <main >
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
  );
}

export default App;
