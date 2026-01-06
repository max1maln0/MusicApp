import SideBar from "./components/layout/SideBar";
import Header from "./components/ui/Header";
import HomeSection from "./components/sections/HomeSection";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <SideBar />
      <div className="ml-72 min-h-screen">
        <Header />
        <main className="p-4">
          <HomeSection />
        </main>
      </div>
    </div>
  );
}

export default App;
