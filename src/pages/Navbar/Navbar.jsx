import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useSelectClasses from "../../hooks/useSelectClasses";
import useUser from "../../hooks/useUser";
import img from "../../../public/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isUser] = useUser();
  const [selectedClass] = useSelectClasses();
  const navigate = useNavigate();
  console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link className="hover" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover" to="/instructors">
          Instructors
        </Link>
      </li>
      <li>
        <Link className="hover" to="/classes">
          Classes
        </Link>
      </li>
      {isUser && (
        <li>
          <Link className="hover" to="/">
            <div className="indicator">
              <span className="indicator-item badge bg-[#fbc102] outline-none border-none text-white">
                {selectedClass?.length || 0}+
              </span>
              <FaShoppingCart className="text-2xl"></FaShoppingCart>
            </div>
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link className="hover" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}

      {user && (
        <li>
          <Link to="/">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </li>
      )}

      <li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="hover">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="hover" to="/login">
              Login
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <>
      <section className="bg-[#253c56]">
        <div className="flex justify-between items-center size text-white">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/" className=" text-xl">
              <img src={img} alt="logo" className="w-24" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
