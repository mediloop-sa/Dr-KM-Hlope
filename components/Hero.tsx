import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24"
    >
      <div className="flex flex-col gap-6 md:col-span-6">
        <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">
          MEDICAL · AESTHETIC · PSYCHODERMATOLOGY
        </span>
        <h1 className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl md:text-[3.4rem]">
          Dear Diary — today I gave my skin the attention it deserves.
        </h1>
        <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">
          Specialist dermatology care in Mbombela and Hoedspruit, led by Dr.
          KM Hlophe — treating medical, aesthetic, minor surgical and
          psychodermatological conditions, with a rare focus on the
          mind&ndash;skin connection.
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href="#bookings"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-black"
          >
            Book a consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/27760402005"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-ivory"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1a7 7 0 0 0-6 10.6L1 15l3.5-1A7 7 0 1 0 8 1Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
            WhatsApp us
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-8 border-t border-line pt-6">
          <div>
            <div className="font-display text-2xl text-ink">1 in 3</div>
            <div className="max-w-[16ch] text-xs leading-snug text-ink-soft">
              dermatology patients have an underlying psychological condition
            </div>
          </div>
          <div>
            <div className="font-display text-2xl text-ink">2</div>
            <div className="max-w-[16ch] text-xs leading-snug text-ink-soft">
              practice locations &mdash; Mbombela &amp; Hoedspruit
            </div>
          </div>
          <div>
            <div className="font-display text-2xl text-ink">CMSA</div>
            <div className="max-w-[16ch] text-xs leading-snug text-ink-soft">
              fellow, Colleges of Medicine of South Africa
            </div>
          </div>
        </div>
      </div>

      <div className="relative md:col-span-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-line bg-gold-wash">
          <Image
            src="https://vafzjdqepmuunwqhzunz.supabase.co/storage/v1/object/public/branding/Dr%20K%20Hlope.jpg"
            alt="Dr. KM Hlophe, specialist dermatologist"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -left-4 bottom-6 flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-[0_18px_40px_-18px_rgba(34,30,25,0.35)] sm:-left-9">
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <circle cx="15" cy="15" r="14" stroke="#B8863E" strokeWidth="1.4" />
            <path
              d="M9 15.5l4 4 8-9"
              stroke="#B8863E"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <div className="text-[13px] font-bold text-ink">
              Fellow in Dermatology
            </div>
            <div className="text-xs text-ink-soft">
              Colleges of Medicine SA (CMSA)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
