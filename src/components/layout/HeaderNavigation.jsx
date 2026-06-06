import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.98H3.72V19h3.22V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72Zm13.94 9.55c0-3.02-1.61-4.43-3.76-4.43a3.24 3.24 0 0 0-2.94 1.62h-.04V8.98H9.46V19h3.2v-4.96c0-1.31.25-2.58 1.87-2.58 1.6 0 1.62 1.5 1.62 2.66V19h3.2v-5.45h-.07Z" />
    </svg>
  )
}

function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-auto min-h-[72px] w-full items-center justify-between border-b border-gray-100/80 bg-white/70 px-4 py-2.5 backdrop-blur-md md:h-20 md:min-h-0 md:px-12 md:py-0">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 md:flex-nowrap md:gap-0">
        <div className="flex min-w-0 items-center gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home section">
            <span className="grid h-[54px] w-[54px] shrink-0 place-items-center overflow-hidden rounded-full bg-slate-950">
              <img
                className="block h-full w-full object-cover object-center"
                src="/assets/images/logo.png"
                alt="Abubacker Siddiq logo"
              />
            </span>
            <span className="hidden min-w-0 flex-col items-start justify-center gap-[5px] leading-none sm:flex">
              <strong className="block whitespace-nowrap text-[0.98rem] font-extrabold tracking-[-0.03em] text-slate-950">
                Abubacker Siddiq
              </strong>
              <small className="block whitespace-nowrap text-[0.72rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                Full Stack Web Developer
              </small>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/abubacker-siddiq-j-149697291/"
            className="hidden h-[42px] w-[42px] shrink-0 place-items-center rounded-full text-[#0a66c2] transition-colors hover:bg-[#0a66c2]/10 sm:grid"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          type="button"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200/90 bg-white/95 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-300 md:hidden ${
            menuOpen ? 'border-slate-300 shadow-[0_16px_36px_rgba(15,23,42,0.12)]' : ''
          }`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="grid w-[18px] gap-[5px]" aria-hidden="true">
            <span
              className={`block h-0.5 rounded-full bg-slate-950 transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 rounded-full bg-slate-950 transition-all duration-300 ${
                menuOpen ? 'scale-x-[0.25] opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 rounded-full bg-slate-950 transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>

        <div
          id="mobile-navigation"
          className={`order-3 grid w-full overflow-hidden rounded-3xl border bg-white/95 px-2 transition-all duration-300 ease-out md:pointer-events-auto md:absolute md:left-1/2 md:order-none md:flex md:w-auto md:max-h-none md:-translate-x-1/2 md:items-center md:gap-8 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:opacity-100 ${
            menuOpen
              ? 'mt-2 max-h-96 border-slate-200/85 py-2 opacity-100 shadow-[0_18px_44px_rgba(15,23,42,0.08)] md:mt-0 md:shadow-none'
              : 'pointer-events-none mt-0 max-h-0 border-transparent py-0 opacity-0 shadow-none md:pointer-events-auto'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex min-h-11 w-full items-center justify-start rounded-2xl px-4 text-[0.94rem] font-bold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 md:w-auto md:justify-center md:rounded-none md:px-0 md:hover:bg-transparent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden min-h-12 items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center text-[0.92rem] font-extrabold text-slate-950 transition-colors hover:text-slate-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation
