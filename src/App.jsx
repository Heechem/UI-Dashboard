import CardItem from "./components/CardItem";
import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="relative flex flex-1 flex-col">
        <Navbar />
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
