import './style.css'

import { Header } from '../components/header/header';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about';
import { Services } from './pages/services';

function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Services/>
    </>
  );
}

export default Home;
