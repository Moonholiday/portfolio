import React from 'react';
import '../styles/styles.css'

function About () {
  return (
    <div id='about' className='sections' data-scroll-section>
      <div className='about'>
        <h1>About me</h1>
        <span>Hi I am Sakshyam, Im a very tech enthusiastic person with growing motivation to learn.</span>
        <div className='interest'>
          <div>
            <h3>Machine Learning</h3>
            <p>I have worked with researchers to apply machine learning algorithms.</p>
          </div>
          <div>
            <h3>Cloud Computing</h3>
            <p>I am familiar with various cloud computing technologies.</p>
          </div>
          <div>
            <h3>Fullstack</h3>
            <p>I regularly implement new fullstack technlogies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
