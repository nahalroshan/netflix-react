import "./App.css";
import Banner from "./components/BANNER/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rowpost from "./components/Rowpost/Rowpost";
import { action, originals, romance, horror, comedy } from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix originals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
