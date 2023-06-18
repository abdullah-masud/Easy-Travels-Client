import React, { useEffect } from 'react';
import cheetah from '../../../assets/images/cheetah.jpg'

const SouthAfricaSafaris = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div className='bg-[#d0bfaa42] lg:py-6 pb-6 '>
            <div className='max-w-7xl mx-auto min-h-screen pt-12 lg:px-0 px-4 '>
                <img className='lg:float-left lg:pr-4 lg:pl-2 lg:w-2/4' src={cheetah} alt="" />
                <div className=''>
                    <h1 className='lg:text-3xl lg:text-left text-center text-xl lg:mb-4 lg:my-0 my-4 font-bold'>LUXURY SAFARI ACROSS SOUTH AFRICA</h1>
                    <p className='text-xs my-6 lg:text-left text-center font-semibold text-gray-600'>EXPLORE THE BEAUTY OF RAINBOW NATION</p>
                    <p className='lg:text-base text-justify lg:px-2'>Breath-taking natural beauty and incredible wildlife, exhilarating adventures and diverse experiences, multicultural heritage, and fantastic weather – South Africa has it all! From palm-lined powder-white beaches lapped by two different oceans to the rugged, lush green mountains, vast expanses of arid desert, and star-studded night skies, this fascinating country with its diverse beauty has something for everyone. Whether you are looking for a relaxing beachside break, or once-in-a-lifetime safari experience or a fine food and wine fiesta, South Africa fits the bill and will leave you hankering for more.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold'>SOUTH AFRICA SAFARI – PLACES YOU MUST VISIT</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>South Africa is a powerhouse when it comes to wildlife diversity and offers safaris in a variety of outstanding national parks and reserves that are home to a plethora of wildlife. Many of South Africa’s game reserves are still home to all of the Big Five, and sightings of lion, leopard, buffalo, elephant and the now critically endangered rhino are common.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Coastal waters and marine reserves offer ring-side seats to view southern right whales, cape fur seals, and great white sharks. Parks vary in size from the vast world-renowned Kruger National Park to the smaller, equally amazing Table Mountain Park and Cape Point Reserve, urban national parks which are home to amazing floral abundance, mischievous baboons and many small mammals. We have multiple itineraries that cover the Kruger National Park, allowing you to explore the diverse flora and fauna in their natural habitat.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>South Africa’s spectacular natural beauty and ever-changing scenery create the perfect backdrop for a wide array of adventurous activities. From bungee jumping off the Bloukrans Bridge on the Garden Route and abseiling down the side of Cape Town’s iconic Table Mountain to shark cage diving off the coast, there is an adventure waiting for you to get the adrenaline pumping. For those who are looking for something less adrenaline-packed, there is camping or rock-climbing in the craggy Cederberg Mountains, surfing off the Eastern Cape coast, hiking in the magnificent Blyde River Canyon, and guided day walks in the semi-desert Karoo.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>After enjoying the Kruger National Park safari, you can take a drive up the southern Cape’s glorious Garden Route, whose rugged coastline is fringed with old-growth forests, picturesque lagoons and tranquil lakes, white sandy beaches, and mist-covered mountains. The pretty seaside villages of Hermanus and Stilbaai welcome pods of Southern Right Whales who come to calve and play. The fertile valleys of the Outeniqua Mountains offer an array of outdoor adventures and recreation including hiking and mountain biking, canyoneering, and camping.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold ml-2'>EXPERIENCE THE DIVERSE CULTURAL LANDSCAPE OF SOUTH AFRICA</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>You can head down to the Western Cape to experience the cosmopolitan lifestyle of Cape Town and spend time soaking up the sun on the stunning Blue Flag beaches of Camps Bay and Clifton. Take the rotating cable car to the top of the iconic Table Mountain to soak up the spectacular 360⁰ panoramic views of the city below, or climb Lion’s Head in the early morning to watch an unforgettable sunrise. Explore the misty, patch-work valleys of the Cape Winelands and taste some of the world’s finest wines or head to the quaint Francophile village of Franschhoek, which is nestled in a spectacular valley and is widely acknowledged to be the culinary capital of the country.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Come and experience this incredible land for yourself. Meet friendly locals from widely diverging cultures who make up our unique “Rainbow Nation”. See a kaleidoscope of picture-postcard vistas and admire unique flora and fauna. Track exceptional wildlife on unforgettable safari experiences, and savor award-winning food and wines. A South African experience will leave an indelible mark on the soul and unforgettable memories in your heart. Hailed as ‘the world in one country,’ South Africa most certainly lives up to the title.</p>



                </div>
            </div>
        </div>
    );
};

export default SouthAfricaSafaris;