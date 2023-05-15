import React, { useState } from "react";
import { Link } from "react-router-dom";
import down3 from "../assets/down3.png";
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import video3 from "../assets/video3.png";
import globe from "../assets/globe.png";
import search from "../assets/search.png";

const Faq = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const Dropdown = [
    {
      title: "What is business strategy and why is it important?",
      content:
        "Transalliance is a payment gateway and as such does not give discounts. However, we are certain that our charges to our merchants (customers) would be as competitive as possible.",
    },
    {
      title: "How can a business strategy help my organization succeed?",
      content:
        "For every successive transaction, there are different stakeholders, each of which has its own charge. Transalliance automatically and seamlessly deduct these charges per transaction.",
    },
    {
      title: "How do you develop a successful business strategy?",
      content:
        "Transalliance has been programmed not to allow a chargeback ratio of more than 0.1%.",
    },
    {
      title:
        "How can you ensure that your business strategy remains relevant over time?",
      content:
        "Even though we do not offer discounts, our processes are all automated. Once a merchants has been onboarded, transactions are processed automatically (based on charges stated).",
    },
    {
      title:
        "How do you communicate your business strategy to your team and stakeholders?",
      content:
        "We are open to receiving any of our existing or prospective customers. You can find our address at the “contact us” page or book an appointment via a phone call.",
    },
  ];

  return (
    <div>
      <div className="bg-faqimage bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-start xl:h-[740px] h-[500px]  relative xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[150px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[350px]  items-center">
        <div className="lg:w-1/2">
          <h4 className=" text-[35px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-medium text-white">
            TransAlliance Help Center
          </h4>
          <div className="relative mt-[20px]">
            <input
              placeholder="Find answers & resources"
              type="text"
              className="bg-transparent placeholder:text-white font-extralight border-b-[1px] border-white w-full py-[15px] pl-[45px]"
            />
            <div className="absolute top-[15px] left-[10px]">
              <img className=" w-[25px]" src={search} />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[54px] py-[30px] md:py-[30px] grid grid-cols-1 md:grid-cols-2 gap-y-[46px] md:gap-x-[50px]">
        <div>
          <div>
            <h4 className="text-[25px] md:text-[30px] xl:text-[35px] font-semibold">
              Frequently Asked Questions
            </h4>
            <h4 className="text-[16px] md:text-[18px] lg:text-[20px] mt-[24px] mb-[15px]">
              TransAlliance Group harnesses various business sectors through
              problem-solving techniques, synergy and a clear-cut strategy.
            </h4>
          </div>

          {Dropdown.map((drop, i) => (
            <div key={i} className="border-b-[1px] border-blue-100">
              <div
                onClick={handleClick(i)}
                className="py-[28px] flex justify-between items-center "
              >
                <h4 className="text-[16px] md:text-[18px] lg:text-[20px] cursor-pointer font-medium w-full">
                  {drop.title}
                </h4>
                <div onClick={handleClick(i)}>
                  <div
                    className={`text-sm duration-300 cursor-pointer ${
                      clickedIndex[i] ? "rotate-180" : "rotate-0"
                    } `}
                  >
                    <img
                      className="w-[20px]"
                      onClick={handleClick(i)}
                      src={down3}
                    />
                  </div>
                </div>
              </div>
              {clickedIndex[i] ? (
                <h4 className="text-[14px] md:text-[16px] lg:text-[18px]py-[34px] px-[20px] font-light -mt-[20px] mb-[28px]">
                  {drop.content}
                </h4>
              ) : null}
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-[22px] md:text-[25px] xl:text-[30px] font-semibold mb-[24px]">
            Learn More by Video
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[24px] mb-[24px]">
            <div>
              <img className="lg:w-[260px]" src={video1} />
            </div>
            <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[20px]">
              How We Can help
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[24px] mb-[24px]">
            <div>
              <img className="lg:w-[260px]" src={video2} />
            </div>
            <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[20px]">
              The TransAlliance Factor
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[24px] mb-[24px]">
            <div>
              <img className="lg:w-[260px]" src={video3} />
            </div>
            <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[20px]">
              Best Way to reach us
            </h4>
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:pt-[40px] md:pt-[20px]   pb-[50px] grid grid-cols-1 md:grid-cols-2 items-center gap-[15px] md:gap-[50px] xl:gap-[40px]">
        <div>
          <h4 className=" text-[26px] lg:text-[40px] xl:text-[60px] font-semibold text-center md:text-start">
            Have more Questions?
          </h4>
          <div className="hidden md:flex md:mt-[15px]">
            <div>
              <h4 className="xl:text-[20px] text-[16px]">
                Paying foreign stakeholders became so seamless thanks to
                Transalliance Capital! We no longer have complaints or delays.
              </h4>
              <Link to="/contact">
                <button className="bg-primary text-white hover:bg-blue-700 px-[48px] py-[15px] text-[16px] rounded-[8px] mt-[20px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <img src={globe} />
        </div>
        <div className=" md:hidden">
          <div>
            <h4 className="xl:text-[20px] text-[16px]">
              Paying foreign stakeholders became so seamless thanks to
              Transalliance Capital! We no longer have complaints or delays.
            </h4>
            <Link to="/contact">
              <button className="bg-primary text-white hover:bg-blue-700 px-[48px] py-[15px] text-[16px] rounded-[8px] mt-[20px] w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
