function ElintSystemsLink() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-400">
        Built For:
      </span>
      <a
        className="group relative inline-flex items-center overflow-hidden rounded-xl border border-gray-100 bg-white px-4 py-2 transition-all duration-500 ease-out before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-red-200/35 before:to-transparent before:opacity-0 before:transition-all before:duration-700 hover:scale-[1.03] hover:border-red-500/40 hover:bg-red-50/20 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_0_22px_rgba(239,68,68,0.22),0_14px_34px_rgba(239,68,68,0.10)] hover:before:left-full hover:before:opacity-100"
        href="https://elintsystem.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Elint Systems website"
      >
        <img
          className="relative z-10 h-8 w-auto object-contain transition duration-500 ease-out group-hover:scale-[1.04]"
          src="/assets/images/Elint.png"
          alt="Elint Systems"
        />
      </a>
    </div>
  )
}

export default ElintSystemsLink
