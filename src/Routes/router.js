import { createBrowserRouter } from "react-router-dom";
import Login, { PasswordReset } from "../components/form/Login";
import Signup from "../components/form/Signup";
import AddTask from "../Page/add-task/AddTask";
import Main from "../Page/Main/Main";
import MyTask from "../Page/my-task/MyTask";
import AuthPrivate from "../Page/private/AuthPrivate";
import PrivatePage from "../Page/private/PrivatePage";

export const router = createBrowserRouter([
    {
        path: '/', element:<PrivatePage><Main></Main></PrivatePage>, children: [
            {
                path: '/add-task', element: <PrivatePage><AddTask></AddTask></PrivatePage>
            },
            {
                path: '/', element: <PrivatePage><MyTask></MyTask></PrivatePage>
            },
        ]
    },
    {
        path: '/login', element: <AuthPrivate><Login></Login></AuthPrivate>
    },
    {
        path: '/signup', element: <AuthPrivate><Signup></Signup></AuthPrivate>
    },
    {
        path: '/password-reset', element: <AuthPrivate><PasswordReset></PasswordReset></AuthPrivate>
    },
])