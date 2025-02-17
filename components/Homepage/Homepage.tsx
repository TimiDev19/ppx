import React from 'react'
import Hero from './sections/Hero'
import Roadmap from './sections/Roadmap';
import About from './sections/About';

const Homepage = () => {
    return (
        <div className=' h-screen overflow-y-scroll scroll-smooth'>
            <Hero />
            <About />
            {/* <Roadmap /> */}
        </div>
    )
}

export default Homepage;