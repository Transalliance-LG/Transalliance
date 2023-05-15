import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import press from "../assets/press.png";
import learn from "../assets/learn.png";

const Service = () => {
  return (
    <div>
      <div className="bg-serviceimage bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[940px] h-[700px]  relative xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[150px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[350px] grid md:grid-cols-2 lg:gap-[60px]  2xl:gap-[300px] xl:gap-[250px]">
        <div>
          <h4 className="text-[62px] md:text-[50px] text-white font-medium text-center leading-[80px] 2xl:text-[80px] lg:text-[65px] md:text-start">
            Our Services
          </h4>
          <h4 className="text-[16px] text-white text-center font-light leading-[30px] mt-[20px] lg:mt-[24px] md:text-start lg:text-[18px] lg:leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </h4>
          <Link to="/contact">
            <button className="text-[20px] text-black w-full bg-white py-[20px] md:px-[48px]  font-semibold rounded-[8px] mt-[40px] md:w-auto hover:bg-gray-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[88px] py-[24px] md:py-[40px] ">
        <h4 className="text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-medium md:w-2/5">
          The Mecca of data driven Business Solutions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-[90px] md:gap-[50px] gap-[15px] mt-[27px]">
          <div>
            <div>
              <img src={about1} />
            </div>
            <h4 className="mt-[12px] text-[22px] xl:text-[35px] lg:text-[24px] font-medium">
              Some Services Subheading
            </h4>
            <h4 className="mt-[12px] text-[16px] lg:text-[18px]">
              Paying foreign stakeholders became so seamless thanks to
              Transalliance Capital! We no longer have complaints or delays
            </h4>
          </div>

          <div>
            <div>
              <img src={about2} />
            </div>
            <h4 className="mt-[12px] text-[22px] xl:text-[35px] lg:text-[24px] font-medium">
              Some Services Subheading
            </h4>
            <h4 className="mt-[12px] text-[16px] lg:text-[18px]">
              Paying foreign stakeholders became so seamless thanks to
              Transalliance Capital! We no longer have complaints or delays
            </h4>
          </div>

          <div>
            <div>
              <img src={about3} />
            </div>
            <h4 className="mt-[12px] text-[22px] xl:text-[35px] lg:text-[24px] font-medium">
              Some Services Subheading
            </h4>
            <h4 className="mt-[12px] text-[16px] lg:text-[18px]">
              Paying foreign stakeholders became so seamless thanks to
              Transalliance Capital! We no longer have complaints or delays
            </h4>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[50px] xl:gap-[70px] gap-[33px] py-[12px] md:pb-[20px] xl:pb-[40px] items-center xl:px-[50px] 2xl:px-[100px] lg:px-[50px]  md:px-[30px]">
        <div className="">
          <img src={press} />
        </div>
        <div className="px-[15px] md:px-[0px]">
          <h4 className="text-[20px] lg:text-[38px] font-semibold mb-[15px]">
            Brief history about the company, and our plans for the future.
          </h4>
          <h4 className="lg:text-[22px] text-[16px]">
            Our passion is to help individuals and businesses succeed through
            the use of our unique problem-solving techniques. TransAlliance was
            formed to bring together expertise from various business sectors to
            better harness the power and potential of these various sectors
            through problem solving techniques, synergy and a clear-cut
            strategy. The Group’s interests span a range of sectors from
            financial services to travel and hospitality to oil and gas and
            other industries.
          </h4>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[40px] py-[12px] md:py-[20px] ">
        <div className="md:grid grid-cols-2 lg:gap-[50px] xl:gap-[70px] gap-[33px]">
          <div>
            <h4 className="text-center flex justify-start font-semibold text-[25px] lg:text-[40px]">
              Reliable & scalable
            </h4>
            <h4 className="text-[16px] lg:text-[22px] mt-[15px]">
              Paying foreign stakeholders became so seamless thanks to
              Transalliance Capital! We no longer have complaints or
              delaysPaying foreign.
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-[35px] xl:mt-[60px] gap-[30px] lg:gap-[50px] xl:gap-[60px] items-start">
          <div>
            <h4 className="text-text2 text-[40px] font-medium lg:text-[60px] 2xl:text-[100px] md:border-r-[2px] md:border-gray-200 md:flex justify-center">
              99.9%
            </h4>
            <h4 className="text-[16px] lg:text-[18px] 2xl:text-[22px] text-text2 font-medium md:flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius
            </h4>
          </div>
          <div>
            <h4 className="text-text2 text-[40px] font-medium lg:text-[60px] 2xl:text-[100px] md:border-r-[2px] md:border-gray-200 md:flex justify-center">
              180M+
            </h4>
            <h4 className="text-[16px] lg:text-[18px] 2xl:text-[22px] text-text2 font-medium md:flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius
            </h4>
          </div>
          <div>
            <h4 className="text-text2 text-[40px] font-medium lg:text-[60px] 2xl:text-[100px]  md:flex justify-center">
              Billions
            </h4>
            <h4 className="text-[16px] lg:text-[18px] 2xl:text-[22px] text-text2 font-medium md:flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius
            </h4>
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:pt-[40px] pt-[40px] md:pt-[20px]   pb-[100px] grid grid-cols-1 md:grid-cols-2 items-center gap-[15px] md:gap-[20px] xl:gap-[40px]">
        <div>
          <h4 className=" text-[26px] lg:text-[40px] xl:text-[60px] font-medium">
            Powering thousands of enterprises with premium strategies
          </h4>
          <div className="hidden md:flex md:mt-[15px]">
            <div>
              <h4 className="xl:text-[20px] text-[16px]">
                Paying foreign stakeholders became so seamless thanks to
                Transalliance Capital! We no longer have complaints or
                delaysPaying foreign stakeholders became so seamless thanks to
                Transalliance Capital! We no longer have complaints or delays
              </h4>
              <h4 className="mt-[15px] xl:text-[20px] text-[16px] font-semibold">
                Daniel Dan
              </h4>
              <h4 className=" xl:text-[20px] text-[16px] font-semibold">
                CEO, Founder - Calendly
              </h4>
            </div>
          </div>
        </div>

        <div className="">
          <img src={learn} />
        </div>
        <div className=" md:hidden">
          <h4 className="xl:text-[20px] text-[16px]">
            Paying foreign stakeholders became so seamless thanks to
            Transalliance Capital! We no longer have complaints or delaysPaying
            foreign stakeholders became so seamless thanks to Transalliance
            Capital! We no longer have complaints or delays
          </h4>
          <h4 className="mt-[15px] xl:text-[20px] text-[16px] font-semibold">
            Daniel Dan
          </h4>
          <h4 className=" xl:text-[20px] text-[16px] font-semibold">
            CEO, Founder - Calendly
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
