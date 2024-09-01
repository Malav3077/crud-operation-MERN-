import './App.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
import User from './components/User'
import Add from './components/Add'
import Update from './components/Update'

function App() {
  const route  = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/update/:id",
      element:<Update/>
    },
  ])

  return (
    <>
    <RouterProvider router={route}> 
      <User/>
    </RouterProvider>
    </>
  )
}

export default App
