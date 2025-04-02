import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

//pages

import ErrorPage from './routes/ErrorPage.tsx'
import Home from './routes/Home.tsx'
import Repos from './routes/Repos.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/repos/:username",
        element: <Repos/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
