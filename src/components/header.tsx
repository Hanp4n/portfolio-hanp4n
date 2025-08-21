import React from 'react';
import logoClave from './../media/img/logoClave3.png';

const Header: React.FC = () => {
    return (
        <header className="text-white flex  items-center justify-left pr-28 pl-28">
            <img src={logoClave} className='w-28'/>
            <nav className="text-black">
                <a href="#projects" className="mr-4 hover:underline">Projects</a>
                <a href="#about" className="mr-4 hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
        </header>
    );
};

export default Header;