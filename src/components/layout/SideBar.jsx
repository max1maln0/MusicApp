export default function SideBar() {
    const mainNav = [
        { label: "Home", icon: "/home-svgrepo-com.svg" },
        { label: "Search", icon: "/search-svgrepo-com.svg" },
    ];

    const libraryFilters = ["Playlists", "Artists", "Albums"];

    const libraryItems = [
        { title: "Liked Songs", subtitle: "Playlist", accent: "bg-violet-600" },
        { title: "Daily Mix 1", subtitle: "Mix", accent: "bg-emerald-500" },
        { title: "Discover Weekly", subtitle: "Playlist", accent: "bg-sky-500" },
    ];

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-4">
            <div className="flex flex-col gap-4 w-72">
                <aside className="rounded-xl bg-neutral-950/80 border border-neutral-800/80 shadow-lg">
                    <nav className="flex flex-col">
                        {mainNav.map((item) => (
                            <a
                                key={item.label}
                                className="flex items-center gap-3 px-4 py-3 text-lg text-neutral-200 hover:text-white hover:bg-neutral-800/80 transition-colors"
                                href="#"
                            >
                                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </aside>

                <aside className="rounded-xl bg-neutral-950/80 border border-neutral-800/80 shadow-lg p-4 flex flex-col gap-4">
                    <header className="flex items-center justify-between text-lg text-neutral-200">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">≡</span>
                            <span>Your Library</span>
                        </div>
                        <button aria-label="Add" className="text-xl leading-none text-neutral-300 hover:text-white">+</button>
                    </header>

                    <div className="flex flex-wrap gap-2">
                        {libraryFilters.map((filter) => (
                            <span
                                key={filter}
                                className="px-3 py-1 rounded-full bg-neutral-800 text-sm text-neutral-200 border border-neutral-700"
                            >
                                {filter}
                            </span>
                        ))}
                    </div>

                    <ul className="flex flex-col gap-3">
                        {libraryItems.map((item) => (
                            <li key={item.title} className="flex items-center gap-3">
                                <span className={`h-12 w-12 rounded-md ${item.accent}`}></span>
                                <div className="leading-tight">
                                    <p className="text-neutral-50 font-semibold">{item.title}</p>
                                    <p className="text-sm text-neutral-400">{item.subtitle}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
}