import Navbar from './component/Navbar'
import HeaderLogo from './assets/Header.png'
import Cards from './component/Cards'
import About from './component/About'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Navbar />
        <header className="mb-14 rounded-4xl bg-white p-6 shadow-lg shadow-slate-200">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:text-left">
            <div className="w-full max-w-md overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
              <img className="h-56 w-full object-cover" src={HeaderLogo} alt="Header" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Welcome To My Portfolio</h1>
              <p className="text-base leading-8 text-slate-600">
                Hi, I'm Vivek, a frontend web developer who enjoys building clean, responsive, and user-friendly websites.
                I work mainly with HTML,CSS,Javascript,TailwindCSS, and React.js, and I focus on creating layouts that look user-friendly websites.
              </p>
            </div>
          </div>
        </header>

        <section className="mb-16 rounded-4xl bg-white p-6 shadow-lg shadow-slate-200">
          <h2 className="mb-8 text-3xl font-semibold text-slate-900">My Projects</h2>
          <Cards />
        </section>

        <section className="space-y-10">
          <About />
          <Skills />
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
