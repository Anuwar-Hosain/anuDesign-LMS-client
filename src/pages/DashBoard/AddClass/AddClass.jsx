import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, price, instructorName, email, seats, stage } =
            data;
          const newItem = {
            className,
            price: parseFloat(price),
            instructorName,
            email,
            stage,
            seats,
            status: "pending",
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/addClasses", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <h1>Add Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex ">
          <div className="mr-5">
            <label className="label">
              <span className="label-text">Class Name:</span>
            </label>
            <input
              type="text"
              {...register("className", { required: true })}
              placeholder="Enter your name..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-5">
            <label className="label">
              <span className="label-text">Instructor Name:</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              value={user?.displayName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              value={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-5">
            <label className="label">
              <span className="label-text">Seats:</span>
            </label>
            <input
              type="number"
              {...register("seats", { required: true })}
              placeholder="Seats"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Stage</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("stage", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Beginner</option>
              <option>Advance</option>
              <option>Basics</option>
            </select>
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text">Image Upload</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs"
          />
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-ghost bg-[#fbc102]  text-white my-5 w-full"
        />
      </form>
    </div>
  );
};

export default AddClass;
