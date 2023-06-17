import React from 'react';
import expert from '../../assets/images/expert.jpg'
import { Link } from 'react-router-dom';

const BookingSection = () => {
    return (
        <div className="hero   bg-[#d0bfaa42]">
            <div className="flex flex-col items-center w-3/4 lg:flex-row-reverse py-16  max-w-7xl mx-auto lg:justify-around">
                <img src={expert} className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl " alt='' />
                <div className='lg:mr-28'>
                    <h1 className="lg:text-3xl lg:w-full w-80 lg:mt-0 mt-3 text-xl font-bold text-black">PLAN WITH OUR EXPERTS TODAY</h1>
                    <p className='my-5 text-sm font-semibold text-gray-600'>Our Local Experts have helped thousands of travellers to Plan, Save and Succeed! Reach out to them now</p>
                    <Link to='/booking'
                        type="button"
                        className="font-semibold rounded-md bg-primary px-3 py-2 text-white  uppercase"
                    >
                        GET STARTED

                    </Link>
                </div>
            </div>
        </div >
    );
};

export default BookingSection;