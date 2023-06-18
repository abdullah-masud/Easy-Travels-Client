import React, { useEffect } from 'react';
import Banner from './Banner'
import Options from './Options';
import BookingSection from './BookingSection';
import Destinations from './SafariDestinations/Destinations/Destinations';
import Contact from './Contact';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);
    return (
        <div>
            <Banner />
            <Options />
            <BookingSection />
            <Destinations />
            <Contact />
        </div>
    );
};

export default Home;