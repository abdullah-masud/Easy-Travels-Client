import React from 'react';

import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import { CgAirplane } from 'react-icons/cg';

const Options = () => {
    return (
        <div className='mx-auto max-w-7xl gap-2 py-8 lg:flex px-4 '>
            <div className='flex gap-x-3 lg:mb-0 mb-4 '>
                <BsFillCalendarCheckFill className='text-primary text-4xl' />
                <div>
                    <h2 className='text-sm font-semibold'>WHEN TO GO</h2>
                    <h2 className='text-sm'>Find out when to climb Kili and go on Tanzania Safari</h2>
                </div>
            </div>
            <div className='flex   gap-x-3 lg:mb-0 mb-4 '>
                <AiOutlineSearch className='text-primary text-4xl' />
                <div>
                    <h2 className='text-sm font-semibold'>WHERE TO GO</h2>
                    <h2 className='text-sm'>Let’s go! Explore Tanzania Parks, Mountains, Islands and more
                    </h2>
                </div>
            </div>
            <div className='flex   gap-x-3 lg:mb-0 mb-4 '>
                <FaBed className='text-primary text-4xl' />
                <div>
                    <h2 className='text-sm font-semibold'>WHERE TO STAY</h2>
                    <h2 className='text-sm'>Let us help you find the perfect Hotel in Tanzania</h2>
                </div>
            </div>
            <div className='flex   gap-x-3  lg:ml-3'>
                <CgAirplane className='text-primary text-4xl' />
                <div>
                    <h2 className='text-sm font-semibold'>TRAVEL ADVICE</h2>
                    <h2 className='text-sm'>Read Top Tanzania Travel Advice Before You Go</h2>
                </div>
            </div>





        </div>
    );
};

export default Options;