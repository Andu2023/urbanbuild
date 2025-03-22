import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Topbar from '@/components/Topbar'
import Work from '@/components/Work';
import React from 'react'

const Home = () => {
  return (
   <div>
   <Topbar/>
    <Header/>
    <Hero/>
    <About/>
    <Stats/>
    <Services/>
      <Work/>
      <Testimonials/>
       <Faq/>
      <Contact/>
      <Blog/>
      <Footer/>
   </div>
   
  );
};

export default Home
