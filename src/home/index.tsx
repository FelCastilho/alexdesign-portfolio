import './style.css'

import { Header } from '../components/header/header';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Projects } from './pages/projects';

function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
    </>
  );
}

export default Home;
