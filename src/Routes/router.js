import { createBrowserRouter } from "react-router-dom";
import Login from "../components/form/Login";
import Signup from "../components/form/Signup";
import AddTask from "../Page/add-task/AddTask";
import Main from "../Page/Main/Main";
import MyTask from "../Page/my-task/MyTask";

export const router = createBrowserRouter([
    {
        path: '/', element:<Main></Main>, children: [
            {
                path: '/', element: <AddTask></AddTask>
            },
            {
                path: '/my-task', element: <MyTask></MyTask>
            },
        ]
    },
    {
        path: '/login', element: <Login></Login>
    },
    {
        path: '/signup', element: <Signup></Signup>
    },
])