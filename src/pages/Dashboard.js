import React from "react";
import download from "../assets/download.png";
import company from "../assets/company.png";
import financial from "../assets/financial.png";
import money from "../assets/money.png";
import mining from "../assets/mining.png";
import energy from "../assets/energy.png";
import change from "../assets/change.png";
import travel from "../assets/travel.png";
import emzor from "../assets/emzor.png";
import fmn from "../assets/fmn.png";
import michelin from "../assets/michelin.png";
import friesland from "../assets/friesland.png";
import aaa from "../assets/aaa.png";
import bluebeam from "../assets/bluebeam.png";
import bp from "../assets/bp.png";
import nl from "../assets/nl.png";
import tech from "../assets/tech.png";
import binotone from "../assets/binotone.png";
import person from "../assets/person.png";
import globe from "../assets/globe.png";
import subsidiary from "../assets/subsidiary.png";
import video from "../assets/video.png";
import front from "../assets/front.png";
import back from "../assets/back.png";
import saba from "../assets/saba.png";
import homevideo from "../assets/homevid.mp4";
import learning from "../assets/learning.mp4";
// import Lottie from 'react-lottie';
// import mouse from "../assets/mouse.json"

const Dashboard = ({ show }) => {
  // const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: mouse,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice'
  //     }
  //   };

  return (
    <div className="main">
      <div className="bg-homeimage bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center h-full  pt-[100px] pb-[200px] md:py-[120px] lg:py-[180px] 2xl:py-[300px] xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px]  relative md:hidden">
        <div className="md:grid grid-cols-2">
          <div className="col-start-2 col-end-3 text-white">
            <h4 className="text-[56px] 2xl:text-[100px] lg:text-[60px] leading-[70px] 2xl:leading-[130px]">
              Build the<br></br> Future
            </h4>
            <h4 className="mt-[40px] text-[16px] text-semibold lg:text-[24px]">
              At our company, we are passionate about creating innovative
              solutions that can shape the future of our world.
            </h4>
          </div>
        </div>

        <div className="absolute xl:bottom-[100px] bottom-[50px]  left-1/2 transform -translate-x-1/2 ">
          <h4 className="text-white text-[16px] lg:text-[24px] lg:font-semibold">
            Scroll Down
          </h4>
        </div>
        <div className="bg-imagebig w-full bg-cover bg-center h-[50px]  z-40  absolute -bottom-[5px] left-0"></div>
      </div>
      <video
        src={homevideo}
        autoPlay
        loop
        muted
        className="  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px]   z-10 w-auto min-w-full min-h-full  hidden md:flex"
      />

      <div className="absolute w-full h-full top-0  hidden md:flex">
        <div className="md:grid grid-cols-2 pt-[100px] pb-[200px] md:pb-[120px] lg:py-[120px] xl:py-[200px] 2xl:py-[300px] xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px]">
          <div className="col-start-2 col-end-3 text-white">
            <h4 className="text-[56px] 2xl:text-[100px] lg:text-[60px] leading-[70px] 2xl:leading-[130px]">
              Build the<br></br> Future
            </h4>
            <h4 className="lg:mt-[40px] mt-[20px] text-[16px] text-semibold lg:text-[20px]">
              At our company, we are passionate about creating innovative
              solutions that can shape the future of our world.
            </h4>
          </div>
        </div>
      </div>

      <div className="absolute lg:-mt-[100px] -mt-[70px] z-40 left-1/2 transform -translate-x-1/2 hidden md:flex">
        <h4 className="text-white text-[16px] lg:text-[18px] lg:font-semibold">
          Scroll Down
        </h4>
        {/* <Lottie options={defaultOptions}
              height={400}
              width={400}
              /> */}
      </div>

      <div className="bg-imagebig w-full bg-cover bg-center h-[50px]  z-40 -mt-[49px] absolute hidden md:flex"></div>

      <div className="bg-white xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[56px] xl:py-[136px] md:py-[70px] md:grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-[100px] md:gap-[30px]">
        <h4 className="col-start-1 col-end-2 text-[30px] font-semibold xl:text-[40px]">
          Your Number 1<br></br> Business Partner
        </h4>
        <div className="lg:col-start-2 lg:col-end-4 2xl:w-[677px] lg:w-[600px]">
          <h4 className=" text-[16px] xl:text-[20px] mt-[40px] md:mt-[0px]">
            TransAlliance Group harnesses various business sectors through
            problem-solving techniques, synergy and a clear-cut strategy. Our
            super power is our ability to use technology, human resources and
            strategic partnerships to solve real-world problems on a local and
            global scale.
          </h4>
          <button className="bg-primary text-white flex items-center p-[24px] rounded-[8px] text-[15px] lg:text-[20px] lg: mt-[24px] justify-center w-full md:w-auto hover:bg-blue-700">
            Download Corporate Profile
            <div className="ml-[16px]">
              <img className="w-[16px]" src={download} />
            </div>
          </button>
        </div>
      </div>

      <div className="bg-homeimage2 bg-no-repeat  w-full bg-cover bg-left h-[300px] md:h-[500px] xl:h-[700px] 2xl:h-[900px]   xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px]  relative">
        <div className="xl:grid grid-cols-2 xl:pt-[112px]  hidden z-40">
          <div className="col-start-2 col-end-3">
            <h4 className="lg:text-[30px] font-medium 2xl:text-[45px] text-center">
              About the Group
            </h4>
            <h4 className="pt-[20px] 2xl:text-[22px]">
              From bespoke Financial Services to Travel and Hospitality,
              TransAlliance Group is equipped and ready to be your preferred
              business partner.
            </h4>
          </div>
        </div>
        <div className="bg-slant w-full bg-cover xl:h-2/3 h-[500px]  absolute -bottom-[10px] left-0">
          <div className="grid xl:grid-cols-2 grid-cols-1 md:pt-[350px] pt-[400px]  xl:hidden xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px]">
            <div className="col-start-2 col-end-3">
              <h4 className="text-[35px] font-semibold 2xl:text-[45px] flex justify-center xl:justify-start text-center">
                About the Group
              </h4>
              <h4 className="pt-[20px] 2xl:text-[22px]">
                From bespoke Financial Services to Travel and Hospitality,
                TransAlliance Group is equipped and ready to be your preferred
                business partner.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[100px] md:hidden"></div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pb-[50px] pt-[70px] lg:pb-[50px] xl:pb-[100px]">
        <h4 className="text-[32px] font-semibold xl:text-[45px] flex justify-center text-center">
          Our Subsidiaries
        </h4>
        <h4 className="pt-[24px] 2xl:text-[18px] text-[14px] md:w-2/3 mx-auto text-center">
          Our expertise cut across various sectors and we are constantly
          expanding our reach. Whatever your needs we’ve got you covered.
        </h4>
        <div className="lg:mt-[56px] mt-[30px]">
          <img src={company} />
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[50px] lg:pb-[50px] xl:pb-[100px] bg-gray-100">
        <h4 className="text-[24px] font-semibold xl:text-[45px] flex justify-center text-center">
          The TransAlliance Advantage
        </h4>
        <h4 className="pt-[24px] 2xl:text-[18px] text-[14px] md:w-2/3 mx-auto text-center xl:mb-[70px] mb-[50px]">
          From bespoke Financial Services to Travel and Hospitality,
          TransAlliance Group is equipped and ready to be your preferred
          business partner. We are your reliable ally for
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:gap-x-[100px]  md:gap-x-[50px] gap-[30px] md:gap-y-[50px]">
          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img
                className="xl:w-[88px] md:w-[55px] w-[40px]"
                src={financial}
              />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Financial Services
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img className="xl:w-[88px] md:w-[55px] w-[40px]" src={money} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Financial Technology
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img className="xl:w-[88px] md:w-[55px] w-[40px]" src={mining} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Mining
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img className="xl:w-[88px] md:w-[55px] w-[40px]" src={energy} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Energy (Oil & Gas)
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img className="xl:w-[88px] md:w-[55px] w-[40px]" src={change} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Bureau de Change
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4">
            <div className="col-start-1 col-end-2">
              <img className="xl:w-[88px] md:w-[55px] w-[40px]" src={travel} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] xl:text-[25px] font-semibold text-text mt-[10px] 2xl:mt-[0px]">
                Travel & Hospitality
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-text xl:mt-[16px] md:mt-[10px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea co
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[100px] 2xl:px-[200px] lg:px-[100px] px-[15px] md:px-[30px]  py-[50px] lg:pb-[50px] xl:pb-[100px] bg-white">
        <h4 className="xl:text-[50px] text-[30px] flex justify-center mb-[48px] font-semibold">
          Our Partners
        </h4>
        <div>
          <div className="grid grid-cols-5 ">
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={emzor} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={fmn} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={friesland} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={michelin} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={aaa} />
            </div>
          </div>
          <div className="grid grid-cols-5 mt-[20px]">
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={binotone} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={bluebeam} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={bp} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={nl} />
            </div>
            <div className="grayscale mx-auto">
              <img className="w-[171px]" src={tech} />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[100px] 2xl:px-[200px] lg:px-[100px] px-[15px] md:px-[30px]  py-[50px] lg:pb-[50px] xl:pb-[100px] bg-gray-100">
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-y-[35px]  w-full mb-[100px]">
          <div className=" pb-[0px]  border-r-[1px] border-b-[0px] border-gray-300  items-center flex 2xl:justify-center justify-start ml-[20px] 2xl:mr-[0px]">
            <div className="mr-[20px]">
              <img className="lg:w-[60px] w-[25px] sm:w-[40px]" src={person} />
            </div>
            <div className="">
              <h4 className="text-text text-[24px] font-semibold md:text-[48px]">
                15k+
              </h4>
              <h4 className="text-[12px] md:text-[18px] text-text2 ">
                Clients
              </h4>
            </div>
          </div>
          <div className=" py-[0px]  2xl:border-r-[1px] border-b-[0px] border-gray-300 items-center flex 2xl:justify-center justify-start ml-[20px] 2xl:mr-[0px] ">
            <div className="mr-[20px]">
              <img className="lg:w-[60px] w-[25px] sm:w-[40px]" src={globe} />
            </div>
            <div className="">
              <h4 className="text-text text-[24px] font-semibold md:text-[48px]">
                5+
              </h4>
              <h4 className="text-[12px] md:text-[18px] text-text2 ">
                Countries We Operate
              </h4>
            </div>
          </div>
          <div className=" py-[0px] border-r-[1px]  2xl:border-r-[1px] border-b-[0px] border-gray-300 items-center flex 2xl:justify-center justify-start ml-[20px] 2xl:mr-[0px]">
            <div className="mr-[20px]">
              <img className="lg:w-[60px] w-[25px] sm:w-[40px]" src={globe} />
            </div>
            <div className="">
              <h4 className="text-text text-[24px] font-semibold md:text-[48px]">
                4
              </h4>
              <h4 className="text-[12px] md:text-[18px] text-text2 ">
                Countries We Operate
              </h4>
            </div>
          </div>
          <div className="pt-[0px] items-center flex 2xl:justify-center justify-start ml-[20px] 2xl:mr-[0px]">
            <div className="mr-[20px]">
              <img
                className="lg:w-[60px] w-[25px] sm:w-[40px]"
                src={subsidiary}
              />
            </div>
            <div className="">
              <h4 className="text-text text-[24px] font-semibold md:text-[48px]">
                5
              </h4>
              <h4 className="text-[12px] md:text-[18px] text-text2 ">
                Subsidiaries
              </h4>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:gap-[90px] md:gap-[50px] gap-[20px]">
          <div>
            <h4 className="lg:text-[40px] text-[25px] text-primary font-semibold xl:mb-[48px] mb-[30px] flex justify-center text-center md:justify-start ">
              Hear from our executives
            </h4>
            <video src={learning} autoPlay loop muted className="  " />
          </div>
          <div>
            <div className="relative">
              <div className="absolute top-1/2 transform -translate-x-1/2 ">
                <img className="xl:w-[30px]  md:w-[19px] w-[14px]" src={back} />
              </div>
              <div className="absolute top-1/2 transform -translate-x-1/2 right-0">
                <img
                  className="xl:w-[30px]  md:w-[19px] w-[14px] "
                  src={front}
                />
              </div>
              <div className="lg:px-[40px] px-[20px]">
                <div>
                  <h4 className="lg:text-[40px] text-[25px] text-primary font-semibold xl:mb-[48px] md:mb-[30px] mb-[20px]  lg:justify-start ">
                    Testimonials
                  </h4>
                  <h4 className="xl:text-[18px] text-[16px] text-text2 mb-[24px]">
                    Paying foreign stakeholders became so seamless thanks to
                    Transalliance Capital! We no longer have complaints or
                    delays
                  </h4>
                  <div className="flex items-center">
                    <div className="w-[55px]">
                      <img src={saba} />
                    </div>
                    <div className="ml-[24px]">
                      <h4 className="text-[20px] font-bold">Amanda Telu</h4>
                      <h4 className="mt-[5px]">CEO KORAA (FINTECH)</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;