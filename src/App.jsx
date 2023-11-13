import { Element } from 'react-scroll';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Excom from './pages/Excom/Excom';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
       <Element name="Home">
        <Home />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Events">
        <Events />
      </Element>

      <Element name="Excom">
        <Excom />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}
