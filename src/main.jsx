import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Skills } from './constant'

import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Skills',
    element: <Skills />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <div className='container'>
    <RouterProvider router={router} />
  </div>
)
