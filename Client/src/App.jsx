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
import PlantsDetails from "./components/PlantDetails/PlantsDetails"
import Update from "./components/Update/Update"
import PrivateRout from "./components/PrivateRouter/PrivateRout"

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
        element: (
          <PrivateRout>
            <AddPlant />
          </PrivateRout>
        )
      },
      {
        path: 'plant/:id',
        element: <PlantsDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`)
      },
      {
        path: 'allplant',
        element: <AllPlants />
      },
      {
        path: 'myplants',
        element: (
        <PrivateRout>
          <MyPlants />
        </PrivateRout>)
      },
      {
        path: 'update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`)
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
