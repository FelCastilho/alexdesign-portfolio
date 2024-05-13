import './style.css'

import { Header } from '../components/header/header';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about';

function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
    </>
  );
}

export default Home;
