import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/ui/layout';
import { Home } from '@/pages/home';
import { Settings } from '@/pages/settings';
import { CharacterDetails } from '@/pages/character-details';
import { Students } from '@/pages/students';
import { Staff } from '@/pages/staff';
import { Favorites } from '@/pages/favorites';

export const allowedRoutes = [
  {
    id: 1,
    path: '/',
    label: 'All characters',
  },
  {
    id: 2,
    path: 'students',
    label: 'Students',
  },
  {
    id: 3,
    path: 'staff',
    label: 'Staff',
  },
  {
    id: 4,
    path: 'favorites',
    label: 'Favorites',
  },
  {
    id: 5,
    path: 'settings',
    label: 'Settings',
  },
];

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'character/:id',
        element: <CharacterDetails />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'staff',
        element: <Staff />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
