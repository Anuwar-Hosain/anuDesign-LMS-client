import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Instructors</Link>
      </li>
      <li>
        <Link to="/">Classes</Link>
      </li>
      {/* ToDO: user login thakle dashboard show korbe */}
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </>
  );
  return (
    <>
      <section className="">
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
              <img src="/public/logo.png" alt="logo" className="w-24" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
