import React, { useEffect } from 'react';
import lion from '../../../assets/images/lion.jpg'

const TanzaniaSafaris = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div className='bg-[#d0bfaa42] lg:py-6 pb-6 '>
            <div className='max-w-7xl mx-auto min-h-screen pt-12 lg:px-0 px-4 '>
                <img className='lg:float-left lg:pr-4 lg:pl-2 lg:w-2/4' src={lion} alt="" />
                <div className=''>
                    <h1 className='lg:text-3xl lg:text-left text-center text-xl lg:mb-4 lg:my-0 my-4 font-bold'>LUXURY SAFARIS IN TANZANIA</h1>
                    <p className='text-xs my-6 lg:text-left text-center font-semibold text-gray-600'>AN UNFORGETTABLE EXPERIENCE IN THE WILDLIFE PARADISE</p>
                    <p className='lg:text-base text-justify lg:px-2'>Breathtaking natural beauty, incredible wildlife, fascinating culture and friendly people – Tanzania has it all! From the vast rolling plains of the Serengeti and the lush oasis of the Ngorongoro Crater to the pristine, footprint-free beaches of Zanzibar and the majestic, snow-capped peak of Mt Kilimanjaro, our carefully curated private Tanzania safari tours offer everything the discerning traveler seeks. This is Africa at its majestic best!</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold'>WHAT OUR PRIVATE SAFARI TOURS IN TANZANIA INCLUDE</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>When you visit Tanzania you will experience a unique and extraordinary African safari destination. Here you can explore by boat, vehicle or on foot and enjoy a range of exhilarating adventurous experiences. Imagine tracking the Big Five on a luxury walking safari with expert guides, or silently floating above the plains on an once-in-a-lifetime hot-air balloon adventure. Pre and post-safari options include snorkeling in the crystal-clear waters and relaxing on the palm-fringed beaches of the magical island of Zanzibar.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Stand on the edge of the ancient Ngorongoro Crater before descending into its utopian ‘Garden of Eden’ which encompasses one of the most beautiful and richly diverse wildlife oases on earth. That’s what you get to experience during our Ngorongoro crater safari. Venture out on day game drives as you track herds of giant-tusked elephants or seek an exciting glimpse of the critically endangered black rhino. Watch majestic black-maned lions stalk the grasslands for unsuspecting prey and traverse the beautiful Lerai forest in search of the elusive leopard.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Soak up the picture-perfect ‘Out of Africa’ scenes that only our Serengeti National Park safari tours can offer. Gaze awestruck at the endless plains of rippling golden grasses surrounded by hazy blue hills and scattered with thorny, flat-topped acacia trees. These magnificent rolling plains are home to the world’s greatest concentration of wildlife. Take to the air on a hot air balloon safari to enjoy breath-taking views of mega-herds of wildebeests cutting vast swathes across the savannah. Accompanying them, herds of zebra and antelope spar energetically with each other, while stately giraffes lope elegantly between them.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Follow experienced guides into the bush on foot to get really up close to wildlife on exciting walking safaris. A less strenuous day could include drifting languidly in traditional boats around the shimmering lakes and streams of the Selous Game Reserve. Here you can safely admire huge crocodiles, wallowing hippos and an incredible array of birdlife.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold ml-2'>MORE TO EXPLORE ON YOUR LUXURY SAFARI IN TANZANIA</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Before you leave Tanzania, visit the Olduvai Gorge, one of the most important paleoanthropological sites in the world. Here you will walk in the footsteps of some of the first human beings who inhabited the earth. The rough and remote Mahale Mountains whose dense, lush tropical forests are home to the chimpanzee also beckon visitors. Spend a few magical days of chimpanzee trekking in the Mahale Mountains Park, a world-renowned chimpanzee sanctuary and one of the best places in the world to see man’s closest relatives.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>To stand on the roof of Africa, head for the slopes of mighty Mt. Kilimanjaro, which stands sentry over the immense plains of Tanzania like a lone soldier shrouded by a cloak of cloud. Serving as a metaphor for the unrivaled beauty of East Africa, and hailed as the ‘Mountain of Light,’ Mt. Kilimanjaro’s snowy peaks have long been a beacon for trekkers and adventurers from around the world.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Stay in luxury safari camps and lodges, explore the rich and diverse landscapes on guided game drives and walking safaris, dine on outstanding local cuisine, and experience Tanzania like never before on a tailor-made private safari with Magical Africa.</p>


                </div>
            </div>
        </div>
    );
};

export default TanzaniaSafaris;