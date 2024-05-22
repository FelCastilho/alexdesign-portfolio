import './App.css'
import { createBrowserRouter } from "react-router-dom";

import Home from './home';
import Mentorias from './mentorias';
import { Clave } from './home/pages/clave';
import { Plexo } from './home/pages/plexo';

import { Critica } from './home/pages/critica';
import { Entrevista } from './home/pages/entrevista';
import { Evento } from './home/pages/evento/evento';
import { Calendar } from './calendar';
import { Orbis } from './home/pages/orbis';

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
  {
    path: '/orbis',
    element: <Orbis/>
  },
  {
    path: '/critica',
    element: <Critica/>
  },
  {
    path: '/evento',
    element: <Evento/>
  },
  {
    path: '/entrevista',
    element: <Entrevista/>
  },
  {
    path: '/agendar',
    element: <Calendar/>
  },
])

export {router};

