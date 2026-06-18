import AboutSection from './components/About'
import ProjectsSection from './components/Projects'
import SkillsSection from './components/Skills'
import HomeSection from './components/Home'

function App () {
  return (
    <div className='bg-white min-h-screen text-black'>
      <div className='flex items-center justify-center gap-10 p-1 bg-black text-gray-500 text-small'>
        <span>Phone: +2349031143856</span>
        <span>Email:chiomapenieldon@gmail.com</span>
      </div>

      <section className='flex items-center gap-200 p-4 bg-white'>
        <div className='font-bold text-mauve-500'>Portfolio</div>
        <nav className='flex gap-20 font-bold'>
        <a href='#Home'>Home</a>
        <a href='#Projects'>Projects</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        </nav>
        
      </section>

      <div className='bg-gray-300'>
        <HomeSection />
        <ProjectsSection/>
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  )
}

export default App
