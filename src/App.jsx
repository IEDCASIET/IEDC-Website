// import { Element } from 'react-scroll';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Excom from './pages/Excom/Excom';
// import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Events />
      <Excom />
    </div>
  );
}