import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddNewCoffee from "../pages/AddNewCoffee";


const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>  
        },
        {
          path:'/addcoffee',
          element:<AddNewCoffee/>  
        },
        {   
            path:"*",
            element:<ErrorPage/>
        }
      ]
    },
  ]);

export default router  