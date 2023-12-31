import React from 'react';
import bgBanner from '../../assets/images/banner2.jpg'
import { Link as LinkScroll } from 'react-scroll';
const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className="flex flex-col items-center w-3/4 lg:flex-row-reverse py-28 lg:py-40 max-w-7xl mx-auto lg:justify-around">
                {/* <img src={heroImage} className="lg:max-w-xl max-w-xs rounded-lg shadow-2xl " alt='' /> */}
                <div className='lg:mr-28'>
                    <h1 className="lg:text-6xl lg:w-full w-80 lg:mt-0 mt-3 text-3xl font-bold text-white">Crafting Tanzania tours
                        <br /> for a lifetime of memories</h1>
                    <p className='my-5 text-lg font-semibold text-gray-600'>Our 35 years of experience will help you plan the right parks, accommodations, and activities.</p>
                    <LinkScroll to='destinations'
                        className="lg:ml-1 relative inline-block px-4 py-2 font-medium group cursor-pointer"
                        smooth="true"
                        duration={500}
                        offset={0}
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-primary"></span>
                        <span className="relative text-[#ffff] group-hover:text-[#ffff]">Explore</span>
                    </LinkScroll>
                </div>
            </div>
        </div >
    );
};

export default Banner;