import MusicCardList from "../cards/MusicCardList";
import playlists from "../../data/playlists";

export default function HomeSection() {
    return (
        <div className="space-y-10">
            <MusicCardList
                title="Jump back in"
                subtitle="Recently played collections"
                items={playlists.slice(0, 6)}
            />

            <MusicCardList
                title="Made for you"
                subtitle="Fresh mixes picked for your mood"
                items={playlists.slice(6, 12)}
            />
        </div>
    );
}