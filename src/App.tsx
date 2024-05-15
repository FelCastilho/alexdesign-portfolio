import './App.css'
import { createBrowserRouter } from "react-router-dom";

import Home from './home';
import Mentorias from './mentorias';
import { Clave } from './home/pages/clave';
import { Plexo } from './home/pages/plexo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/mentorias',
    element: <Mentorias/>
  },
  {
    path: '/clave',
    element: <Clave/>
  },
  {
    path: '/plexo',
    element: <Plexo/>
  },
])

export {router};

