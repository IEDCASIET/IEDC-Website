import { Element } from 'react-scroll';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './components/Events/Events';
import Excom from './pages/Excom/Excom';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'; 
import CompanyCard from './components/Company/Company';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
       {/* <Home /> */}
       <About />
       {/* <CompanyCard /> */}
       <Events />
       <Excom />
       {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
