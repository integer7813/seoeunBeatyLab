import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Greeting from './components/Greeting';
import Services from './components/Services';
import Contact from './components/Contact';
import SNS from './components/SNS';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Greeting />
      <Services />
      <Contact />
      <SNS />
      
    </>
  );
}

export default App;
