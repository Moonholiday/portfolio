import React from 'react';

function Contact() {
  return (
    <div className='m-10 h-screen'>
      <h1 className='text-2xl mx-8 my-6'>Contact me</h1>
      <div id='contact'>
        <form className='m-4 flex flex-col'>
          <label className='mx-6' for="fname">First Name</label>
          <input className='p-2 m-6 bg-gray-100' type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label className='mx-6' for="lname">Last Name</label>
          <input className='p-2 m-6 bg-gray-100' type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <button className='m-6 bg-red-200 py-2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
