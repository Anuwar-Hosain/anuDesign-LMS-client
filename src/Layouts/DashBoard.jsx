import { FaHome, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  //   const isAdmin = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#253c56]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ul text-white">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/selected-classes">
              {" "}
              <FaShoppingCart></FaShoppingCart>My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/enrolled-class">
              <FaCheckCircle></FaCheckCircle>My Enrolled Class
            </NavLink>
          </li>
          <div className="divider bg-white"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
