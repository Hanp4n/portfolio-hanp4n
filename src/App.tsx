import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import type { TProject } from './types/types'
import projectsData from './data/projects.json' with { type: "json" };

function App() {
  const projects: TProject[] = projectsData;

  return (
    <>
      <Header />
      <main className='flex gap-6 pl-20 pr-20 md:flex-row flex-col
      sm:pr-28 sm:pl-28'>
        <Hero/> 
        <Projects projects={projects}/>
      </main>
    </>
  )
}

export default App
