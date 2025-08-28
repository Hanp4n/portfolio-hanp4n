import React from 'react';
import logoClave from './../media/img/logoClave3.png';
import { AudioLines } from 'lucide-react';
import { Disc3 } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Separator } from './ui/separator';
export default function Header() {
    return (
        <header className="text-white flex items-center justify-left p-4 pr-20 pl-20 gap-2
        flex-col sm:flex-row sm:pr-24 sm:pl-24
        text-sm sm:text-sm
        sticky top-0 z-100
        dark:bg-[#0A0A0A] bg-white">
            <Disc3 className='w-11 hover:rotate-[360deg] duration-1000 ease-in-out dark:text-white text-black'/>
            <nav className="text-black dark:text-white font-semibold flex gap-2">
                <a href="#projects" className="font-medium p-3 pt-1 pb-1 dark:hover:bg-gray-800 hover:bg-gray-100 duration-300 rounded-lg">Projects</a>
                <a href="#about" className="font-medium p-3 pt-1 pb-1 dark:hover:bg-gray-800  hover:bg-gray-100 duration-300 rounded-lg">About</a>
                <a href="#contact" className="font-medium p-3 pt-1 pb-1 dark:hover:bg-gray-800  hover:bg-gray-100 duration-300 rounded-lg">Contact</a>
            </nav>
            <div className='w-[1px] h-4 dark:bg-gray-800 bg-gray-300
            ml-4 mr-4
            sm:block hidden'></div>
            <ModeToggle />
        </header>
    );
};