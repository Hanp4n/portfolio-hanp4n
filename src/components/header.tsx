import React from 'react';
import logoClave from './../media/img/logoClave3.png';

export default function Header() {
    return (
        <header className="text-white flex items-center justify-left p-5 pr-20 pl-20 gap-8
        flex-col sm:flex-row sm:pr-28 sm:pl-28">
            <img src={logoClave} className='w-11 hover:rotate-[360deg] duration-1000 ease-in-out'/>
            <nav className="text-black font-semibold flex gap-2">
                <a href="#projects" className="font-medium p-3 pt-2 pb-2 hover:bg-gray-100 duration-300 rounded-lg">Projects</a>
                <a href="#about" className="font-medium p-3 pt-2 pb-2 hover:bg-gray-100 duration-300 rounded-lg">About</a>
                <a href="#contact" className="font-medium p-3 pt-2 pb-2 hover:bg-gray-100 duration-300 rounded-lg">Contact</a>
            </nav>
        </header>
    );
};