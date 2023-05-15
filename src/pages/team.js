import React from "react";
import executive1 from "../assets/executive1.png";
import executive2 from "../assets/executive2.png";
import executive3 from "../assets/executive3.png";
import executive4 from "../assets/executive4.png";
import executive5 from "../assets/executive5.png";
import executive6 from "../assets/executive6.png";
import executive7 from "../assets/executive7.png";
import executive8 from "../assets/executive8.png";
import executive9 from "../assets/executive9.png";
import linkedin from "../assets/linkedin.png";
import map2 from "../assets/map2.png";
import map1 from "../assets/map1.png";

const Team = () => {
  const executives = [
    {
      pic: executive1,
      name: "Kamsi Okafor",
      description:
        "Group Managing Director | Executive Chairman, TransAlliance Group",
    },
    {
      pic: executive2,
      name: "Lovelyn Mark",
      description: "Group Executive Director, Legal, Compliance and Admin",
    },
    {
      pic: executive3,
      name: "Afam Obodozie",
      description:
        "Group Executive Director, Strategy, Innovation and Research",
    },
    {
      pic: executive4,
      name: "Femi Adedipe",
      description: "Group Executive Director, Budget and Finance",
    },
    {
      pic: executive5,
      name: "Beverly Owoghiri",
      description:
        "Group Executive Director, Human Resources and Corporate Comms",
    },
    {
      pic: executive6,
      name: "Anthony Nwosu",
      description: "Group Executive Director, Treasury and Operations",
    },
    {
      pic: executive7,
      name: "Chuka Eboagwu",
      description: "Managing Director, Fazo Travel and Hospitality Services",
    },
    {
      pic: executive8,
      name: "Olalekan Aroyewun",
      description: "Managing Director, TransAlliance Capital",
    },
    {
      pic: executive9,
      name: "Charles Isa",
      description: "Executive Director, Fazo Travel and Hospitality Services",
    },
  ];

  return (
    <div>
      <div className="bg-team bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[740px] h-[400px]  relative xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[150px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[350px] flex justify-center items-center text-[40px] md:text-[60px] xl:text-[100px] font-semibold text-yellow-400">
        TAG Team
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[54px] py-[20px] md:py-[30px] ">
        <h4 className="text-[14px] md:text-[16px] xl:text-[20px] md:w-4/5 mx-auto text-center">
          TransAlliance Group is spearheaded by a dynamic and well-versed team
          of experts whose primary goal is to provide excellent and world-class
          services at all times to our foreign and local clients and
          stakeholders.
        </h4>
        <h4 className="text-[14px] md:text-[16px] xl:text-[20px] md:w-4/5 mx-auto text-center mt-[20px]">
          We have always demonstrated that innovation is in our DNA. Our
          innovations touch many facets of our businesses in the Finance,
          FinTech, Energy, Travel and Hospitality sectors. Our bold ambitions
          for our projects and for Nigeria, push us to create an innovation
          agenda that is even bolder, ensuring that the next wave of growth will
          remain innovation-led.
        </h4>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:pt-[54px] py-[20px] md:pt-[30px] ">
        <div className="md:w-2/5">
          <h4 className="text-[25px] xl:text-[40px] md:text-[30px] font-semibold">
            TAG Executives
          </h4>
          <h4 className="text-[14px] md:text-[16px] xl:text-[20px] mt-[10px]">
            Meet our well-versed team of experts with experience in providing
            excellent and world-class services.
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-[10px] gap-y-[40px] md:gap-x-[80px] xl:gap-x-[150px] md:gap-y-[40px] xl:gap-y-[50px] mt-[40px] lg:mt-[30px]">
          {executives.map((executive, i) => (
            <div key={i}>
              <div className="relative">
                <img
                  className="absolute w-[40px] top-[7px] right-[10px]"
                  src={linkedin}
                />
                <img src={executive.pic} />
              </div>
              <h4 className="text-[20px] xl:text-[30px] mt-[12px] text-primary font-medium xl:font-semibold">
                {executive.name}
              </h4>
              <h4 className="mt-[12px] xl:text-[20px] text-[16px]">
                {executive.description}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:mx-[50px] 2xl:mx-[100px] lg:mx-[50px]  md:mx-[30px] xl:mt-[54px] md:mt-[30px]">
        <img className="hidden md:flex" src={map1} />
        <img className="md:hidden" src={map2} />
      </div>
    </div>
  );
};

export default Team;
