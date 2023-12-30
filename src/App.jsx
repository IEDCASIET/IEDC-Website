import React from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import logo from "/src/assets/IEDC ASIET Logo.png";
import Pages from "./Pages";
// import NotFound from './pages/NotFound/NotFound';
import Gallery from './pages/Gallery/Gallery';
import EventsPage from './pages/Events/Events';
import Contributors from './pages/Contributors/Contributors';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Pages />} />
          <Route
              exact
              path="/events"
              element={<EventsPage />}
          />
          <Route
              exact
              path="/gallery"
              element={<Gallery />}
          />
          <Route
              exact
              path="/contributors"
              element={<Contributors />}
          />
          <Route
              path="*"
              element={
                <>
                  <section id='404' className='flex flex-col items-center justify-center h-screen'>
                    <a href="/">
                      <img src={logo} alt="Logo" className="h-60 mb-10 " />
                  </a>
                    <div className='flex flex-col text-black text-center'>
                      <h2 className='text-7xl mb-5'>404</h2>
                      <h2 className='text-5xl'>Page Not Found</h2>
                    </div>
                    <div className='mt-10'>
                      <h2 className='text-2xl sm:ml-0 ml-5 sm:mr-0 mr-5'>Dear Entrepreneur You Are In The Wrong Page</h2>
                    </div>
                    <button className='mt-10'>
                    <Link to ="/">
                      <span
                          className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-5 py-3 rounded-full text-xl"
                          style={{ cursor: 'pointer' }}
                      >
                          Back To Home
                      </span>
                    </Link>
                    </button>
                  </section>
                </>
              }
          />
      </Routes>
    </Router>
  );
}