export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#bookings", label: "Bookings" },
    { href: "#locations", label: "Locations" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="#B8863E" strokeWidth="1.4" />
            <path
              d="M17 9c-3 3.2-5 6-5 9.2a5 5 0 0 0 10 0c0-3.2-2-6-5-9.2Z"
              stroke="#B8863E"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-ink">
              The Dermatology Diary
            </span>
            <span className="hidden text-[10px] tracking-[0.14em] text-ink-soft sm:block">
              DR. KM HLOPHE · DERMATOLOGIST
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#bookings"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-black"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
