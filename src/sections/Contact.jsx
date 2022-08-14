import React from 'react';
import '../styles/styles.css'

function Contact () {
  return (
    <div  className='sections' data-scroll-section>
      <h1>Contact me</h1>
      <div id='contact'>
        <form >
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
