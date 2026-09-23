export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 pb-10 pt-16 md:px-10 md:pb-10 md:pt-20">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-[#3A352C] pb-10">
          <h3 className="max-w-[44ch] font-display text-2xl leading-snug text-ivory">
            You&rsquo;re fearfully and wonderfully made&hellip; trust the
            process.
          </h3>
          <div className="flex gap-3">
            {/* TODO: add Facebook link back in once we have the URL */}
            <a
              href="https://www.instagram.com/nelspruit_dermatologist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4A443A] hover:border-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="#FAF6EF" strokeWidth="1.3" />
                <circle cx="8" cy="8" r="3" stroke="#FAF6EF" strokeWidth="1.3" />
                <circle cx="11.6" cy="4.4" r="0.8" fill="#FAF6EF" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <span className="text-xs text-[#A39C8D]">
            &copy; {new Date().getFullYear()} The Dermatology Diary &mdash;
            Dr. KM Hlophe. All rights reserved.
          </span>
          <nav className="flex gap-6">
            <a href="#about" className="text-xs text-[#A39C8D] hover:text-ivory">
              About
            </a>
            <a href="#services" className="text-xs text-[#A39C8D] hover:text-ivory">
              Services
            </a>
            <a href="#bookings" className="text-xs text-[#A39C8D] hover:text-ivory">
              Bookings
            </a>
            <a href="#locations" className="text-xs text-[#A39C8D] hover:text-ivory">
              Locations
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
