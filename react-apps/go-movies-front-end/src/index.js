import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Movies from './components/Movies';
import Genres from './components/Genres';
import EditMovie from './components/EdtiMovie';
import ManageCatologue from './components/ManageCatalogue';
import GraphQL from './components/GraphQL';
import Login from './components/Login';
import Movie from './components/Movie';
import OneGenre from './components/OneGenre';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:id',
        element: <Movie />,
      },
      {
        path: '/genres',
        element: <Genres />,
      },
      {
        path: '/genres/:id',
        element: <OneGenre />,
      },
      {
        path: '/admin/movie/0',
        element: <EditMovie />,
      },
      {
        path: '/admin/movie/:id',
        element: <EditMovie />,
      },
      {
        path: '/manage-catalogue',
        element: <ManageCatologue />,
      },
      {
        path: '/graphql',
        element: <GraphQL />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
