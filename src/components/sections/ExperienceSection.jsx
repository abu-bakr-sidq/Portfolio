import { useEffect, useRef, useState } from 'react'

const internshipBullets = [
  'Worked with React.js and Next.js in a real project environment.',
  'Contributed to MyTank smart monitoring and automation workflows.',
  'Built responsive frontend modules and integrated backend APIs.',
]

const education = [
  {
    degree: 'Master of Computer Applications',
    school: 'Measi Institute of Information Technology',
    score: 82,
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Nadar College of Arts and Science',
    score: 78,
  },
]

function AwardIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.8 12.2-1.05 7.05 4.25-2.5 4.25 2.5-1.05-7.05"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnimatedPercentage({ value, runKey }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let frameId
    const duration = 1500
    const startedAt = performance.now()

    function tick(now) {
      const progress = Math.min(1, (now - startedAt) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(value * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [value, runKey])

  return <>{displayValue}%</>
}

function ExperienceSection() {
  const sectionRef = useRef(null)
  const [counterRunKey, setCounterRunKey] = useState(0)
  const [certificateOpen, setCertificateOpen] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterRunKey((current) => current + 1)
        }
      },
      { threshold: 0.55 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!certificateOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setCertificateOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certificateOpen])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="font-display flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:h-screen md:snap-start md:py-0"
    >
      <div className="liquid-glass-stage w-[min(1220px,calc(100%-32px))] max-md:w-full">
        <div className="mb-6 max-w-[820px]">
          <span className="mb-2 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Experience
          </span>
          <h2 className="font-display text-[clamp(2.1rem,3.6vw,3.4rem)] font-bold leading-[1.02] tracking-tight text-slate-950">
            Professional Journey &amp; Academic Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          <article className="liquid-glass-card flex h-full flex-col rounded-[28px] p-7 md:p-8">
            <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
            <span className="mb-4 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Internship
            </span>
            <h3 className="mb-3 font-display text-2xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-3xl">
              Frontend Developer Intern
            </h3>
            <p className="mb-5 text-base font-medium leading-[1.7] text-slate-500">
              Ethical Intelligent Technologies LLP | Jan 2026 - Apr 2026
            </p>
            <ul className="m-0 space-y-3 text-base font-medium leading-[1.7] text-slate-500">
              {internshipBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <button
                type="button"
                className="gold-certificate-button group relative inline-flex items-center gap-2 overflow-visible rounded-full border border-[#D4AF37]/70 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-950 shadow-[0_8px_22px_rgba(184,134,11,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 ease-out before:absolute before:inset-y-0 before:-left-1/2 before:z-[3] before:w-1/2 before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/85 before:to-transparent before:opacity-0 before:transition-all before:duration-700 hover:-translate-y-0.5 hover:scale-[1.035] hover:border-[#ffd700] hover:text-[#2d1b00] hover:shadow-[0_0_0_1px_rgba(255,215,0,0.55),0_0_22px_rgba(255,215,0,0.45),0_18px_44px_rgba(184,134,11,0.32),inset_0_1px_0_rgba(255,255,255,0.92)] hover:before:left-full hover:before:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#ffd700]/40"
                onClick={() => setCertificateOpen(true)}
                aria-haspopup="dialog"
                aria-controls="internship-certificate-modal"
              >
                <span
                  className="absolute inset-0 z-[1] rounded-full bg-[linear-gradient(135deg,#fff8dc_0%,#ffd700_42%,#b8860b_100%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-4 top-1 z-[2] h-1.5 w-1.5 rounded-full bg-white opacity-0 shadow-[0_0_10px_3px_rgba(255,215,0,0.95)] transition duration-300 group-hover:animate-ping group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-2 left-5 z-[2] h-1 w-1 rounded-full bg-[#fff8dc] opacity-0 shadow-[0_0_8px_2px_rgba(255,215,0,0.85)] transition delay-100 duration-300 group-hover:animate-pulse group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-9 top-1/2 z-[2] h-1 w-1 rounded-full bg-[#ffd700] opacity-0 shadow-[0_0_8px_2px_rgba(255,215,0,0.9)] transition delay-150 duration-300 group-hover:animate-ping group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="relative z-10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <AwardIcon />
                </span>
                <span className="relative z-10">View Certificate</span>
              </button>
            </div>
          </article>

          <article className="liquid-glass-card flex h-full flex-col rounded-[28px] p-7 md:p-8">
            <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
            <span className="mb-4 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Academics
            </span>
            <h3 className="mb-5 font-display text-2xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-3xl">
              Education
            </h3>

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={index === 0 ? 'border-b border-slate-900/10 py-4' : 'py-4'}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <strong className="mb-2 block text-lg font-bold text-slate-950">
                      {item.degree}
                    </strong>
                    <p className="text-base font-medium leading-[1.7] text-slate-500">
                      {item.school}
                    </p>
                  </div>
                  <strong className="shrink-0 text-3xl font-bold leading-none text-slate-950 md:text-4xl">
                    <AnimatedPercentage
                      key={`${item.degree}-${counterRunKey}`}
                      value={item.score}
                      runKey={counterRunKey}
                    />
                  </strong>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>

      {certificateOpen ? (
        <div
          id="internship-certificate-modal"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="internship-certificate-title"
          onClick={() => setCertificateOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 px-4 py-3 md:px-5">
              <h3
                id="internship-certificate-title"
                className="font-display text-sm font-bold text-slate-950 md:text-base"
              >
                Internship Certificate
              </h3>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/20"
                onClick={() => setCertificateOpen(false)}
                aria-label="Close certificate preview"
              >
                <XIcon />
              </button>
            </div>
            <div className="flex min-h-0 items-center justify-center bg-slate-100/70 p-3 md:p-5">
              <img
                className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-sm"
                src="/assets/certificates/Internship_Certificate.png"
                alt="Internship certificate from Ethical Intelligent Technologies LLP"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ExperienceSection
