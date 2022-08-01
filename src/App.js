import './styles/styles.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import React, { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import More from './sections/More';
import '@fontsource/freehand';

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
        <Navbar/>
        <About/>
        <Contact/>
        <Projects/>
        <More/>
        <Footer/>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
