import React from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import Pages from "./Pages";
import NotFound from './pages/NotFound/NotFound';
import Gallery from './pages/Gallery/Gallery';
import EventsPage from './pages/Events/Events';
import Contributors from './pages/Contributors/Contributors';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Pages />} />
          {/* <Route
              path="/events"
              element={<EventsPage />}
          />
          <Route
              path="/gallery"
              element={<Gallery />}
          />
          <Route
              path="/contributors"
              element={<Contributors />}
          /> */}
          <Route
              path="*"
              element={<NotFound />}
          />
      </Routes>
    </Router>
  );
}