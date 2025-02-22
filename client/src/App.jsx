import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from "./components/HomePage/HomePage";
import { PalettePage } from './components/PalettePage/PalettePage';

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