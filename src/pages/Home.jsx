import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Partners />
            <Services />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
