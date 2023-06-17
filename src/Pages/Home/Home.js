import React from 'react';
import Banner from './Banner'
import Options from './Options';
import BookingSection from './BookingSection';
import Destinations from './SafariDestinations/Destinations/Destinations';
import Contact from './Contact';
const Home = () => {
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