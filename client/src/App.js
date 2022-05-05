import "./App.css";
import TrackList from "./Pages/TrackList";
import TrackDetails from "./Pages/TrackDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TrackList />} />
          <Route exact path="/tracks" element={<TrackList />} />
          <Route exact path="/tracks/:id" element={<TrackDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
