import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import location from "../assets/location.png";
import spotify from "../assets/spotify.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import foot from "../assets/foot.png";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import flag4 from "../assets/flag4.png";

const Footer = () => {
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[44px] lg:py-[60px] bg-gray-100 md:bg-white">
      <div className="2xl:flex justify-between ">
        <div>
          <div className="mb-[24px] lg:mb-[56px]">
            <img className="w-[173px] xl:w-[346px] lg:w-[250px]" src={logo2} />
          </div>
          <h4 className="text-[14px] mb-[18px] text-text md:text-[16px] 2xl:text-[20px]">
            200C Muri Okunola, Victoria Island. Lagos, Nigeria.
          </h4>
          <div className="flex items-center mb-[18px]">
            <div className="w-[14px] h-[20px]">
              <img src={location} />
            </div>
            <h4 className="text-[14px] ml-[13px] text-text md:text-[16px] 2xl:text-[20px]">
              Lagos, Nigeria.
            </h4>
          </div>
          <h4 className="text-[14px] text-text md:text-[16px] 2xl:text-[20px]">
            +234 705 920 9900
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:gap-[100px] gap-y-[30px]  mt-[24px] 2xl:mt-[0px]">
          <div>
            <h1 className="text-[16px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold text-text 2xl:text-[24px]">
              Our Links
            </h1>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/" onClick={bottomToTop}>
                Home
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/about" onClick={bottomToTop}>
                About Us
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/team" onClick={bottomToTop}>
                Our Team
              </Link>
            </h4>
          </div>
          <div>
            <h1 className="text-[16px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold text-text 2xl:text-[24px]">
              Our Services
            </h1>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/service" onClick={bottomToTop}>
                Services
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/contact" onClick={bottomToTop}>
                Contact Us
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/invest" onClick={bottomToTop}>
                Invest in TAG
              </Link>
            </h4>
          </div>
          <div>
            <h1 className="text-[16px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold text-text 2xl:text-[24px]">
              Other Links
            </h1>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="/faq" onClick={bottomToTop}>
                FAQ
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="privacy" onClick={bottomToTop}>
                Privacy policy
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px]">
              <Link to="#" onClick={bottomToTop}>
                Terms & Condition
              </Link>
            </h4>
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal text-text2 2xl:text-[20px] flex  items-center">
              Careers{" "}
              <Link to="#" onClick={bottomToTop}>
                <button className="bg-primary text-[12px] lg:text-[14px] text-white ml-[12px] py-[5px] px-[4px] rounded-[5px]">
                  We’re hiring
                </button>
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-[28px] xl:mt-[64px]">
        <div className="flex">
          <div className="mr-[20px]">
            <img className="w-[41px]" src={spotify} />
          </div>
          <div className="mr-[20px]">
            <img className="w-[41px]" src={instagram} />
          </div>
          <div className="">
            <img className="w-[41px]" src={youtube} />
          </div>
        </div>
        <div></div>
      </div>
      <div className="items-center flex mt-[38px] xl:mt-[64px]">
        <div className="mr-[15px]">
          <img className="w-[24px]" src={foot} />
        </div>
        <h4 className="text-[20px] flex items-center  text-text2">
          Footprints
        </h4>

        <div className="slider flex whitespace-nowrap w-[200px] md:ml-[30px] ml-[20px]">
          <div className=" slide-track items-center">
            <div className="slide md:mx-[10px]">
              <img className="md:w-[50px] w-[40px]" src={flag1} />
            </div>
            <div className="slide md:mx-[10px]">
              <img className="md:w-[50px] w-[40px]" src={flag2} />
            </div>
            <div className="slide md:mx-[10px]">
              <img className="md:w-[50px] w-[40px]" src={flag3} />
            </div>
            <div className="slide md:mx-[10px]">
              <img className="md:w-[50px] w-[40px]" src={flag4} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-around items-center mt-[61px]">
        <h4 className="text-[14px] md:text-[18px] lg:text-[18px] mb-[12px] md:mb-[0px] font-normal text-text2 2xl:text-[20px] ">
          Terms & condition
        </h4>
        <h4 className="text-[14px] md:text-[18px] lg:text-[18px]  font-normal text-text2 2xl:text-[20px] mt-[8px] md:mt-[0px]">
          2023 All Rights Reserved © TransAlliance Group
        </h4>
      </div>
    </div>
  );
};

export default Footer;
