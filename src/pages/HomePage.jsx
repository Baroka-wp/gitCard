import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import CreateList from '../components/CreateList';
import Testimonials from '../components/Testimonials';

function HomePage() {
    return (
        <>
            <HeroSection />
            <HowItWorks />
            <CreateList />
            <Testimonials />
        </>
    );
}

export default HomePage;