const pricingPlans = [
  {
    title: 'Landing Page',
    description:
      'A polished one-page website for offers, campaigns, local businesses, and fast launch needs.',
    price: '₹2,999',
    accent: 'emerald',
    gradient: 'from-slate-100/80 via-white to-white',
    buttonClass:
      'bg-slate-950 text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_22px_42px_rgba(15,23,42,0.24)]',
    checkClass: 'bg-slate-950 text-white',
    features: [
      'Responsive single-page design',
      'Hero, service, contact, and CTA sections',
      'WhatsApp or call button integration',
      'Basic SEO-ready structure',
      'Delivery-focused clean UI',
    ],
  },
  {
    title: 'Standard Plan',
    description:
      'A complete multi-section business website for stronger trust, discovery, and customer conversion.',
    price: '₹5,999',
    accent: 'blue',
    gradient: 'from-slate-100/80 via-white to-white',
    buttonClass:
      'bg-slate-950 text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_22px_42px_rgba(15,23,42,0.24)]',
    checkClass: 'bg-slate-950 text-white',
    popular: true,
    features: [
      'Up to 5 essential website sections',
      'Services/products showcase layout',
      'Contact form and WhatsApp action',
      'Mobile-first responsive design',
      'Premium visual polish and deployment support',
    ],
  },
]

function CheckIcon({ className }) {
  return (
    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${className}`}>
      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="m5 10.4 3 3L15 6.6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="font-display flex h-auto min-h-screen w-full items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 md:snap-start"
    >
      <div className="liquid-glass-stage mx-auto w-full max-w-7xl">
      <div className="liquid-glass-card w-full rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
        <span className="liquid-glass-layer liquid-glass-center" aria-hidden="true" />
        <span className="liquid-glass-layer liquid-glass-bottom" aria-hidden="true" />
        <span className="liquid-glass-layer liquid-glass-stroke" aria-hidden="true" />
        <div className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Pricing.
          </h2>
          <p className="max-w-md text-sm font-medium leading-relaxed text-slate-500 md:text-right md:text-base">
            Transparent costs. High quality approach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className={`liquid-glass-media relative flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br ${plan.gradient} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.1)] md:p-8`}
            >
              {plan.popular ? (
                <span className="absolute right-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_26px_rgba(15,23,42,0.22)]">
                  Popular
                </span>
              ) : null}

              <div className="mb-8 pr-0 sm:pr-24">
                <h3 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {plan.title}
                </h3>
                <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                  {plan.description}
                </p>
              </div>

              <div>
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">
                  Single Payment
                </span>
                <div className="mt-2 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                  {plan.price}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex min-w-0 items-start gap-3 text-sm font-semibold leading-relaxed text-slate-600">
                    <CheckIcon className={plan.checkClass} />
                    <span className="min-w-0 break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/DHaSMcq5VF29CfWy6"
                className={`mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-black transition duration-200 hover:-translate-y-0.5 ${plan.buttonClass}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started →
              </a>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default PricingSection
