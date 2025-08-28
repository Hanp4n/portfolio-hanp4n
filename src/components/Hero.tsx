import {Github, Linkedin } from "lucide-react";

import Stats from "./Stats";

export default function Hero() {
    return (
        <section className="pt-3 flex flex-col gap-6 shrink-0
        sm:w-56 w-full ">
            <div id="presentation" className="text-2xl font-bold
            sm:text-left text-center">
                <h1>Hi,</h1>
                <h1>I'm Diego Padilla</h1>
                <p className="text-lg font-light">Software Developer</p>  
                <div id="social-container" className="mt-4
                flex gap-3 sm:justify-start justify-center">
                    <a href='' className="border-1 border-gray-300 rounded-[100%]
                    p-2 
                    cursor-pointer hover:animate-wiggle hover:scale-110 duration-300">
                        <Github className="w-4 h-4"/>
                    </a>
                    <a href='' className="border-1 border-gray-300 rounded-[100%]
                    p-2
                    cursor-pointer hover:animate-wiggle hover:scale-110 duration-300">
                        <Linkedin className="w-4 h-4"/>
                    </a>
                </div> 
            </div>
        </section>
    );
};