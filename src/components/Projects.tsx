import type { TProject } from '../types/types';
import Project from './Project';
import arrow from '../media/svg/arrow.svg'
import { ArrowBigDown } from 'lucide-react';
type ProjectsProps = {
  projects: TProject[];
};

export default function Projects({projects}: ProjectsProps) {
    return (
        <div 
        className='group/arrow flex justify-center items-center'>

            <div className='absolute flex-col hidden z-10 items-center
            lg:group-hover/arrow:hidden lg:duration-300 lg:flex'>
                <ArrowBigDown className='w-32 animate-bounce'/><span>Check out my best work!</span>
            </div>

            <div className='flex flex-wrap justify-center w-fit overflow-y-auto dark:darkscrollbar scrollbar h-100 rounded-2xl  
            lg:blur-xs blur-none lg:hover:blur-none lg:duration-300'>
                {projects.map((project) => (
                    <Project 
                            id={project.id} 
                            title={project.title}
                            description={project.description}
                            imgURL={project.imgURL}
                            technologies={project.technologies} 
                    />
                ))}
            </div>
        </div>
    );       
}