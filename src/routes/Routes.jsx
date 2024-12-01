import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddNewCoffee from "../pages/AddNewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import ViewCoffee from "../pages/ViewCoffee";


const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader:()=>fetch('https://coffee-espresso-server-pi.vercel.app/coffees')  
        },
        {
          path:'/addcoffee',
          element:<AddNewCoffee/>  
        },
        {
          path:'/updatecoffee/:id',
          element:<UpdateCoffee/> ,
          loader: ({params})=>fetch(`https://coffee-espresso-server-pi.vercel.app/coffee/${params.id}`) 
        },
        {
          path:'/viewcoffee/:id',
          element:<ViewCoffee/> ,
          loader: ({params})=>fetch(`https://coffee-espresso-server-pi.vercel.app/coffee/${params.id}`) 
        },
        {   
            path:"*",
            element:<ErrorPage/>
        }
      ]
    },
  ]);

export default router  