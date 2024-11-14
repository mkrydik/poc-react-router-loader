import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { GuardLoader } from './guards/GuardLoader';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"          element={<Home      />}                      />
        <Route path="/about"     element={<About     />} loader={GuardLoader} />
        <Route path="/dashboard" element={<Dashboard />} loader={GuardLoader} />
      </Route>
    )
  );
  //return createBrowserRouter([
  //  { path: '/'         , element: <Home      /> },
  //  { path: '/about'    , element: <About     />, loader: loader },
  //  { path: '/dashboard', element: <Dashboard />, loader: loader }
  //]);
}
