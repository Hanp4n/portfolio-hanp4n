import type { TProject } from '../types/types';
import { Button } from './ui/button';
// import github from '../media/svg/github.svg'
// import demo from '../media/svg/demo.svg'

import {Github, ExternalLink} from 'lucide-react'

export default function Project(props: TProject) {
    return (
        <section id="projects" className='group/card overflow-hidden shadow-xl hover:shadow-2xl duration-300 m-4 w-100 rounded-xl shrink-1 grow-1'>
            <div className='h-36 overflow-hidden '>
                <img className='group-hover/card:scale-110 duration-300' src={props.imgURL}/>
            </div>
            <div className='p-4 mt-4'>
                <h1 className='text-normal'>{props.title}</h1>
                <p className='font-light text-sm mt-1'>{props.description}</p>
                <div className='flex gap-2 flex-wrap mt-2'>
                    {props.technologies.map((tech) => (
                        <span className='text-xs rounded-sm border-1 border-gray-300 p-1'>{tech}</span>
                    ))}
                </div>
                <div id="buttons" className='flex gap-4 mt-4'>
                    <Button className='text-xs bg-white hover:bg-gray-100 text-black border-1 border-gray-300 mt-4 pt-1 pb-1 grow-1 flex gap-2' ><Github/><span>Code</span></Button>
                    <Button className='text-xs bg-black text-white border-1 border-black mt-4 pt-1 pb-1 grow-1 flex gap-2'><ExternalLink/><span>Demo</span></Button>
                </div>
            </div>
        </section>
    );
    
}