import React from 'react';
import AboutUs from '../components/AboutUs'
import Features from '../components/Features';

import Hero from '../components/Hero';

import News from '../components/News';
import Review from '../components/Review';
import Subhero from '../components/Subhero';
import Testengagement from '../components/Testengagement';

function Home() {
  return (
    <div>
      <Hero />
      <Subhero />
      <AboutUs />
      <Features />
      <Testengagement />
      <Review />
      <News />
    </div>
  )
}

export default Home