import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import banner1 from "../../../assets/banner/b-1.jpg";
import banner2 from "../../../assets/banner/b-2.jpg";
import banner3 from "../../../assets/banner/b-3.jpg";
const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="relative">
            <img src={banner1} alt="banner" className="" />
            <div className="absolute bottom-1/2 w-full  left-0 text-white">
              <div>
                <h1 className="font-extrabold text-5xl mb-5">
                  Exploring the world
                </h1>
                <p className="text-3xl mb-8">
                  Our classes and courses are especially created for your
                  children. <br /> Let’s boost their creativity, motivation &
                  focus.
                </p>
                <button className="button mr-4">Read More</button>
                <button className="button1">Apply Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <div className="relative">
            <img src={banner2} alt="banner" className="" />
            <div className="absolute bottom-1/2 w-full  left-0 text-white">
              <div>
                <h1 className="font-extrabold text-5xl mb-5">
                  Learning through fun
                </h1>
                <p className="text-3xl mb-8">
                  Our classes and courses are especially created for your
                  children. <br /> Let’s boost their creativity, motivation &
                  focus.
                </p>
                <button className="button mr-4">Read More</button>
                <button className="button1">Apply Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <div className="relative">
            <img src={banner3} alt="banner" className="" />
            <div className="absolute bottom-1/2 w-full  left-0 text-white">
              <div>
                <h1 className="font-extrabold text-5xl mb-5">
                  Exploring the world
                </h1>
                <p className="text-3xl mb-8">
                  Our classes and courses are especially created for your
                  children. <br /> Let’s boost their creativity, motivation &
                  focus.
                </p>
                <button className="button mr-4">Read More</button>
                <button className="button1">Apply Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
