import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './components/Events/Events';
import Excom from './pages/Excom/Excom';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'; 
import CompanyCard from './components/Company/Company';
import Card from './components/Card/Card';
import FooterCard from './components/Footer/FooterCard';

export default function Pages() {
  return (
    <div>
      <Navbar />
       <Home />
       <About />
       <CompanyCard />
       <Events />
       <Excom />
       <Card />
       <Contact />
       <FooterCard />
      <Footer />
    </div>
  );
}
