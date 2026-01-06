export default function MusicCard({ title, description, coverUrl, tag }) {
  return (
    <div className="group relative w-52 min-w-[13rem] rounded-xl border border-neutral-800/70 bg-neutral-900/70 p-3 shadow-sm transition-colors hover:bg-neutral-800/80">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={coverUrl}
          alt={title}
          className="aspect-square w-full object-cover"
          loading="lazy"
        />
        <button
          aria-label={`Play ${title}`}
          className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-emerald-500 text-black opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
        >
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <p className="truncate text-sm font-semibold text-white">{title}</p>
        <p className="text-xs leading-snug text-neutral-400">
          {description}
        </p>
        {tag ? (
          <span className="inline-flex items-center rounded-full bg-neutral-800 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-neutral-200">
            {tag}
          </span>
        ) : null}
      </div>
    </div>
  );
}
