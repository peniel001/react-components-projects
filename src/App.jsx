import { useState } from 'react'
import AboutSection from './components/About'
import ProjectsSection from './components/Projects'
import SkillsSection from './components/Skills'
import HomeSection from './components/Home'

function App () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-white min-h-screen text-black'>
      {/* Top contact bar */}
      <div className='flex items-center justify-center gap-10 p-1 bg-black text-gray-500 text-sm'>
        <span>Phone: +2349031143856</span>
        <span>Email: chiomapenieldon@gmail.com</span>
      </div>

      {/* Navbar */}
      <section className='flex items-center justify-between p-4 bg-white'>
        <div className='font-bold text-purple-200'>Portfolio</div>

        {/* Desktop nav */}
        <nav className='hidden md:flex gap-20 font-bold'>
          <a href='#Home'>Home</a>
          <a href='#Projects'>Projects</a>
          <a href='#About'>About</a>
          <a href='#Skills'>Skills</a>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </section>

      {/* Mobile menu */}
      {isOpen && (
        <div className='flex flex-col items-center bg-gray-100 md:hidden'>
          <a href='#Home' className="p-2">Home</a>
          <a href='#Projects' className="p-2">Projects</a>
          <a href='#About' className="p-2">About</a>
          <a href='#Skills' className="p-2">Skills</a>
        </div>
      )}

      {/* Sections */}
      <div className='bg-gray-300'>
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  )
}

export default App
