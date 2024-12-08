import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { products } from "../export";
const ProductGrid = () => {
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
      id="Products"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4 "
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themePurple text-xl font-semibold"
      >
        Browser Collections
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className=" text-black font-semibold text-[42px] leading-[50px] text-center "
      >
        Trending Products
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className=" w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10"
      >
        {products.map((item, index) => (
          <div
            id="product-box"
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative "
          >
            <img src={item.img} alt="" />
            <div
              id="icons"
              className="flex justify-center items-center gap-3 absolute top-[20px] "
            >
              <div className="bg-themePurple hover:bg-themeYellow hover:text-black rounded-full text-white p-3">
                <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
              </div>
              <div className="bg-themePurple hover:bg-themeYellow hover:text-black rounded-full text-white p-3">
                <FaRegHeart></FaRegHeart>
              </div>
              <div className="bg-themePurple hover:bg-themeYellow hover:text-black rounded-full text-white p-3">
                <MdAddShoppingCart></MdAddShoppingCart>
              </div>
            </div>
            <h1 className=" text-lg text-gray-400 font-semibold ">
              {item.category}
            </h1>
            <h1 className="text-xl font-semibold">{item.name}</h1>
            <h1 className="text-lg text-themePurple font-semibold">
              {item.price}
            </h1>
            <div className="w-full mt-2">
              <hr />
              <div className="flex justify-between items-center gap-6 mt-3">
                <div className="flex justify-start items-center gap-1">
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                  <FaStar className="text-themePurple"></FaStar>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold ">SALE 14%</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className=" bg-themePurple hover:bg-themeYellow font-semibold text-white px-8 py-3 hover:text-black rounded-lg mt-8 ">VIEW MORE</button>
    </div>
  );
};

export default ProductGrid;
