import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom"
import Layout from "./Layout"
import { Home } from './pages/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path='' element={<Home/>}/>
      </Route>
  )
)



createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
