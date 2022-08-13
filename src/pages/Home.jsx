
import React from 'react';
import '../styles/styles.css';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
function Home () {


  return (
    <div id='home' className='sections'>
      <div className='container'>
        <section> 
          <h1> Sakshyam Shrestha </h1>
          <span>Machine Learning. Cybersecurity. Python. Fullstack</span>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Contact/>
        </section>
      </div>
    </div>
  )
}

export default Home;
