import React from 'react';
import destinationStyle from './Destinations.module.css'
import lion from '../../../../assets/images/lion.jpg'
import leopard from '../../../../assets/images/leopard.jpg'
import cheetah from '../../../../assets/images/cheetah.jpg'
import elephant from '../../../../assets/images/elephant.jpg'
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <div className=''>
            <div id='destinations' className='max-w-7xl mx-auto  min-h-screen pt-12 flex items-center flex-col lg:px-0 px-4 '>
                <h2 className='lg:text-3xl text-xl font-bold  text-center'>TOP SAFARI DESTINATIONS IN AFRICA</h2>
                <p className='text-sm my-7 lg:text-center font-medium text-gray-600 text-justify'>Our collection of carefully crafted itineraries gives you the authentic safari experience in Africa. Our carefully curated tour itineraries gives you a starting point and an idea of what your trip could entail. Our luxury safari tours are carefully designed, giving you unlimited options.</p>

                <div className='wrapper grid lg:grid-cols-2 my-12 gap-10  lg:px-12 px-4'>
                    <div className={`${destinationStyle.card} card`}>
                        <img src={lion} alt="lion" />
                        <div className={`${destinationStyle.info} `}>
                            <h1 className='lg:text-3xl text-xl font-bold'>TANZANIA <span className='italic'>safaris</span></h1>
                            <Link to='/tanzania-safaris' className={`${destinationStyle.btn} btn border-none text-white`}>Explore</Link>
                            <p className='invisible text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vitae facere.</p>
                        </div>
                    </div>

                    <div className={`${destinationStyle.card} card`}>
                        <img src={leopard} alt="leopard" />
                        <div className={destinationStyle.info}>
                            <h1 className='lg:text-3xl text-xl font-bold'>KENYA <span className='italic'>safaris</span></h1>
                            <Link to='/kenya-safaris' className={`${destinationStyle.btn} btn border-none text-white`}>Explore</Link>
                            <p className='invisible text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vitae facere.</p>
                        </div>
                    </div>

                    <div className={`${destinationStyle.card} card`}>
                        <img src={cheetah} alt="cheetah" />
                        <div className={destinationStyle.info}>
                            <h1 className='lg:text-3xl text-xl font-bold'>SOUTH AFRICA <span className='italic'>safaris</span></h1>
                            <Link to='/south-africa-safaris' className={`${destinationStyle.btn} btn border-none text-white`}>Explore</Link>
                            <p className='invisible text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vitae facere.</p>
                        </div>
                    </div>

                    <div className={`${destinationStyle.card} card`}>
                        <img src={elephant} alt="elephant" />
                        <div className={destinationStyle.info}>
                            <h1 className='lg:text-3xl text-xl font-bold'>BOTSWAMA <span className='italic'>safaris</span></h1>
                            <Link to='/botswana-safaris' className={`${destinationStyle.btn} btn border - none text - white`}>Explore</Link>
                            <p className='invisible text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vitae facere.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Destinations;