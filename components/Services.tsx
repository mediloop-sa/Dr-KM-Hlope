const services = [
  {
    title: "Medical Dermatology",
    body: "Acne & scarring, rosacea, eczema, psoriasis, infections, pigmentation disorders and hair loss.",
    icon: (
      <>
        <path
          d="M8 5v9a7 7 0 0 0 14 0v-3"
          stroke="#B8863E"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="25" cy="9" r="2.4" stroke="#B8863E" strokeWidth="1.6" />
        <circle cx="8" cy="5" r="2" stroke="#B8863E" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: "Skin Cancer Screening",
    body: "Dermoscopy scanning of suspicious lesions for early detection of cancers the naked eye can't see.",
    icon: (
      <>
        <circle cx="13" cy="13" r="9" stroke="#B8863E" strokeWidth="1.6" />
        <path
          d="M20 20l6 6"
          stroke="#B8863E"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Psychodermatology",
    body: "Care at the interface of skin and mind, for patients whose skin conditions carry a psychological weight.",
    icon: (
      <path
        d="M15 4c4 4 9 8 9 14.4A9 9 0 0 1 6 18.4C6 12 11 8 15 4Z"
        stroke="#B8863E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Aesthetic & Minor Surgical",
    body: "In-office procedures and aesthetic treatments tailored to your skin, performed by a specialist.",
    icon: (
      <path
        d="M15 5l2.6 6.4L24 14l-6.4 2.6L15 23l-2.6-6.4L6 14l6.4-2.6L15 5Z"
        stroke="#B8863E"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[56ch] flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">
              SERVICES
            </span>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Care for over a thousand skin, hair and nail conditions
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink-soft">
            Not all rashes are the same &mdash; some conditions are benign,
            others need urgent attention. Every consultation starts with an
            accurate diagnosis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-[18px] border border-line bg-paper p-7"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                {service.icon}
              </svg>
              <h3 className="font-display text-lg text-ink">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
