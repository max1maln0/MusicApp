import MusicCard from "./MusicCard";

export default function MusicCardList({ title, subtitle, items }) {
  return (
    <section className="space-y-3">
      {(title || subtitle) && (
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            {title ? <h2 className="text-xl font-semibold text-white">{title}</h2> : null}
            {subtitle ? <p className="text-sm text-neutral-400">{subtitle}</p> : null}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <MusicCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
