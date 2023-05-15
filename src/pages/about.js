import React from "react";
import press from "../assets/press.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import company from "../assets/company.png";
import learning from "../assets/learning.mp4";
import tlogo from "../assets/tlogo.png";
import comment from "../assets/comment.png";
import retweet from "../assets/retweet.png";
import heart from "../assets/heart.png";
import share from "../assets/share.png";
import twitterimage from "../assets/twitterimage.png";

const About = () => {
  const twitter = [
    {
      text: "Everyone nurses a dream of owning or starting their own business. But the truth still remains that we all need a certain level of knowledge, skills, capital etc when starting a personal business.",
      image: twitterimage,
    },
    {
      text: "Interesting word of knowledge from the GED Finance and Budget TransAlliance Group on achieving financial stability.",
    },
    {
      text: "With Robo-advisors rapidly gaining popularity, I anticipate investment methods will become increasingly simple....more investment options will be as simple as clicking a button. - Kirill Schmidt, Head of Financial Services at Tranio",
    },
    {
      text: "Interesting word of knowledge from the GED Finance and Budget TransAlliance Group on achieving financial stability.",
    },
    {
      text: "With Robo-advisors rapidly gaining popularity, I anticipate investment methods will become increasingly simple....more investment options will be as simple as clicking a button. - Kirill Schmidt, Head of Financial Services at Tranio",
    },
  ];

  const tag = [
    {
      hash: "#business",
    },
    { hash: "#businessmen" },
    { hash: "#transalliancegroup" },
    { hash: "#makingmoney" },
    { hash: "#moneymaker" },
  ];
  return (
    <div className="">
      <div className="bg-aboutbg bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[879px] h-[555px]  relative">
        <div className="bg-stripe bg-no-repeat w-full bg-cover bg-center sm:h-full h-[100px] absolute xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[100px] pb-[400px] md:py-[120px] lg:py-[180px] 2xl:py-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col gap-[40px] md:gap-[0px] md:gap-y-[80px] lg:gap-y-[120px] xl:gap-y-[160px]">
          <div>
            <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
              99.9%
            </h4>
            <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
              Client Satisfaction
            </h4>
          </div>
          <div className="md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
            <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
              180M+
            </h4>
            <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
              Closed deals
            </h4>
          </div>
          <div className="md:col-start-3 md:col-end-4">
            <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
              Reach
            </h4>
            <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
              50+ partnerships
            </h4>
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[32px] md:py-[50px] xl:py-[88px]">
        <h4 className="md:w-3/4 text-center mx-auto  text-[20px] lg:text-[36px]">
          Since 2020 we’ve been working with amazing organizations to create
          meaningful impact and compelling experiences that deliver results.
        </h4>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-[33px] pb-[24px] md:pb-[40px] xl:pb-[88px] items-center xl:px-[50px] 2xl:px-[100px] lg:px-[50px]  md:px-[30px]">
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

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[91px] bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-y-[60px] items-end">
        <div>
          <div className="flex justify-center lg:mb-[20px] mb-[8px]">
            <img className="w-[72px]" src={vision} />
          </div>
          <h4 className="flex justify-center text-[28px] lg:text-[45px] font-semibold mb-[4px] lg:mb-[15px]">
            Vision
          </h4>
          <h4 className="text-center text-[16px] lg:text-[22px] flex justify-center">
            To be the preferred partner in every sector that we{" "}
            <br className="hidden md:flex"></br>serve
          </h4>
        </div>
        <div>
          <div className="flex justify-center lg:mb-[20px] mb-[8px]">
            <img className="w-[72px]" src={mission} />
          </div>
          <h4 className="flex justify-center text-[28px] lg:text-[45px] font-semibold mb-[4px] lg:mb-[15px]">
            Mission
          </h4>
          <h4 className="text-center text-[16px] lg:text-[22px] flex justify-center">
            Consistently deliver superior value to all our
            <br className="hidden md:flex"></br>stakeholders across the globe.
          </h4>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[50px] lg:pb-[50px] xl:pb-[100px]">
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

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px]  md:px-[30px] xl:py-[88px] py-[24px] md:py-[40px] grid xl:grid-cols-2 xl:gap-[90px] md:gap-[50px] gap-[20px]">
        <div className="mx-[15px] md:mx-[0px]">
          <h4 className="lg:text-[40px] text-[25px] text-primary font-semibold xl:mb-[48px] mb-[30px] flex justify-center text-center md:justify-start ">
            Hear from our executives
          </h4>
          <video src={learning} autoPlay loop muted className="w-screen  " />
        </div>
        <div>
          <div className="lg:px-[40px] md:px-[20px]">
            <h4 className="lg:text-[40px] text-[25px] text-primary font-semibold xl:mb-[48px] md:mb-[30px] mb-[20px]  lg:justify-start mx-[15px] md:mx-[0px]">
              Twitter Feed
            </h4>

            <div className="bg-gray-100 lg:px-[30px] px-[15px] lg:py-[10px] py-[5px] lg:h-[calc(100vh-5.75rem)] h-[calc(70vh-5.75rem)] top-16 overflow-y-auto">
              {twitter.map((twit, i) => (
                <div>
                  <div className="bg-white my-[20px] lg:p-[30px] p-[20px]">
                    <div className="md:flex   border-b-[2px] border-gray-200 ">
                      <div>
                        <img className="min-w-[50px] w-[50px]" src={tlogo} />
                      </div>
                      <div className="md:ml-[16px]">
                        <div className="">
                          <div className="flex mt-[10px] md:mt-[0px]">
                            <h4 className="text-[16px] font-medium mr-[10px]">
                              TransAllianceng
                            </h4>
                            <h4 className="text-[16px]  mr-[10px] text-gray-500">
                              @tagng
                            </h4>
                            <h4 className="text-[16px]  mr-[10px] text-gray-500">
                              0m
                            </h4>
                          </div>
                          <h4 className="text-[14px] font-medium mt-[20px]">
                            {twit.text}
                          </h4>
                          <div className="mt-[20px]">
                            <img
                              className="max-w-[405px] min-w-[100px] w-11/12 md:mx-[0px] mx-auto"
                              src={twit.image}
                            />
                          </div>
                          <div className="-ml-[10px] mt-[20px]">
                            {tag.map((tag, i) => (
                              <h4 className="border-b-[2px] border-sky-300 inline-block ml-[10px] text-sky-500 text-[14px]">
                                {tag.hash}
                              </h4>
                            ))}
                          </div>
                          <div className="flex justify-between w-4/5 lg:w-[300px] 2xl:w-[300px] mt-[30px]  mb-[20px]">
                            <div>
                              <img className="w-[18px]" src={comment} />
                            </div>
                            <div>
                              <img className="w-[18px]" src={retweet} />
                            </div>
                            <div>
                              <img className="w-[18px]" src={heart} />
                            </div>
                            <div>
                              <img className="w-[18px]" src={share} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
