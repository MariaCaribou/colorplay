import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from "./pages/HomePage/HomePage";
import { PalettePage } from './pages/PalettePage/PalettePage';

import "./styles/App.css" 

const router = createBrowserRouter([
  {
      path: '/',
      element: <HomePage />
  },
  {
    path: '/palette',
    element: <PalettePage />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}