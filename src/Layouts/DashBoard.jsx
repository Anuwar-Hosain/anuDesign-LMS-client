import {
  FaHome,
  FaShoppingCart,
  FaCheckCircle,
  FaEdit,
  FaUserEdit,
  FaBorderAll,
  FaCloudUploadAlt,
  FaHistory,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useUser from "../hooks/useUser";
import Navbar from "../pages/Navbar/Navbar";
import useSelectClasses from "../hooks/useSelectClasses";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isUser] = useUser();
  const [selectedClass] = useSelectClasses();
  return (
    <section className="max-h-[100vh]">
      <Navbar></Navbar>
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
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manage-classes">
                    <FaEdit></FaEdit> Manage class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-users">
                    <FaUserEdit></FaUserEdit> Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/add-class">
                    <FaCloudUploadAlt></FaCloudUploadAlt> Add class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-class">
                    <FaBorderAll></FaBorderAll> My Class
                  </NavLink>
                </li>
              </>
            )}
            {isUser && (
              <>
                <li>
                  <NavLink to="/dashboard/selected-classes">
                    <div className="indicator">
                      <span className="indicator-item badge bg-[#fbc102] outline-none border-none text-white">
                        {selectedClass?.length || 0}+
                      </span>
                      <FaShoppingCart className="text-2xl"></FaShoppingCart>
                    </div>{" "}
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolled-class">
                    <FaCheckCircle></FaCheckCircle> My Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payments-history">
                    <FaHistory></FaHistory> My Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider bg-white"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;

{
  /* <>
<li>
  <NavLink to="/dashboard/selected-classes">
    <FaShoppingCart></FaShoppingCart> My Selected Classes
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/enrolled-class">
    <FaCheckCircle></FaCheckCircle> My Enrolled Class
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/payments-history">
    <FaHistory></FaHistory> My Payment History
  </NavLink>
</li>
</> */
}
