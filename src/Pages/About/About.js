import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);
    return (
        <div className='bg-[#d0bfaa42]'>
            <div className='max-w-7xl mx-auto  min-h-screen lg:pb-[150px] flex items-center justify-center flex-col lg:px-0 px-4 lg:pt-0 pt-6'>
                <h2 className='lg:text-3xl text-xl font-bold  text-center'>ABOUT MAGICAL AFRICA</h2>
                <p className='text-sm my-7 lg:text-center font-medium text-gray-600 text-justify'>WHY WE DO WHAT WE DO</p>

                <div>
                    <p className='lg:text-base text-justify lg:px-2 font-serif'>Magical Africa provides fully customized safaris to meet our clients specific needs. Our focus is on the small details that transform a big idea into a reality – combining luxury with adventure on highly personalized trips that explore the full potential of Africa.</p>

                    <p className='lg:text-base text-justify lg:px-2 font-serif my-6'>There is no better way to experience Africa than to have a Magical Africa guide with you in the field, and a team of full-time employees on call, 24 hours a day, 7 days a week, to ensure you have an uninterrupted trip.</p>
                    <p className='lg:text-base text-justify lg:px-2 font-serif my-6'>Every journey Magical Africa designs is connected to a larger philanthropic mission, as Nilesh’s vision is to create a business that does more than just travel. He is dedicated to making a positive difference in Africa and the local communities whose livelihood largely depend on visitors. Nilesh’s passion to build an organization led by staff who truly know Africa, including native-born guides and a curated network of local experts, makes him a prominent leader in the luxury safari industry.</p>
                    <p className='lg:text-base text-justify lg:px-2 font-serif my-6'>Furthermore, Magical Africa has a reputation for providing exceptional and exclusive insider access to Africa. This is based on Nilesh’s lifelong relationships there, often coupled with our itinerary designers’ expert planning skills and dedication to ensure every detail is just right. This provides a seamless and stress-free travel experience for our clients from the moment they step off the plane to the time they return home.</p>

                </div>
            </div>
        </div>
    );
};

export default About;