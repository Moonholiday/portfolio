import './styles/styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './pages/Projects';
import '@fontsource/freehand';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <main >
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
  );
}

export default App;
