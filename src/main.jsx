import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'

import App from './App'
import Auth from './pages/Auth'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='auth' element={<Auth />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
