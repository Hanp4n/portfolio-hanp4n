import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import type { TProject } from './types/types'
import projectsData from './data/projects.json' with { type: "json" };
import Contact from './components/Contact'
import { ThemeProvider } from './components/Themeprovider';
import { ModeToggle } from './components/ModeToggle';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const projects: TProject[] = projectsData;

  return (
    <div id="projects" className='flex flex-col gap-8 ' >
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <main
          className='flex flex-col gap-30
      pl-20 pr-20 sm:pr-28 sm:pl-28'>
          <div
            className='flex gap-6 lg:flex-row flex-col
        '>
            <Hero />
            <Projects projects={projects} />
          </div>
          <About/>
          <Contact />
        </main>
        <Footer/>
      </ThemeProvider>

    </div>
  )
}

export default App
