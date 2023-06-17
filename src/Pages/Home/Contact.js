import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
const Contact = () => {
    const location = useLocation();
    useEffect(() => {
        const shouldscrollToContact = new URLSearchParams(location.search).get('scrollToContact');
        if (shouldscrollToContact) {
            // Scroll to the destination section
            scroller.scrollTo('contact', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location]);

    return (
        <div id='contact' className='bg-[#d0bfaa42]'>
            <div className='max-w-7xl mx-auto py-12 '>
                <div className="hero-content flex-col  lg:flex-row ">
                    <form
                        action='https://formspree.io/f/mbjblgyy'
                        method='POST'
                        className=' w-full flex  items-center flex-col ' >
                        <h1 className="lg:text-3xl text-xl font-bold mx-auto">GET IN TOUCH</h1>
                        <input type="text" name='Name' placeholder="Name" className="input input-bordered w-4/5 my-5" />
                        <input type="text" name='Email' placeholder="Email" className="input input-bordered w-4/5 " />
                        <textarea rows={4} name='Message' className="textarea textarea-bordered w-4/5 mt-5" placeholder="Please provide a message and let me know where you would like to go"></textarea>
                        <div className='lg:ml-1 my-4'>
                            <button className="lg:ml-1 relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-primary"></span>
                                <span className="relative text-[#ffff] group-hover:text-[#ffff]">Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;