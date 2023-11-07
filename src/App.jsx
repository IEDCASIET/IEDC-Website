// import { Element } from 'react-scroll';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Excom from './pages/Excom/Excom';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Events />
      <Excom />
      <Contact />
      <Footer />
    </div>
  );
}