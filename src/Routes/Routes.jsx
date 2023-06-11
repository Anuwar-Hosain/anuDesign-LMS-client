import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SignUp from "../pages/SignUp/signUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import SelectedClass from "../pages/DashBoard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/DashBoard/EnrolledClass/EnrolledClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/selected-classes",
        element: (
          <PrivateRoute>
            <SelectedClass></SelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/enrolled-class",
        element: (
          <PrivateRoute>
            <EnrolledClass></EnrolledClass>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
