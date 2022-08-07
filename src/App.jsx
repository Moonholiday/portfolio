import './styles/styles.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import React, { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import More from './sections/More';
import '@fontsource/freehand';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const containerRef = useRef(null)
  return (

    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          multiplier: 0.7,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/more' element={<More/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
