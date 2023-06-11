/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaClock, FaRegChartBar, FaRegStar } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useSelectClasses from "../../hooks/useSelectClasses";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ item }) => {
  const [value, setValue] = useState(false);
  const {
    img_url,
    price,
    reviews,
    stage,
    time,
    title,
    class_name,
    teacher,
    seats,
    _id,
  } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectClasses();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (seats == 0) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, []);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const selectedClasses = {
        classItemId: _id,
        title,
        teacher,
        img_url,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl border boarder">
      <figure>
        <img src={img_url} alt="Shoes" className="h-80" />
      </figure>
      <div className=" p-4">
        <div className="flex justify-between">
          <samp className="bg-[#253c56] text-white p-2 rounded-md">
            {class_name}
          </samp>
          <samp className="font-black text-3xl">${price}</samp>
        </div>
        <div className="flex justify-between my-4">
          <div className="flex items-center gap-2">
            <FaRegChartBar className="text-[#fbc102]"></FaRegChartBar>
            <samp>{stage}</samp>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-[#fbc102]"></FaClock>
            <samp>{time} Hours</samp>
          </div>
          <div className="flex items-center gap-2">
            <FaRegStar className="text-[#fbc102]"></FaRegStar>
            <samp>{reviews} reviews</samp>
          </div>
          <div className="flex items-center gap-2">
            <FaRegStar className="text-[#fbc102]"></FaRegStar>
            <samp>{seats} seats</samp>
          </div>
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <div className="card-actions justify-end">
          <button
            disabled={value}
            className="btn bg-[#fbc102] hover:bg-[#fdd349]"
            onClick={() => handleAddToCart(item)}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
