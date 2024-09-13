import React, { useState } from 'react';
import { FaCaretDown, FaSearch, FaCartPlus } from 'react-icons/fa';
import { BiSolidOffer } from 'react-icons/bi';
import { TbHelpSquareFilled } from 'react-icons/tb';
import { PiSignInBold } from 'react-icons/pi';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const showMenu = () => setToggle(true);
    const closeMenu = () => setToggle(false);

    const list = [
        { icon: <FaSearch />, name: 'Search' },
        { icon: <BiSolidOffer />, name: 'Offer' },
        { icon: <TbHelpSquareFilled />, name: 'Help' },
        { icon: <PiSignInBold />, name: 'Signin' },
        { icon: <FaCartPlus />, name: 'Cart' },
    ];

    return (
        <>
            <div
                className={`overlay fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-opacity duration-500 ${toggle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full sm:w-[300px] md:w-[500px] bg-white h-full absolute top-0 transition-transform duration-500 ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex items-center justify-center h-48 bg-gray-100">
                        <div className="w-full h-full p-6 bg-gray-300 shadow-md rounded-md">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search for area, street name..."
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="mb-4 flex items-center cursor-pointer">
                                <span className="material-icons text-gray-900">my_location</span>
                                <p className="ml-2 text-gray-700">Get current location</p>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <span className="material-icons text-gray-900">History</span>
                                <p className="ml-2 text-gray-700">Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-400 h-full w-full">
                        <img src="map.jpg" alt="Map" className="w-full h-auto" />
                        <img src="map2.png" alt="Map" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="p-4 shadow-xl bg-white">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                    <div className="w-[100px]">
                        <img className="w-full" src="images/logo.png" alt="Logo" />
                    </div>
                    <div className="flex-grow hidden md:flex items-center">
                        <span className="font-bold border-b-3 border-black">Nainital</span>, kaladhungi, masiwalpur
                        <FaCaretDown onClick={showMenu} className="ml-2 cursor-pointer" />
                    </div>
                    <nav className="flex list-none gap-4 md:gap-10 ml-auto items-center">
                        {list.map((item, index) => (
                            <li key={index} className="hover:text-[#fc8018] flex items-center gap-2 md:gap-3 cursor-pointer">
                                {item.icon}
                                <span className="hidden md:inline">{item.name}</span>
                            </li>
                        ))}
                    </nav>
                    <div className="md:hidden flex items-center">
                        <FaCaretDown onClick={showMenu} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
