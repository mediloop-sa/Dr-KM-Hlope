export default function Booking() {
  return (
    <section id="bookings" className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex max-w-[56ch] flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">
          BOOKINGS &amp; PRICING
        </span>
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Book a consultation
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">
          Bookings can be made by phone or WhatsApp. Consultations are cash
          or card; you&rsquo;ll receive a statement to claim from your
          medical aid.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-[18px] border border-line bg-paper p-8">
          <span className="text-xs font-bold tracking-[0.1em] text-ink-soft">
            NELSPRUIT OFFICE
          </span>
          <div className="font-display text-4xl text-ink">R1 200</div>
          <p className="text-sm leading-relaxed text-ink-soft">
            Consultation fee, Nelmed Medicross, Mbombela.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-[18px] border border-ink bg-ink p-8">
          <span className="text-xs font-bold tracking-[0.1em] text-gold">
            HOEDSPRUIT OFFICE
          </span>
          <div className="font-display text-4xl text-ivory">R1 500</div>
          <p className="text-sm leading-relaxed text-[#C9C2B4]">
            From 1 March 2026, this fee factors in travel cost and
            accommodation.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-[18px] border border-line bg-paper p-8">
          <a
            href="tel:0137522599"
            className="flex items-center gap-3 text-sm font-bold text-ink hover:text-gold-deep"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 3h3l1.5 4L7 8.5a9 9 0 0 0 4.5 4.5L13 11.5l4 1.5v3a2 2 0 0 1-2.2 2A15 15 0 0 1 2 4.2 2 2 0 0 1 4 3Z"
                stroke="#B8863E"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            013 752 2599
          </a>
          <a
            href="https://wa.me/27760402005"
            className="flex items-center gap-3 text-sm font-bold text-ink hover:text-gold-deep"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M9 2a7 7 0 0 0-6 10.6L2 16l3.5-1A7 7 0 1 0 9 2Z"
                stroke="#B8863E"
                strokeWidth="1.4"
              />
            </svg>
            +27 76 040 2005
          </a>
          <a
            href="https://wa.me/27760402005"
            className="mt-1 flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-black"
          >
            Send a booking request
          </a>
        </div>
      </div>
    </section>
  );
}
