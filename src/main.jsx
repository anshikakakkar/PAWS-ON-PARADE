import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Whatwedo from './Components/Whatwedo/Whatwedo.jsx'
import Whoweare from './Components/Whoweare/Whoweare.jsx'
import Waystohelp from './Components/Waystohelp/Waystohelp.jsx'

const router=createBrowserRouter([
  {
    path :'/',
    element:<Layout />,
    children :[
      {
        path:"",
        element:<Home />
      },
      {
        path :"Whatwedo",
        element:<Whatwedo />
      },
      {
        path:"Whoweare",
        element:<Whoweare/>
      },
      {
        path:"Waystohelp",
        element:<Waystohelp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
