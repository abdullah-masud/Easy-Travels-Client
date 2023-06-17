import React from 'react';
import Banner from './Banner'
import Options from './Options';
import BookingSection from './BookingSection';
import Destinations from './SafariDestinations/Destinations/Destinations';
const Home = () => {
    return (
        <div>
            <Banner />
            <Options />
            <BookingSection />
            <Destinations />
        </div>
    );
};

export default Home;