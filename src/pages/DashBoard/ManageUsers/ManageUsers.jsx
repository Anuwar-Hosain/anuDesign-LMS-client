import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  console.log(user.photoURL);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`https://anu-design-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (userAll) => {
    console.log(userAll);
    fetch(
      `https://anu-design-server.vercel.app/users/instructor/${userAll._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // instructor added start
          const saveInstructor = {
            name: userAll.name,
            email: userAll.email,
            img_url: user.photoURL,
          };
          fetch("https://anu-design-server.vercel.app/instructors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveInstructor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("55555555", data);
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${userAll.name} is an instructor Now!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          // instructor added end
          // refetch();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: `${user.name} is an instructor Now!`,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        }
      });
  };

  return (
    <div className="w-11/12 h-[85vh] ">
      <h1 className="text-center mb-10 text-2xl">All Users</h1>
      <div className="overflow-x-auto w-full h-[90%]">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-[#253c56] text-white text-[18px]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <>
                      <p>Admin</p>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-[#fbc102]  text-white mr-5"
                        disabled={user.role === "admin"}
                      >
                        Make admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-[#fbc102]  text-white"
                        disabled={user.role === "instructor"}
                      >
                        Make instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-[#fbc102]  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
