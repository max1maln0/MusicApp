

export default function Header() {
    return (
        <header className="sticky top-0 z-20 flex items-center gap-3 bg-black/70 backdrop-blur-sm p-4 rounded-lg w-full border border-neutral-800/80">
            <a href="#" className="text-zinc-300 hover:text-white">
                Explore Premium
            </a>

            <div className="flex bg-white rounded-2xl p-2 gap-2 hover:bg-green-500">
                <img src="/install-svgrepo-com.svg" alt="install" className="w-6 h-6" />
                <a href="#" className="text-black">Install App</a>
            </div>
        </header>
    );
}