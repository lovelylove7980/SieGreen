import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SieGreen from './components/SieGreen';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <SieGreen/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
