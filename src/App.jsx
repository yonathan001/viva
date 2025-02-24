import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
