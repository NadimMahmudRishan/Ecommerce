import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      durationi: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Products",
      path: "Products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <>
      <div className="w-full px-16 py-2 bg-themeYellow lg:flex hidden justify-between items-center gap-6">
        <h1 className="text-sm font-semibold flex justify-center items-center">
          <FaPhoneVolume className="size-[18px]"></FaPhoneVolume>
          <span>+880 1720-948723</span>
        </h1>

        <h1 className="text-sm font-semibold flex justify-center items-center">
          <FaMapMarkerAlt className="size-[18px]"></FaMapMarkerAlt>
          <span>YKSG-2, Daffodil Smart City, Shavar, Dhaka</span>
        </h1>

        <h1 className="text-sm font-semibold flex justify-center items-center">
          <MdEmail className="size-[18px]"></MdEmail>
          <span>amardokan@ad.bd</span>
        </h1>
      </div>

      <nav className="w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-40">
        <h1 className="text-themePurple font-bold lg:text-[30px] text-3xl underline italic ">
          Amar Dokan
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themePurple hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
        <div
          id="header-icons"
          className="lg:flex hidden justify-center items-center gap-6 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] transition-transform duration-300 cursor-pointer hover:text-themePurple"></FaSearch>
          <IoPerson className="w-[20px] h-[20px] transition-transform duration-300 cursor-pointer hover:text-themePurple"></IoPerson>
          <FaHeart className="w-[20px] h-[20px] transition-transform duration-300 cursor-pointer hover:text-themePurple"></FaHeart>

          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] transition-transform duration-300 cursor-pointer hover:text-themePurple"></FaShoppingCart>
            <div className="bg-themePurple px-3 py-1 hover:bg-themeYellow text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold">
              2
            </div>
          </div>
        </div>

        {/* For mobile menu */}
        <div
          className="flex justify-center items-center lg:hidden mt-3 "
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-themePurple text-3xl cursor-pointer"></FaXmark>
            ) : (
              <FaBars className="text-themePurple text-3xl cursor-pointer"></FaBars>
            )}
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-themePurple p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
            <ul>
              {
                navItems.map(({link,path})=>(
                  <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeYellow hover:text-black w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
                ))
              }
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
