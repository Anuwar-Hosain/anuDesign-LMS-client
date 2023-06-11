import { FaTrashAlt } from "react-icons/fa";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
const EnrolledClass = () => {
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <div className="w-11/12 h-[85vh]">
      <h1 className="text-center mb-10 text-2xl">Selected Class</h1>
      <div className="overflow-x-auto w-full h-[90%]">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-[#253c56] text-white text-[18px]">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Class Title</th>
              <th className="text-end">Price</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {enrolledClasses?.map((item, index) => (
              <tr className="cursor-pointer" key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        // src={item.img_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold"></td>
                <td className="font-semibold">{item.title}</td>
                <td className="text-end font-semibold"></td>
                <td className="text-end">
                  <button className="btn btn-ghost bg-[#fbc102]  text-white">
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

export default EnrolledClass;
