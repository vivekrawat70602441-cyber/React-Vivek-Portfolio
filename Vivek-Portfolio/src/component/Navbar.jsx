import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="mb-8 rounded-4xl bg-white/90 px-4 py-4 shadow-sm shadow-slate-200 ring-1 ring-slate-200/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="text-lg font-semibold text-slate-900">My Portfolio</div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-700" />
        </button>

        <nav className="hidden items-center gap-3 text-lg font-medium text-slate-700 md:flex">
          <a href="#cards" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Cards
          </a>
          <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            About
          </a>
          <a href="#skills" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Skills
          </a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Contact
          </a>
          <a href="#footer" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Footer
          </a>
        </nav>
      </div>

      {isOpen ? (
        <nav className="mt-4 flex flex-col gap-3 rounded-4xl border border-slate-200 bg-slate-50/90 p-4 text-slate-700 shadow-sm shadow-slate-100 md:hidden">
          <a href="#cards" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Cards
          </a>
          <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            About
          </a>
          <a href="#skills" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Skills
          </a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Contact
          </a>
          <a href="#footer" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Footer
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar