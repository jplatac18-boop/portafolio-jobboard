type DataProjectProps = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export function DataProjectCard({
  title,
  description,
  bullets,
  href,
}: DataProjectProps) {
  return (
    <article className="bg-slate-900 border border-sky-700 rounded-2xl p-5 shadow-[0_10px_28px_rgba(0,0,0,0.5)] text-sm text-slate-100">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mb-2 opacity-95">{description}</p>
      <ul className="list-disc pl-4 mb-3 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-4 py-1.5 rounded-full bg-sky-600 text-slate-900 text-xs font-medium border border-slate-200 hover:bg-sky-300 transition"
      >
        Ver análisis
      </a>
    </article>
  );
}
