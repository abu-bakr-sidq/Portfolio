import { useEffect, useRef, useState } from 'react'

function AboutSection() {
  const [clientScore, setClientScore] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    let frameId = 0

    function animateScore() {
      const duration = 1200
      const startedAt = performance.now()

      function tick(now) {
        const progress = Math.min(1, (now - startedAt) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)

        setClientScore(Math.round(100 * eased))

        if (progress < 1) {
          frameId = requestAnimationFrame(tick)
        }
      }

      setClientScore(0)
      frameId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateScore()
        } else {
          cancelAnimationFrame(frameId)
          setClientScore(0)
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(section)

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="font-display flex h-auto min-h-screen w-full items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 md:snap-start"
    >
      <div className="liquid-glass-stage mx-auto w-full max-w-6xl">
      <div className="liquid-glass-card w-full rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
        <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
        <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
        <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            About.
          </h2>
          <p className="max-w-md text-sm font-medium leading-relaxed text-slate-500 md:text-right md:text-base">
            The mind behind the code.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-stretch gap-8 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <div className="group relative isolate h-[420px] w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:h-[450px] lg:h-full lg:min-h-[500px]">
              <img
                className="block h-full w-full rounded-3xl object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                src="/assets/images/profile.jpg"
                alt="Abubacker Siddiq"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-slate-950 via-slate-950/78 to-transparent p-6 pt-24">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Abubacker Siddiq
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-white/70">
                      Full-Stack Developer
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between lg:w-3/5">
            <div className="liquid-glass-media flex h-full flex-col justify-between rounded-[30px] border border-white/70 p-6 pb-8 md:p-8 md:pb-10 lg:p-10 lg:pb-12">
              <div>
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                One mind, clear vision.
              </h3>
              <div className="mt-5 space-y-4 text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                <p>
                  I&apos;m Abubacker Siddiq, the sole mind behind every interface I shape. No
                  unnecessary noise, no wasted hours, just focused execution with clean
                  thinking, strong ownership, and a deep respect for details.
                </p>
                <p>
                  I manage and build with one goal: deliver web products that feel
                  polished, useful, and reliable. From responsive UI to full-stack logic,
                  I care about code that works beautifully under the hood and feels
                  effortless for the user.
                </p>
              </div>
              </div>

              <div className="mt-7 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="min-w-0 rounded-[24px] border border-slate-200/80 bg-white px-6 py-5 shadow-sm">
                  <strong className="block break-words text-[2.35rem] font-black leading-none tracking-tight text-slate-950 md:text-[2.55rem]">
                    {clientScore}%
                  </strong>
                  <p className="mt-2 text-sm font-bold text-slate-500">
                    Satisfied Clients
                  </p>
                </article>
                <article className="min-w-0 rounded-[24px] border border-slate-200/80 bg-white px-6 py-5 shadow-sm">
                  <strong className="block break-words text-[2.35rem] font-black leading-none tracking-tight text-slate-950 md:text-[2.55rem]">
                    SEO
                  </strong>
                  <p className="mt-2 text-sm font-bold text-slate-500">
                    Optimized Code
                  </p>
                </article>
              </div>

              <div className="mt-6 flex w-full flex-wrap gap-2 pb-8">
                {['WEB DEVELOPMENT', 'UI/UX INTEGRATION', 'FULL-STACK API'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[0.68rem] font-black tracking-[0.14em] text-slate-500 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutSection
