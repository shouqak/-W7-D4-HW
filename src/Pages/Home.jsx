import React, { useState } from 'react'
import Char from '../Component/Char'

import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Hero from '../Component/Hero';

function Home() {
   

  return (
   <div className="bg-amber-200">
<Navbar/>
<Hero/>
<Char/>
<Footer/>
      <Toaster /> 
    </div>
  )
}

export default Home