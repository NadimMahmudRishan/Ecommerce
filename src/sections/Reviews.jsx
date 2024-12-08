import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar,FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { reviewdata } from "../export";
const Reviews = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 2,
     slidesToScroll: 1,
     arrowsL: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };

   useEffect(() => {
     AOS.init({
       offset: 100,
       durationi: 500,
       easing: "ease-in-out",
     });
     AOS.refresh();
   }, []);
  return (
    <div
      id="testimonials"
      className="w-full px-5 lg:px-20 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themePurple text-xl font-semibold capitalize"
      >
        1200+ Customer Reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className=" text-black font-semibold text-[42px] leading-[50px] text-center capitalize "
      >
        Our Customer Love
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300" className=" w-full mt-10 ">
        <Slider className="w-full" {...settings}>
          {reviewdata.map((item, index) => (
            <div key={index}>
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center gap-4 p-3"
              >
                <img className="rounded-full w-[200px]" src={item.img} alt="customer.img" />
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                </div>
                <p className="text-center text-gray-500 text-lg">{item.para}</p>
                <div className="flex justify-center items-center gap-5">
                  <FaQuoteLeft className="text-themePurple size-16"></FaQuoteLeft>
                  <div className="flex w-full flex-col justify-center items-start">
                    <h1 className="text-black text-xl font-semibold capitalize">{item.name}</h1>
                    <h1 className="text-gray-500 capitalize ">{item.post}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
