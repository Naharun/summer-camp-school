import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddClass from "../pages/Instructors/AddClass";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructor',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'selectedClass',
                element: <MySelectedClass></MySelectedClass>
            },
        ]
    }
  ]);