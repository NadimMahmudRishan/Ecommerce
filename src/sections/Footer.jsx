import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import play1 from "../assets/pay-1.jpg";
import play2 from "../assets/pay-2.jpg";
import play3 from "../assets/pay-3.jpg";
import play4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
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
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* 1st Box */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-themePurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10"
      >
        <img
          src={client1}
          alt="client1"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
        <img
          src={client2}
          alt="client2"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
        <img
          src={client3}
          alt="client3"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
        <img
          src={client4}
          alt="client4"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
        <img
          src={client5}
          alt="client5"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
        <img
          src={client6}
          alt="client6"
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100 "
        />
      </div>

      {/* 2nd Box */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" flex flex-col justify-center items-stretch gap-10 grow"
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl font-bold text-themePurple underline italic ">
              Amar Dokan
            </h1>
            <p className="text-gray-500 text-justify">
              Amar Dokan specializes in premium digital products, providing
              customers with high-quality, innovative solutions. <br />
              It focuses on delivering exceptional value, user-friendly
              experiences, and seamless transactions, ensuring
              <br />
              customer satisfaction and meeting diverse needs in the digital
              marketplace.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-black text-xl font-semibold capitalize">
              Download our app
            </h1>
            <div className="flex justify-center items-center gap-4">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold capitalize">
            UseFul Links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold capitalize">
            UseFul Links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold capitalize">
            UseFul Links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-black text-xl font-semibold capitalize">
            UseFul Links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black ">
              Home
            </li>
          </ul>
        </div>
      </div>

      {/* 3rd Box */}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4 ">
            <img src={play1} alt="play1.jpg" className="w-[50px] rounded-lg" />
            <img src={play2} alt="play2.jpg" className="w-[50px] rounded-lg" />
            <img src={play3} alt="play3.jpg" className="w-[50px] rounded-lg" />
            <img src={play4} alt="play4.jpg" className="w-[50px] rounded-lg" />
          </div>
          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col items-center gap-4 flex-grow ">
            <h1 className="text-black font-semibold text-2xl">
              Subscribe Newsletter
            </h1>
            <div>
              <input
                type="email"
                name="Cemail"
                id=""
                placeholder="Enter valid email"
                className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg"
              />
              <button className="bg-themePurple lg:w-auto w-full text-white hover:bg-themeYellow hover:text-black px-6 py-3 rounded-r-lg font-semibold">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="lg:w-[20%] w-full ">
            <p className="text-gray-500 lg:text-end text-center">
              2024 Powered by WebApp
            </p>
          </div>
        </div>
      </div>
      {/* Scroll to top Button  */}
      <div
        id="icon-box"
        className="bg-themePurple  text-white p-3 rounded-full hover:bg-themeYellow hover:text-black cursor-pointer fixed flex bottom-6 right-6 z-10"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]"></FaArrowUp>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
