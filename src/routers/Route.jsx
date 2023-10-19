import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddProduct from "../pages/AddProduct";
import SameBrandRelatedData from "../pages/SameBrandRelatedData";
import MoreDetails from "../pages/MoreDetails";
import UpdedProduct from "../pages/UpdedProduct";
import PrivetRoute from "../privetroute/PrivetRoute";
import MyCard from "../pages/MyCard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/addproduct",
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
            },
            {
                path: "/mycard",
                element: <PrivetRoute><MyCard></MyCard></PrivetRoute>,
            },
            {
                path: "/brandmoredata/:id",
                element: <PrivetRoute><SameBrandRelatedData></SameBrandRelatedData></PrivetRoute>,
                loader: ({ params }) => fetch(`https://backend-etwzz54rd-sudiptacoding.vercel.app/item/${params.id}`)
            },
            {
                path: "/moredetails/:id",
                element: <PrivetRoute><MoreDetails></MoreDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://backend-etwzz54rd-sudiptacoding.vercel.app/itemdetails/${params.id}`)
            },
            {
                path: "/updeditem/:id",
                element: <PrivetRoute><UpdedProduct></UpdedProduct></PrivetRoute>,
                loader: ({ params }) => fetch(`https://backend-etwzz54rd-sudiptacoding.vercel.app/itemdetails/${params.id}`)
            },
        ],
    },
]);
export default router