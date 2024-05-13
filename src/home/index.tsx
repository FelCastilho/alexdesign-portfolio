import './style.css'

import { Header } from '../components/header/header';
import { Hero } from './pages/hero/hero';

function Home() {
  return (
    <>
      <Header />
      <Hero/>
    </>
  );
}

export default Home;
