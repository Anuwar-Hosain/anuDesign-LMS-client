import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  return (
    <div className="w-11/12 h-[85vh] ">
      <h1 className="text-center mb-10 text-2xl">All Users</h1>
      <div className="overflow-x-auto w-full h-[90%]">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-[#253c56] text-white text-[18px]">
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Class Image</th>
              <th className="text-center">Class Name</th>
              <th className="text-center">Instructor Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.img_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item?.class_name}</td>
                <td className="font-semibold">{item?.teacher}</td>
                <td className="font-semibold">{item?.email}</td>
                <td className="font-semibold">{item?.seats}</td>
                <td className="font-semibold">{item?.price}</td>
                <td className="font-semibold">
                  <samp className="bg-[#253c56] text-white p-2 rounded">
                    {item?.status}
                  </samp>
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white mr-4"
                  >
                    Approve
                  </button>
                  <button
                    // onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white mr-4"
                  >
                    Deny
                  </button>
                  <button
                    // onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white"
                  >
                    Feedback
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

export default ManageClasses;
