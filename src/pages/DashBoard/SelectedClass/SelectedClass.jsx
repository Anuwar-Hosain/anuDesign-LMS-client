import { FaTrashAlt } from "react-icons/fa";
import useSelectClasses from "../../../hooks/useSelectClasses";

const SelectedClass = () => {
  const [selectedClass] = useSelectClasses();
  return (
    <>
      <div className="w-11/12">
        <h1>SelectedClass{selectedClass.length}</h1>
        <div className="overflow-x-auto w-full h-[95%]">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="bg-[#253c56] text-white">
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Title</th>
                <th className="text-end">Price</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {selectedClass.map((item, index) => (
                <tr className="cursor-pointer" key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{item.title}</td>
                  <td className="text-end">${item.price}</td>
                  <td className="text-end">
                    <button
                      // onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white"
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
    </>
  );
};

export default SelectedClass;
