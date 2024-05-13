import './App.css'
import { createBrowserRouter } from "react-router-dom";

import Home from './home';
import Mentorias from './mentorias';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/mentorias',
    element: <Mentorias/>
  },
])

export {router};

