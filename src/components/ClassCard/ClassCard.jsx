/* eslint-disable react/prop-types */
import { FaClock, FaRegChartBar, FaRegStar } from "react-icons/fa";

const ClassCard = ({ item }) => {
  const { img_url, price, reviews, stage, time, title, class_name } = item;
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
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn bg-[#fbc102] hover:bg-[#fdd349]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
