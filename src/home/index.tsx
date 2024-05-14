import './style.css'

import { Header } from '../components/header/header';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';
import { Footer } from '../components/footer';

function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
