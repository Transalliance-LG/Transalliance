import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "../assets/download.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import company from "../assets/company.png";
import aemail from "../assets/aemail.png";
import aphone from "../assets/aphone.png";
import alocation from "../assets/alocation.png";
import { useForm, ValidationError } from "@formspree/react";
import america from "../assets/america.png";
import down2 from "../assets/down2.png";
import anthony from "../assets/anthony.jpg";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkjypzy");
  const refresh = () => window.location.reload(true);

  if (state.succeeded) {
    return (
      <div className="bg-blue-50 rounded-[5px] py-[10px] px-[10px] md:px-[30px]">
        <h4 className=" text-[25px] font-semibold">Thanks!</h4>
        <h4 className=" w-full  mt-[10px]  text-[16px] ">
          The form was submitted successfully.
        </h4>
        <button
          onClick={refresh}
          className=" text-red-400  mt-[10px]  text-[16px] "
        >
          Go back to form
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
          Your Email here
        </h4>
        <input
          className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address here"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mt-[24px] lg:mt-[30px] 2xl:mt-[40px]">
        <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
          Your name
        </h4>
        <input
          className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
        />
      </div>
      <div className="mt-[24px] lg:mt-[30px] 2xl:mt-[40px] relative">
        <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
          Contact Phone (Optional)
        </h4>
        <div className="absolute flex items-center left-[16px] bottom-[10px]">
          <div>
            <img className="w-[48px]" src={america} />
          </div>
          <div className="ml-[14px]">
            <img className="w-[11px]" src={down2} />
          </div>
        </div>
        <input
          className=" w-full border-b-[2px] border-primary pl-[110px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
          type="telephone"
          name="telephone"
          id="telephone"
          placeholder="Phone number we can reach you on"
        />
      </div>
      <div className="mt-[24px] lg:mt-[30px] 2xl:mt-[40px]">
        <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
          What would you like to discuss?
        </h4>
        <textarea
          className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
          placeholder="Tell us about your needs, or opportunities"
          rows="5"
          id="message"
          name="message"
        />
      </div>

      {/* {response && (
              <h4 className="flex justify-center w-full bg-blue-50 mt-[32px] rounded-[5px] text-[16px] py-[10px]">
                {response}
              </h4>
            )} */}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-[64px] flex justify-center w-full md:w-auto mx-auto text-white bg-primary hover:bg-blue-800 lg:text-[22px] text-[18px] py-[24px] px-[173px] rounded-[8px]"
      >
        Submit
      </button>
    </form>
  );
}

const Invest = () => {
  return (
    <div>
      <div className="bg-investimage bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[740px] h-[600px]  relative xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[150px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[350px]">
        <div className="md:w-3/5">
          <h4 className="text-[40px] md:text-[50px] text-white font-medium leading-[60px] md:leading-[60px] xl:leading-[100px] 2xl:text-[80px] lg:text-[65px] md:text-start">
            Investment Opportunities
          </h4>
          <h4 className="text-[16px] text-white font-light leading-[30px] mt-[15px] md:mt-[30px] xl:mt-[30px] md:text-start lg:text-[18px]  ">
            We offer our customers insights from curated third-party research
            firms and our in-house market analysis team. Our investors also have
            access to personalized financial advice, high-quality investments,
            tools, and relevant market insights that help you build a profitable
            future
          </h4>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[64px] py-[40px] md:py-[40px] ">
        <h4 className="text-[20px] xl:text-[30px] md:w-2/4 mx-auto text-center">
          We offer multiple ways for you to invest with us, and specific
          qualities that appeal to investors
        </h4>
        <div className="flex justify-center">
          <button className="bg-primary text-white flex items-center p-[24px] rounded-[8px] text-[15px] lg:text-[20px] mt-[40px] hover:bg-blue-800 justify-center w-auto">
            Download investment Deck
            <div className="ml-[16px]">
              <img className="w-[16px]" src={download} />
            </div>
          </button>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[54px] py-[20px] md:py-[30px] ">
        <h4 className="text-[25px] xl:text-[40px] md:w-2/4 mx-auto text-center font-semibold">
          Your satisfaction is guaranteed and your security is our priority.
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-[30px]  md:gap-x-[50px] gap-[45px] md:gap-y-[50px] mt-[47px] 2xl-mt-[72px]">
          <div className="2xl:grid grid-cols-4 2xl:gap-[20px]">
            <div className="col-start-1 col-end-2">
              <img className=" w-[53px] 2xl:w-full " src={icon1} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] md:text-[22px] font-semibold  mt-[10px] 2xl:mt-[0px] text-primary">
                Financial Services
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-primary xl:mt-[16px] mt-[10px] xl:leading-[30px] leading-[25px]">
                There are no conflicting loyalties getting in the way of
                focusing on your interests.
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4 2xl:gap-[20px]">
            <div className="col-start-1 col-end-2">
              <img className=" w-[53px] 2xl:w-full " src={icon2} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] md:text-[22px] font-semibold  mt-[10px] 2xl:mt-[0px] text-primary">
                Greater conviction
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-primary xl:mt-[16px] mt-[10px] xl:leading-[30px] leading-[25px]">
                We act with conviction on the investment themes that are
                important to you.
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4 2xl:gap-[20px]">
            <div className="col-start-1 col-end-2">
              <img className=" w-[53px] 2xl:w-full " src={icon3} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] md:text-[22px] font-semibold  mt-[10px] 2xl:mt-[0px] text-primary">
                Long-term perspective
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-primary xl:mt-[16px] mt-[10px] xl:leading-[30px] leading-[25px]">
                We can focus on the long term rather than quarterly results.
              </h4>
            </div>
          </div>

          <div className="2xl:grid grid-cols-4 2xl:gap-[20px]">
            <div className="col-start-1 col-end-2">
              <img className=" w-[53px] 2xl:w-full " src={icon4} />
            </div>
            <div className="col-start-2 col-end-5">
              <h4 className="text-[18px] md:text-[22px] font-semibold  mt-[10px] 2xl:mt-[0px] text-primary">
                Full Transparency
              </h4>
              <h4 className="text-[12px] md:text-[16px] xl:text-[18px] text-primary xl:mt-[16px] mt-[10px] xl:leading-[30px] leading-[25px]">
                We keep our investors regularly in the know with returns and key
                industry developments.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:mx-[50px] 2xl:mx-[100px] lg:mx-[50px]  md:mx-[30px] xl:my-[54px] my-[40px] md:my-[30px] md:border-[2px] border-primary border-y-[2px] px-[15px]  xl:p-[25px] 2xl:p-[50px] lg:p-[30px] md:p-[30px] py-[50px] items-start md:flex justify-between">
        <div className="mb-[40px] md:mb-[0px]">
          <div className="flex items-center">
            <div>
              <img className="w-[30px]" src={aemail} />
            </div>
            <h4 className="ml-[8px] text-[20px] font-medium text-text">
              Email Us
            </h4>
          </div>
          <h4 className="text-[16px] xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            investor-relations@transalliance.ng
          </h4>
          <h4 className="text-[16px] xl:text-[20px] mt-[10px] 2xl:mt-[20px]">
            anthonynwosu@transalliance.ng
          </h4>
        </div>

        <div className="mb-[40px] md:mb-[0px]">
          <div className="flex items-center">
            <div>
              <img className="w-[20px]" src={aphone} />
            </div>
            <h4 className="ml-[8px] text-[20px] font-medium text-text">
              Call Us
            </h4>
          </div>
          <h4 className="text-[16px] xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            +234 803 306 8371
          </h4>
        </div>

        <div>
          <div className="flex items-center">
            <div>
              <img className="w-[20px]" src={alocation} />
            </div>
            <h4 className="ml-[8px] text-[20px] font-medium text-text">
              Find Us
            </h4>
          </div>
          <h4 className="text-[16px] xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            200c Muri Okunola Street,
          </h4>
          <h4 className="text-[16px] xl:text-[20px] mt-[10px] 2xl:mt-[20px]">
            Victoria Island, Lagos.
          </h4>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[54px] py-[20px] md:py-[30px] ">
        <h4 className="text-[25px] 2xl:text-[40px] text-center font-semibold mb-[40px]">
          Learn more about investing in TransAlliance Group
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-[38px] items-start">
          <div className=" grid grid-cols-1 xl:grid-cols-3 items-center gap-[20px]">
            <div className="xl:col-start-1 xl:col-end-2 ">
              <img
                className="lg:w-[300px] w-[300px] transform "
                src={anthony}
              />
            </div>
            <div className="xl:col-start-2 xl:col-end-4">
              <div className="mb-[30px]">
                <div className="flex items-center">
                  <div>
                    <img className="w-[30px]" src={aemail} />
                  </div>
                  <h4 className="ml-[15px] text-[18px] font-medium text-text">
                    Talk to Anthony
                  </h4>
                </div>

                <h4 className="text-[16px] xl:text-[20px] mt-[5px] 2xl:mt-[10px]">
                  anthonynwosu@transalliance.ng
                </h4>
              </div>

              <div className="">
                <div className="flex items-center">
                  <div>
                    <img className="w-[20px]" src={aphone} />
                  </div>
                  <h4 className="ml-[15px] text-[18px] font-medium text-text">
                    Call Anthony
                  </h4>
                </div>
                <h4 className="text-[16px] xl:text-[20px] mt-[5px] 2xl:mt-[10px]">
                  +234 803 306 8371
                </h4>
              </div>
            </div>
          </div>
          <div className="xl:px-[60px] lg:px-[30px]">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] py-[50px] lg:pb-[50px] xl:pb-[100px] ">
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
    </div>
  );
};

export default Invest;
