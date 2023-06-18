import React, { useEffect } from 'react';

import leopard from '../../../assets/images/leopard.jpg'

const KenyaSafaris = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div className='bg-[#d0bfaa42] lg:py-6 pb-6 '>
            <div className='max-w-7xl mx-auto min-h-screen pt-12 lg:px-0 px-4 '>
                <img className='lg:float-left lg:pr-4 lg:pl-2 lg:w-2/4' src={leopard} alt="" />
                <div className=''>
                    <h1 className='lg:text-3xl lg:text-left text-center text-xl lg:mb-4 lg:my-0 my-4 font-bold'>LUXURY SAFARIS IN KENYA</h1>
                    <p className='text-xs my-6 lg:text-left text-center font-semibold text-gray-600'>GET THE QUINTESSENTIAL SAFARI EXPERIENCE</p>
                    <p className='lg:text-base text-justify lg:px-2'>Kenya is known to the world for her vast golden plains scattered with an abundance of game and the tumultuous stormy skies which break in dramatic force over the savannah. Kenya’s Masai Mara National Reserve is the northern gathering point for thousands of wildebeest before they return south as part of the ‘Great Wildebeest Migration’ – one of the most incredible natural wonders of the world. In addition, Kenya is home to the lions of the famous BBC Big Cat Diaries. There can be no doubt you are in for the quintessential African safari experience with our luxury Kenya tours.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold'>WHAT TO EXPECT FROM LUXURY SAFARI IN KENYA</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Situated in East Africa with a beautiful coastline lapped by the Indian Ocean, Kenya encompasses a diverse range of spectacular landscapes that are home to exceptionally varied fauna and flora. From the rolling grasslands of the magical Masai Mara National Reserve, where the proud and regal Maasai community, dressed in their distinctive red robes welcome you, to the Great Rift Valley’s breath-taking lake system, Kenya leads the way when it comes to diversity and wildlife abundance. And we make sure you get the best experience luxury safaris.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>The open wilderness of Samburu with its rugged ridges and ‘other-worldly’ rock formations creates an ethereal atmosphere, while the spellbinding Amboseli Region, set against the atmospheric backdrop of snow-covered Mount Kilimanjaro, beckons. Amboseli, which is home to hundreds of big-tusked elephants, promises many close encounters with these charismatic giants. Safari-centric Kenya has something to offer each and every visitor.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Explore this incredible region with Magical Africa on guided luxury safari tours to the Great Laikipia Plateau in search of the Big Five – elephant, rhino, buffalo, lion, and leopard. But that’s not all! Brace yourself for multiple sightings of other unusual animals such as Grevy’s zebras and the exquisitely marked wild dog. Visit local Samburu, Laikipia, and Mokogodo Maasai communities that still live life as they did centuries ago. You will be transported back in time to an age when life was still unadulterated by the modern exploits of man. It’s the perfect way to revive and rejuvenate your soul and make a connection with Mother Nature.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>For the experience of a lifetime, you can take to the air on a hot air balloon safari and drift silently over the golden plains of the Masai Mara National Park to witness one of the world’s greatest spectacles, the Great Wildebeest Migration. You can head into the rugged wilderness of the Tsavo National Park with expert guides on walking safaris to look for the famous red elephants of Tsavo, along with Cape buffalo, leopard, and Masai giraffe.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold ml-2'>LOTS MORE TO EXPLORE ON OUR LUXURY KENYA TOURS</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Before or after your safari you can venture east towards the alluring and spellbindingly beautiful northern Kenya coast to experience a different side of Africa. A shimmering ribbon of sandy coastline borders the edge of this rugged safari country, offering swaying coconut palms and luxury lodges nestled amongst mangrove trees to create a tropical slice of heaven.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Kenya conjures up images of lone acacia trees silhouetted against a burning orange horizon that stretches into eternity; of golden grassy plains peppered with games and watched over by giant snow-capped peaks in the hazy blue distance, and dense forests which echo the screeching calls of monkeys and the guttural grunt of lions. Kenya is a country of epic and iconic landforms that stir deep longings for Africa. Experience its wonders by embarking on our luxury safari tour in Kenya.</p>



                </div>
            </div>
        </div>
    );
};

export default KenyaSafaris;