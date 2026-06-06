const techStack = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    iconAlt: 'React logo',
    frameClass: 'bg-slate-950/95',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    iconAlt: 'Next.js logo',
    frameClass: 'bg-white ring-1 ring-slate-900/10',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    iconAlt: 'MongoDB logo',
    frameClass: 'bg-emerald-50',
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    iconAlt: 'Tailwind CSS logo',
    frameClass: 'bg-sky-50',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    iconAlt: 'Node.js logo',
    frameClass: 'bg-lime-50',
  },
]

const profileBullets = [
  'Education: MCA Graduate from MEASI Institute of IT (82%).',
  'Internship: 3-Month Frontend Developer Role at Ethical Intelligent Technologies LLP.',
  'Training: Full-Stack Web Development Bootcamp (Dr. Angela Yu, Udemy).',
]

function HeroSection() {
  return (
    <section
      id="home"
      className="flex h-screen max-h-screen w-full snap-start flex-col justify-center overflow-hidden bg-white px-12 pb-8 pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-12">
        <div className="flex h-full flex-col justify-center gap-8 pt-8 md:col-span-7 md:self-stretch">
          <div className="space-y-5">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              FULL STACK WEB DEVELOPER | MCA GRADUATE | CHENNAI
            </span>
            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-slate-900 md:text-5xl">
              Abubacker Siddiq J
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">
              Motivated and reliable Computer Applications graduate currently
              completing my MCA. Strong foundation in building responsive web
              applications, working with modern frontend libraries, and solving
              real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-[0_16px_32px_rgba(15,23,42,0.14)]"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="liquid-glass-card overflow-hidden rounded-3xl p-6 pb-4">
            <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="mb-6 text-center text-xl font-bold text-slate-800 md:text-2xl">
                Technical Skills
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techStack.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-[112px] flex-col items-center gap-2 rounded-[22px] border border-slate-200/60 bg-white/90 px-4 py-4 text-center shadow-sm shadow-slate-100/50"
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${skill.frameClass}`}
                    >
                      <img
                        className="h-9 w-9"
                        src={skill.icon}
                        alt={skill.iconAlt}
                      />
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:h-full md:col-span-5 md:self-stretch">
          <div className="liquid-glass-card h-full rounded-3xl p-6">
            <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
            <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
            <div className="flex h-full flex-col gap-3">
              <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-sm shadow-2xl">
                <div className="absolute left-5 top-5 flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.10),_transparent_36%)]" />
                <pre className="relative z-10 mt-10 overflow-hidden whitespace-pre-wrap leading-7 text-slate-300">
                  <code>
                    <span className="text-sky-400">const</span>{' '}
                    <span className="text-blue-400">FullStackDev</span>{' '}
                    <span className="text-slate-500">=</span>{' '}
                    <span className="text-slate-300">(&#123; </span>
                    <span className="text-violet-300">name</span>
                    <span className="text-slate-300"> &#125;) </span>
                    <span className="text-slate-500">=&gt;</span>{' '}
                    <span className="text-slate-300">&#123;</span>
                    {'\n  '}
                    <span className="text-sky-400">const</span>{' '}
                    <span className="text-slate-300">[</span>
                    <span className="text-violet-300">skills</span>
                    <span className="text-slate-300">]</span>{' '}
                    <span className="text-slate-500">=</span>{' '}
                    <span className="text-blue-400">useState</span>
                    <span className="text-slate-300">([</span>
                    <span className="text-emerald-300">&quot;React&quot;</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-emerald-300">&quot;Next.js&quot;</span>
                    <span className="text-slate-300">,</span>
                    {'\n    '}
                    <span className="text-emerald-300">&quot;Node.js&quot;</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-emerald-300">&quot;MongoDB&quot;</span>
                    <span className="text-slate-300">]);</span>
                    {'\n\n  '}
                    <span className="text-sky-400">return</span>{' '}
                    <span className="text-slate-300">&lt;</span>
                    <span className="text-pink-400">Optimize</span>{' '}
                    <span className="text-violet-300">performance</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-emerald-300">&quot;100/100&quot;</span>{' '}
                    <span className="text-violet-300">stack</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-slate-300">&#123;</span>
                    <span className="text-violet-300">skills</span>
                    <span className="text-slate-300">&#125; /&gt;;</span>
                    {'\n'}
                    <span className="text-slate-300">&#125;;</span>
                  </code>
                </pre>
                <div className="relative z-10 flex items-center justify-between border-t border-zinc-800 pt-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-zinc-500">
                  <span>Portfolio.jsx</span>
                  <span className="text-emerald-400">Optimized</span>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <span className="block text-[10px] font-bold tracking-widest text-slate-400">
                  Professional Profile
                </span>
                <h3 className="text-sm font-bold text-slate-800">
                  MCA Candidate &amp; Full Stack Web Developer
                </h3>
                <ul className="space-y-2 text-sm font-medium leading-relaxed text-slate-600">
                  {profileBullets.map((bullet) => (
                    <li key={bullet}>&bull; {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
