const locations = [
  {
    name: "Nelspruit Office",
    address: "Nelmed Medicross, Corner Nel & Rothery Street, Mbombela, 1201",
    query: "Nelmed Medicross, Corner Nel and Rothery Street, Mbombela, 1201",
  },
  {
    name: "Hoedspruit Office",
    address: "Hoedspruit Private Hospital, Huilboerboom Street, 1380",
    query: "Hoedspruit Private Hospital, Huilboerboom Street, 1380",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">
          LOCATIONS
        </span>
        <h2 className="mb-11 mt-4 font-display text-3xl text-ink md:text-4xl">
          Two offices in Mpumalanga
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="overflow-hidden rounded-[18px] border border-line"
            >
              <iframe
                title={loc.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  loc.query
                )}&output=embed`}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6">
                <h3 className="mb-2 font-display text-lg text-ink">
                  {loc.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {loc.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
