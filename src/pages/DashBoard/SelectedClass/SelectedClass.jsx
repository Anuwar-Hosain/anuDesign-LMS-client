import { FaTrashAlt, FaPaypal } from "react-icons/fa";
import useSelectClasses from "../../../hooks/useSelectClasses";
import Swal from "sweetalert2";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

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
                  <td className="text-end font-semibold">${item.price}</td>
                  <td className="text-end">
                    {/* modal */}
                    <label
                      htmlFor={`my-modal-${item._id}`}
                      className="btn btn-ghost bg-[#fbc102] mr-5  text-white"
                    >
                      <FaPaypal></FaPaypal> PAYMENT
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id={`my-modal-${item._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor={`my-modal-${item._id}`}
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <div>
                          <div className="text-center">
                            <h1 className="font-semibold text-xl">
                              {item.title}
                            </h1>
                            <p className="text-[18px] font-bold my-10">
                              Price: ${item.price}
                            </p>
                            <Elements stripe={stripePromise}>
                              <CheckoutForm item={item}></CheckoutForm>
                            </Elements>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
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
