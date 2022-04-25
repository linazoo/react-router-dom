import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Teams from "./Teams";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Player from "./Player";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />}></Route>
          </Route>
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}
