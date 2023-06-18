import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Example() {
    const handleDestinationScroll = (e) => {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
        if (isHomePage) {
            // Scroll to the destination section on the home page
            e.preventDefault(); // Prevent the link from navigating to the destination
            const destinations = document.getElementById('destinations');
            if (destinations) {
                window.scrollTo({
                    top: destinations.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleContactScroll = (e) => {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
        if (isHomePage) {
            // Scroll to the destination section on the home page
            e.preventDefault(); // Prevent the link from navigating to the destination
            const contact = document.getElementById('contact');
            if (contact) {
                window.scrollTo({
                    top: contact.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between ">
                            <div className="flex ">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link className='text-xl font-bold text-primary' to='/'>Easy Travel</Link>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                <Link to='/'
                                    className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-gray-900 uppercase"
                                >
                                    Home
                                </Link>
                                <Link to='/about'

                                    className="inline-flex items-center   px-1 pt-1 text-sm font-medium text-gray-900 uppercase"
                                >
                                    About
                                </Link>
                                <Link to="/?scrollToDestination=true"
                                    className="inline-flex items-center   px-1 pt-1 text-sm font-medium text-gray-900 uppercase cursor-pointer"
                                    smooth="true"
                                    duration={500}
                                    offset={0}
                                    onClick={handleDestinationScroll}
                                >
                                    Destinations
                                </Link>

                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center cursor-pointer">
                                <Link to="/?scrollToContact=true"
                                    type="button"
                                    className="font-semibold rounded-md bg-primary px-3 py-2 text-white  uppercase "
                                    smooth="true"
                                    duration={500}
                                    offset={-70}
                                    onClick={handleContactScroll}
                                >
                                    GET in touch
                                </Link>

                                {/* Profile dropdown */}

                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Link
                                to='/'
                                className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                            >
                                Home
                            </Link>
                            <Link
                                to='/about'
                                className="block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                About
                            </Link>
                            <Link to="/?scrollToDestination=true"
                                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                onClick={handleDestinationScroll}
                            >
                                Destinations
                            </Link>
                            <Link to="/?scrollToContact=true"
                                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                onClick={handleContactScroll}
                            >
                                GET IN TOUCH
                            </Link>

                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
