import React from 'react'
import Hero from './sections/Hero'
import Roadmap from './sections/Roadmap';

const Homepage = () => {
    return (
        <div className=' h-screen overflow-y-scroll scroll-smooth'>
            <Hero />
            <Roadmap />
        </div>
    )
}

export default Homepage;