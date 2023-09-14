import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pokecard from './components/Pokecard/index.jsx'
import PokeDataItem from './components/Pokecard/PokeData/PokeDataItem/index.jsx'
import Error from './components/Error/index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pokedataitem",
    element: <><PokeDataItem value1='6,9' measure1='kg' description="weight" /></>
  },

  {
    path: "/pokecard/:number",
    element: <Pokecard/>
  },
  {
    path:"/error",
    element: <Error />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
