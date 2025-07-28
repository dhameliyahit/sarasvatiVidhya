import React, { useContext } from 'react';
import { IoCall } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import ThemeContext from '../context/ThemeContext';

export const TopBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="bg-[#1A2E45] text-white px-4 py-3 shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">

                {/* Left Side: Welcome Message */}
                <div className="text-base sm:text-lg md:text-xl uppercase font-medium tracking-wide hover:scale-105 transition-transform duration-300 text-center sm:text-left">
                    Welcome To <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-400">Saraswati Vidhyalay</span>
                </div>

                {/* Right Side: Call + Theme Toggle */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-end">

                    {/* Phone Contact */}
                    <a
                        href="tel:+919904771049"
                        className="flex items-center gap-2 text-sm sm:text-base font-semibold bg-[#2e4b6c] hover:bg-[#3c5c85] text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        <div className="bg-[#0071D4] p-2 rounded-full">
                            <IoCall className="text-lg sm:text-xl text-white" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="uppercase mr-1">Call Us NOW:</span>
                            <span className="font-bold">+91-99047 71049</span>
                        </div>
                    </a>

                    {/* Theme Toggle */}
                    <div className="flex justify-center">
                        <ThemeToggle onClick={toggleTheme} />
                    </div>
                </div>
            </div>
        </div>
    );
};
