import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Resume from './components/Resume.jsx'

// IBM Plex, self-hosted (SIL OFL 1.1). The `latin-` entry points ship one
// @font-face per weight; the bare ones pull six subsets we never render.
// Weights here must stay in step with the faces the theme actually asks for.
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-600.css'

import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/resume', element: <Resume /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
