import payment from "../assets/payment.png"
import shipping from "../assets/shipping.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
      useEffect(() => {
        AOS.init({
          offset: 100,
          durationi: 500,
          easing: "ease-in-out",
        });
        AOS.refresh();
      }, []);
    return (
      <div className="w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 ">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-2 "
        >
          <img src={shipping} alt="shipping" />
          <h1 className="text-xl text-black font-semibold ">
            Worldwide Shipping
          </h1>
          <p className="text-[17px] text-gray-500">
            Global delivery made reliable.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-2 "
        >
          <img src={payment} alt="payment" />
          <h1 className="text-xl text-black font-semibold ">
            100% secure payment
          </h1>
          <p className="text-[17px] text-gray-500">
            Secure payment ensures safe transactions.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-2 "
        >
          <img src={refund} alt="refund" />
          <h1 className="text-xl text-black font-semibold ">
            Refund available
          </h1>
          <p className="text-[17px] text-gray-500">
            Refunds offered for easy returns.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-2 "
        >
          <img src={gift} alt="gift" />
          <h1 className="text-xl text-black font-semibold ">Wine Gift</h1>
          <p className="text-[17px] text-gray-500">
            Wine gifts for special occasions.
          </p>
        </div>
      </div>
    );
};

export default Services;