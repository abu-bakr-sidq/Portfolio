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
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-100/80 bg-white/70 px-6 backdrop-blur-md md:px-12">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home section">
            <span className="grid h-[54px] w-[54px] shrink-0 place-items-center overflow-hidden rounded-full bg-slate-950">
              <img
                className="block h-full w-full object-cover object-center"
                src="/assets/images/logo.png"
                alt="Abubacker Siddiq logo"
              />
            </span>
            <span className="flex min-w-0 flex-col items-start justify-center gap-[5px] leading-none">
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
            className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full text-[#0a66c2] transition-colors hover:bg-[#0a66c2]/10"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex min-h-11 items-center justify-center text-[0.94rem] font-bold text-slate-600 transition-colors hover:text-slate-900"
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
