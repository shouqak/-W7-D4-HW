import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import About from "../Pages/About"



function Layout() {
  return (
    <>

      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home/> },
{ path: "/register", element: <Register/> },
{ path: "/login", element: <Login/>},
{ path:"/about" , element: <About /> },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router