import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className='bg-zinc-900'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fahim | Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Fahim Portfolio" />
      </Helmet>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
