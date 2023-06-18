import React, { useEffect } from 'react';
import elephant from '../../../assets/images/elephant.jpg'

const BotswanaSafaris = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div className='bg-[#d0bfaa42] lg:py-6 pb-6 '>
            <div className='max-w-7xl mx-auto min-h-screen pt-12 lg:px-0 px-4 '>
                <img className='lg:float-left lg:pr-4 lg:pl-2 lg:w-2/4' src={elephant} alt="elephant" />
                <div className=''>
                    <h1 className='lg:text-3xl lg:text-left text-center text-xl lg:mb-4 lg:my-0 my-4 font-bold'>BOTSWANA LUXURY SAFARI</h1>
                    <p className='text-xs my-6 lg:text-left text-center font-semibold text-gray-600'>EXPERIENCE THE ENIGMA OF AFRICA LIKE NEVER BEFORE</p>
                    <p className='lg:text-base text-justify lg:px-2'>Botswana is one of Africa’s top tourist destinations. It is home to the magnificent Okavango Delta, which is a fascinating natural marvel. Sprawled throughout the landlocked country are world-renowned national parks and some of the most abundant wildlife in Africa. Custodian of extraordinary wildlife-packed destinations like the Chobe National Park, Moremi, the Okavango Delta and the Kalahari Transfrontier Park, this easy-going, friendly country blends exceptional game viewing with world-class accommodation and hassle-free logistics, which you can experience through our carefully curated luxury safaris in Botswana.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold'>BOTSWANA LUXURY SAFARI HOTSPOTS</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Botswana is home to the San people, hunter-gatherers who have been living in the region for more than 70,000 years, bringing rich cultural interactions to your safari. The perfect destination for discerning safari travelers and wildlife aficionados, the country offers some of the best safari and wildlife experiences in the world. The Okavango Delta, Moremi, and Chobe are Botswana’s most popular and most visited safari parks, providing exceptional year-round wildlife viewing.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Moremi Wildlife Reserve and Chobe National Park are home to almost all species of southern African mammals, as well as the world’s largest concentration of elephants, numbering at least 100,000 at any time. While on our luxury safaris in Botswana you can enjoy eclectic and cozy accommodations in a variety of styles, ranging from five-star hotels, luxurious safari camps and lodges, to beautiful guesthouses and tented safari camps in the middle of the wilderness.</p>

                    <p className='lg:text-base text-justify lg:px-2 my-6'>Experience the breath-taking beauty of the Okavango Delta and other parts of this wildlife Mecca with Magical Africa on tailor-made luxury safaris and exclusive adventures. Explore the watery wonderland of the Okavango Delta on a mokoro (dugout canoe) safari where expert guides will lead you through the glistening streams where wallowing hippos snort and yawn while enormous crocodiles watch from the banks. See the magical tapestry of the wetlands and the endless game-filled plains from a different perspective on a hot air balloon or a fly-in safari.</p>

                    <p className='lg:text-base text-justify lg:px-2 my-6'>Another exciting option includes following professional trackers and wildlife guides through the dense undergrowth on guided walking safaris in search of the Big Five. At the end of another perfect day in Africa, you can luxuriate in style at one of the five-star lodges and safari camps which are dotted around the Delta. Each of these offers its own distinctive style of pampering including award-winning cuisine, breath-taking views, and unparalleled hospitality and service; all included in our Botswana luxury safari.</p>

                    <h1 className='text-sm my-6 lg:text-left text-center font-bold ml-2'>MORE ADVENTURE AWAITS YOU ON BOTSWANA LUXURY SAFARI</h1>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>For a change of pace, venture into the Makgadikgadi and Nxai Pans National Parks to see mega-herds of wildebeest, zebra and other mammals which migrate here annually in search of water and stable food supplies.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Soak up the breath-taking montage of lily-covered wetlands, sparkling floodplains, open grassland, and dappled forests of Moremi, which is tucked in one of the most accessible corners of the Okavango and is home to a myriad of game all year round.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Savuti is a safari aficionado’s paradise! Here the stage is set for remarkable predator encounters as prides of lion compete with packs of cackling hyena for food and territory. Situated in a remote area of the Chobe National Park, Savuti has earned its world-renowned reputation for raw, dramatic wildlife viewing due to its vast landscapes, abundant wildlife and starring cast of predators.</p>
                    <p className='lg:text-base text-justify lg:px-2 my-6'>Head south into the arid landscapes of the Central Kalahari and experience the full extent of Botswana’s diversity. This windswept region features vast rolling dunes and far-reaching salt pans that are home to a unique population of desert-adapted plants and animals, including magnificent black-maned Kalahari lions and large herds of desert-roaming elephant. It’s a vision to behold!</p>



                </div>
            </div>
        </div>
    );
};

export default BotswanaSafaris;