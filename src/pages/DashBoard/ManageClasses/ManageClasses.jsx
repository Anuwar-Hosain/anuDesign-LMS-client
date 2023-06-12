import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const ManageClasses = () => {
  const { register, handleSubmit } = useForm();

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleApproved = (item) => {
    console.log(item);
    fetch(`http://localhost:5000/classes/admin/${item._id}`, {
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
            title: `${item.teacher} status update Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDenied = (item) => {
    console.log(item);
    fetch(`http://localhost:5000/classes/deny/${item._id}`, {
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
            title: `${item.teacher} status update Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const onSubmit = (data) => {
    console.log(data);

    // const form = event.target;
    // const feedback = form.feedback.value;
    // console.log(feedback);

    // fetch(`http://localhost:5000/classes/update/${item._id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify(feedback),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount) {
    //       refetch();
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: `${item.teacher} Feedback send Now!`,
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
  };
  return (
    <div className="w-11/12 h-[85vh] ">
      <h1 className="text-center mb-10 text-2xl">All Classes</h1>
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
                    onClick={() => handleApproved(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white mr-4"
                    disabled={item?.status === "approved"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDenied(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white mr-4"
                    disabled={item?.status === "denied"}
                  >
                    Deny
                  </button>
                  {/* <button
                    // onClick={() => handleFeedback(item)}
                    className="btn btn-ghost bg-[#fbc102]  text-white"
                  >
                    Feedback
                  </button> */}
                  {/* modal */}
                  <label
                    htmlFor={`my-modal-${item._id}`}
                    className="btn btn-ghost bg-[#fbc102] mr-5  text-white"
                  >
                    Feedback
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
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                          <textarea
                            {...register("feedback", { required: true })}
                            className="textarea textarea-warning w-full"
                            placeholder="FeedBack"
                            name="feedback"
                          ></textarea>
                          <br />
                          <input
                            className="btn btn-ghost mt-4 w-full bg-[#fbc102] text-end  text-white"
                            type="submit"
                            value="Send"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* modal */}
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
