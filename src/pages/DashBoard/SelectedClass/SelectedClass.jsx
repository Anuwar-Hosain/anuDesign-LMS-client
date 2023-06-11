import { FaTrashAlt, FaPaypal } from "react-icons/fa";
import useSelectClasses from "../../../hooks/useSelectClasses";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [selectedClass, refetch] = useSelectClasses();

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selected-classes/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div className="w-11/12 h-[85vh]">
        <h1 className="text-center mb-10 text-2xl">
          Selected Class: {selectedClass.length}
        </h1>
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
                  <td className="font-semibold">{item.teacher}</td>
                  <td className="font-semibold">{item.title}</td>
                  <td className="text-end">${item.price}</td>
                  <td className="text-end">
                    <button
                      // onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-[#fbc102] mr-8 text-white"
                    >
                      Payment
                      <FaPaypal></FaPaypal>
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
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
    </>
  );
};

export default SelectedClass;
