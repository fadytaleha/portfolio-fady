import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/projects'
import Navbar from './components/navbar'   
import Opportunity from './components/opportunite'
import Footer from './components/footer'
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar/>
      <Hero />
      <Skills/>
      <Projects/>
      <Opportunity />
      <Footer />
    </div>
  )
}

export default App