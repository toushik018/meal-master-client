import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Terms from "../pages/shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>

            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute>
                    <ChefRecipe></ChefRecipe>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
            }
        ]
    },
]);

export default router;