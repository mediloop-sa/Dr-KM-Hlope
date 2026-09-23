import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-14 md:px-10 md:py-28"
    >
      <div className="md:sticky md:top-28 md:col-span-5 md:self-start">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-line bg-gold-wash">
          <Image
            src="https://vafzjdqepmuunwqhzunz.supabase.co/storage/v1/object/public/branding/Dr%20Kaisha.jpg"
            alt="Dr. KM Hlophe in consultation"
            fill
            sizes="(min-width: 768px) 35vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:col-span-7">
        <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">
          ABOUT THE PRACTICE
        </span>
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Meet Dr. KM Hlophe
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">
          Dr KM Hlophe is a specialist dermatologist trained to treat
          medical, aesthetic, minor surgical and psychodermatological
          conditions. She holds both her medical degree (MBBCh) and a
          Master&rsquo;s in Medicine &mdash; Dermatology (MMED Derm) from the
          University of the Witwatersrand, is a Fellow in Dermatology at the
          Colleges of Medicine of South Africa (CMSA), and holds a Diploma
          in HIV Management from the CMSA.
        </p>
        <p className="text-base leading-relaxed text-ink-soft">
          Her special interest is psychodermatology &mdash; the subspecialty
          at the interface of dermatology and psychiatry. Her Master&rsquo;s
          research focused on this field, and she has completed Level 1 of
          the Psychodermatology Diploma from the European Society for
          Dermatology and Psychiatry (ESDaP).
        </p>

        <div className="mt-2 flex gap-4 rounded-2xl border border-gold-wash bg-gold-wash p-6">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M11 2c3 4 6 7.4 6 11.4a6 6 0 1 1-12 0C5 9.4 8 6 11 2Z"
              stroke="#B8863E"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm leading-relaxed text-ink">
            It&rsquo;s estimated that <strong>1 in 3</strong> dermatology
            patients suffers from an underlying psychological condition
            &mdash; treating the skin and the mind together is central to
            how this practice works.
          </p>
        </div>
      </div>
    </section>
  );
}
