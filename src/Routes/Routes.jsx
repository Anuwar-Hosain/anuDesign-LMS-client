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
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import MyClass from "../pages/DashBoard/MyClass/MyClass";
import NotFound from "../NotFound/NotFound";

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
    path: "*",
    element: <NotFound></NotFound>,
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
      {
        path: "/dashboard/payments-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-classes",
        element: (
          <PrivateRoute>
            <ManageClasses></ManageClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-class",
        element: (
          <PrivateRoute>
            <AddClass></AddClass>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-class",
        element: (
          <PrivateRoute>
            <MyClass></MyClass>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
