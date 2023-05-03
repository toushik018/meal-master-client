import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/recipe',
                element: <ChefRecipe></ChefRecipe>
            }
        ]
    },
]);

export default router;