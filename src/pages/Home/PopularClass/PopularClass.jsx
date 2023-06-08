import { FaRegStar, FaClock, FaRegChartBar } from "react-icons/fa";
const PopularClass = () => {
  return (
    <section className="size">
      <div className="my-14">
        <h1 className="text-5xl font-extrabold">Our Popular Courses</h1>
        <div className="mt-14">
          <div className="card bg-base-100 shadow-xl border boarder">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                alt="Shoes"
              />
            </figure>
            <div className=" p-4">
              <div className="flex justify-between">
                <samp className="bg-[#253c56] text-white p-2 rounded-md">
                  Graphics Design
                </samp>
                <samp className="font-black text-3xl">$578</samp>
              </div>
              <div className="flex justify-between my-4">
                <div className="flex items-center gap-2">
                  <FaRegChartBar className="text-[#fbc102]"></FaRegChartBar>
                  <samp>Beginner</samp>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#fbc102]"></FaClock>
                  <samp>120 Hours</samp>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegStar className="text-[#fbc102]"></FaRegStar>
                  <samp>3.5 reviews</samp>
                </div>
              </div>
              <h2 className="font-bold text-xl my-2">
                Graphic Design - A Complete Course!
              </h2>
              <div className="card-actions justify-end">
                <button className="btn bg-[#fbc102] hover:bg-[#fdd349]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
