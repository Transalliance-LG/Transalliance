import React from "react";
import aemail from "../assets/aemail.png";
import aphone from "../assets/aphone.png";
import alocation from "../assets/alocation.png";
import clock from "../assets/clock.png";
import { useForm, ValidationError } from "@formspree/react";
import america from "../assets/america.png";
import down2 from "../assets/down2.png";
import caller from "../assets/caller.png";
import map2 from "../assets/map2.png";
import map1 from "../assets/map1.png";

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
      <div className="xl:grid grid-cols-2 2xl:gap-[40px] xl:gap-[30px]">
        <div className="mb-[24px] ">
          <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
            Business Email
          </h4>
          <input
            className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
            type="email"
            name="email"
            id="email"
            placeholder="E.g username@companymail.com"
          />
        </div>
        <div className="mb-[24px] ">
          <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
            Website URL
          </h4>
          <input
            className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
            type="url"
            name="url"
            id="url"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="mt-[24px] ">
        <h4 className="mb-[6px] text-[16px] xl:text-[18px] text-text font-medium">
          Business name
        </h4>
        <input
          className=" w-full border-b-[2px] border-primary px-[16px] py-[19px]  rounded-t-[8px] bg-email placeholder:text-emailtext placeholder:font-light outline-primary outline-1"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your business name here"
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
        className="md:mt-[64px] mt-[40px] flex justify-center w-full lg:w-auto mx-auto text-white bg-primary hover:bg-blue-800 lg:text-[22px] text-[18px] py-[24px] px-[173px] rounded-[8px]"
      >
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <div>
      <div className="bg-contactimage bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[740px] h-[600px]  opacity-25 relative"></div>
      <div className="md:w-3/5 xl:w-[1000px] z-40 absolute top-0 xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[200px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[250px]">
        <h4 className="text-[40px] md:text-[50px] text-black font-medium leading-[60px] md:leading-[80px] xl:leading-[100px] 2xl:text-[80px] lg:text-[65px] md:text-start">
          We’d Like To Hear From You.
        </h4>
        <h4 className="text-[16px] xl:text-[20px] text-black  leading-[30px] mt-[15px] md:mt-[20px] xl:mt-[30px] md:text-start lg:text-[18px]  ">
          Please use any of the means below to contact us.
        </h4>
      </div>

      <div className="xl:mx-[50px] 2xl:mx-[100px] lg:mx-[50px]  md:mx-[30px] xl:my-[54px]  sm:my-[30px] md:border-[2px] border-primary border-y-[2px] px-[15px]  xl:p-[25px] 2xl:p-[50px] lg:p-[30px] md:p-[30px] sm:py-[50px] py-[30px] items-start grid grid-cols-1 sm:grid-cols-2 xl:flex justify-between gap-[40px] ">
        <div>
          <div className="flex items-center">
            <div>
              <img className="2xl:w-[30px] w-[25px]" src={aemail} />
            </div>
            <h4 className="ml-[8px] 2xl:text-[20px] text-[16px] font-medium text-text">
              Email Us
            </h4>
          </div>
          <h4 className="text-[16px] 2xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            info@transalliance.ng
          </h4>
        </div>

        <div>
          <div className="flex items-center">
            <div>
              <img className="2xl:w-[30px] w-[20px]" src={aphone} />
            </div>
            <h4 className="ml-[8px] 2xl:text-[20px] text-[16px] font-medium text-text">
              Call Us
            </h4>
          </div>
          <h4 className="text-[16px] 2xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            +234 803 306 8371
          </h4>
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <img className="2xl:w-[25px] w-[20px]" src={alocation} />
            </div>
            <h4 className="ml-[8px] 2xl:text-[20px] text-[16px] font-medium text-text">
              Find Us
            </h4>
          </div>

          <h4 className="ttext-[16px] 2xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            200c Muri Okunola Street,
          </h4>
          <h4 className="text-[16px] 2xl:text-[20px] mt-[10px] 2xl:mt-[20px]">
            Victoria Island, Lagos.
          </h4>
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <img className="2xl:w-[30px] w-[25px]" src={clock} />
            </div>
            <h4 className="ml-[8px] 2xl:text-[20px] text-[16px] font-medium text-text">
              Opening Hours
            </h4>
          </div>
          <h4 className="text-[16px] 2xl:text-[20px] mt-[16px] 2xl:mt-[20px]">
            Monday - Friday 10am - 5PM (GMT+1)
          </h4>
        </div>
      </div>

      <div className="xl:mx-[50px] 2xl:mx-[100px] lg:mx-[50px] px-[15px] md:mx-[30px] xl:py-[54px] py-[40px] md:py-[30px] bg-gray-100">
        <div className="md:grid grid-cols-1 md:grid-cols-2 md:gap-[0px]   gap-[38px] items-start md:grid-flow-col ">
          <div className="  mb-[20px] md:mb-[0px]">
            <div className="md:w-4/5 mx-auto">
              <h4 className="md:w-1/2 text-[25px] font-medium lg:text-[30px] 2xl:text-[40px] 2xl:leading-[50px]">
                Leave us a Message
              </h4>
              <h4 className="mt-[8px] 2xl:mt-[15px] text-[15px] lg:text-[16px]">
                Need more information? Fill out the form on the left and one of
                our agents will be happy reach you.
              </h4>
            </div>
            <div className=" xl:mt-[30px] md:mt-[20px] mt-[10px]">
              <img className="md:w-1/2 w-[133px]" src={caller} />
            </div>
          </div>
          <div
            className="xl:px-[30px] lg:px-[15px] col-start-1 col-end-2 
          md:px-[10px] "
          >
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="xl:mx-[50px] 2xl:mx-[100px] lg:mx-[50px]  md:mx-[30px] xl:my-[54px] md:my-[30px]">
        <img className="hidden md:flex" src={map1} />
        <img className="md:hidden" src={map2} />
      </div>
    </div>
  );
};

export default Contact;
