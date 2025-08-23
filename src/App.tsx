import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import type { TProject } from './types/types'
import projectsData from './data/projects.json' with { type: "json" };
import Contact from './components/Contact'

function App() {
  const projects: TProject[] = projectsData;

  return (
    <div id="projects">
      <Header />
      <main 
      className='flex flex-col gap-12
      pl-20 pr-20 sm:pr-28 sm:pl-28'>
        <div 
        className='flex gap-6 md:flex-row flex-col
        '>
          <Hero/>
          <Projects projects={projects}/>
        </div>
        {/* <About/> */}
        <Contact/>
      </main>
    </div>
  )
}

export default App
