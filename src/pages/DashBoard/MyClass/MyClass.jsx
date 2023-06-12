import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { data: addClasses = [], refetch } = useQuery(
    ["addClasses"],
    async () => {
      const res = await axiosSecure.get(`/addClasses/${user?.email}`);
      return res.data;
    }
  );
  return (
    <div className="w-11/12 h-[85vh] ">
      <h1 className="text-center mb-10 text-2xl">My All Class</h1>
      <div className="overflow-x-auto w-full h-[90%]">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-[#253c56] text-white text-[18px]">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Students</th>
              <th>Feedback</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {addClasses.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td className="font-semibold">{classes?.class_name}</td>
                <td>
                  <samp className="bg-[#253c56] text-white p-2 rounded">
                    {classes?.status}
                  </samp>
                </td>
                <td>{classes?.student}</td>
                <td>
                  {/* modal */}
                  <label
                    htmlFor={`my-modal-${classes._id}`}
                    className="btn btn-ghost bg-[#fbc102] mr-5  text-white"
                  >
                    See Feedback
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id={`my-modal-${classes._id}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor={`my-modal-${classes._id}`}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <div>
                        <div className="">
                          <p>{classes?.feedback}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* modal */}
                </td>
                <td className="text-end">
                  <button
                    // onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-[#fbc102]  text-white"
                  >
                    Update
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

export default MyClass;
