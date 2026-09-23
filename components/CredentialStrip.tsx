const credentials = [
  "MBBCh (Wits)",
  "MMED Dermatology (Wits)",
  "FC Derm (SA)",
  "Dip HIV Management (SA)",
  "ESDaP Psychodermatology, Level 1",
];

export default function CredentialStrip() {
  return (
    <section className="bg-ink py-5">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 md:justify-between md:px-10">
        {credentials.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wide text-ivory">
              {item}
            </span>
            {i < credentials.length - 1 && (
              <span className="hidden text-[#6E675B] md:inline">&middot;</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
