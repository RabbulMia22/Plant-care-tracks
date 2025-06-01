import { createBrowserRouter, RouterProvider } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddPlant from "./pages/AddPlant"
import AllPlants from "./pages/AllPlants"
import MyPlants from "./pages/MyPlants"
import AuthProvider from "./context/AuthProvider"
import Layout from "./layout/Layout"

function App() {
  const router = createBrowserRouter([
    {
     element: <Layout />,
     children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'addplant',
        element: <AddPlant />
      },
      {
        path: 'allplant',
        element: <AllPlants />
      },
      {
        path: 'myplants',
        element: <MyPlants />
      },
     ]
    }
  ]);

  return (
    <>
     <AuthProvider>
       <RouterProvider router={router}/>
     </AuthProvider>
    </>
  )
}

export default App
