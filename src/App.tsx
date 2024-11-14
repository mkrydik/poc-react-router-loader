import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { GuardLoader } from './guards/GuardLoader';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={'/poc-react-router-loader' + '/'         } element={<Home      />}                      />
        <Route path={'/poc-react-router-loader' + '/about'    } element={<About     />} loader={GuardLoader} />
        <Route path={'/poc-react-router-loader' + '/dashboard'} element={<Dashboard />} loader={GuardLoader} />
      </Route>
    )
  );
  //return createBrowserRouter([
  //  { path: '/poc-react-router-loader' + '/'         , element: <Home      /> },
  //  { path: '/poc-react-router-loader' + '/about'    , element: <About     />, loader: loader },
  //  { path: '/poc-react-router-loader' + '/dashboard', element: <Dashboard />, loader: loader }
  //]);
}
