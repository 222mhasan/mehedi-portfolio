import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path :'/projects',
        element: <Projects></Projects>
      },
      {
        path : '/about',
        element : <About></About>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
