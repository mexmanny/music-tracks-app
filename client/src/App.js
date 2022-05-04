import "./App.css";
import TrackList from "./Components/Views/TrackList";
import TrackDetails from "./Components/Views/TrackDetails";

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
