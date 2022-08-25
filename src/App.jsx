import "./App.css";
import Home from "./components/home/home.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import { Routes, Route } from "react-router-dom";
import Missions from "./components/missions/missions.component";
import Rockets from "./components/rockets/rockets.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="missions" element={<Missions/>}/>
          <Route path="rockets" element={<Rockets/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
