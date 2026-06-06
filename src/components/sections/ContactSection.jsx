function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 7.25h15v9.5A2.25 2.25 0 0 1 17.25 19H6.75a2.25 2.25 0 0 1-2.25-2.25v-9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.98H3.72V19h3.22V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72Zm13.94 9.55c0-3.02-1.61-4.43-3.76-4.43a3.24 3.24 0 0 0-2.94 1.62h-.04V8.98H9.46V19h3.2v-4.96c0-1.31.25-2.58 1.87-2.58 1.6 0 1.62 1.5 1.62 2.66V19h3.2v-5.45h-.07Z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3v3M16 3v3M4.75 9.25h14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.75 5h10.5A2.25 2.25 0 0 1 19.5 7.25v10.5A2.25 2.25 0 0 1 17.25 20H6.75A2.25 2.25 0 0 1 4.5 17.75V7.25A2.25 2.25 0 0 1 6.75 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m8.5 14.4 2.1 2.1 4.8-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const contactActions = [
  {
    label: 'Email',
    value: 'Send an Email',
    href: 'mailto:jabubackersiddiq@gmail.com',
    icon: MailIcon,
    badgeClass: 'bg-slate-950 text-amber-300 shadow-[0_12px_24px_rgba(245,158,11,0.16)]',
  },
  {
    label: 'Network',
    value: 'Open LinkedIn',
    href: 'https://www.linkedin.com/in/abubacker-siddiq-j-149697291/',
    icon: LinkedInIcon,
    badgeClass: 'bg-[#0a66c2] text-white shadow-[0_12px_24px_rgba(10,102,194,0.2)]',
    external: true,
  },
  {
    label: 'Brief',
    value: 'Schedule a Call',
    href: 'https://forms.gle/DHaSMcq5VF29CfWy6',
    icon: CalendarIcon,
    badgeClass: 'bg-slate-950 text-emerald-300 shadow-[0_12px_24px_rgba(16,185,129,0.16)]',
    external: true,
  },
]

function ContactSection() {
  return (
    <section
      id="contact"
      className="font-display flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:h-screen md:snap-start md:py-0"
    >
      <div className="liquid-glass-stage w-[min(1220px,calc(100%-32px))] max-md:w-full">
        <div className="mb-6 max-w-[720px]">
          <span className="mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Contact
          </span>
          <h2 className="font-display text-[clamp(2.1rem,3.6vw,3.4rem)] font-bold leading-[1.02] tracking-tight text-slate-950">
            Let&apos;s Build Something Meaningful Together
          </h2>
        </div>

        <div className="liquid-glass-card grid w-full grid-cols-1 gap-4 rounded-[28px] p-7 md:grid-cols-3">
          <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
          <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
          <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
          {contactActions.map((action) => {
            const Icon = action.icon

            return (
              <a
                key={action.label}
                className="group flex min-h-[108px] w-full items-center gap-4 rounded-[24px] border border-slate-200/70 bg-white/90 p-5 text-left shadow-sm shadow-slate-100/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md"
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 ease-out group-hover:scale-105 ${action.badgeClass}`}>
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {action.label}
                  </span>
                  <span
                    className="mt-1 block whitespace-nowrap text-sm font-bold tracking-tight text-slate-950"
                  >
                    {action.value}
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
