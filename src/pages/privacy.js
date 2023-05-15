import React from "react";

const Privacy = () => {
  const privacies = [
    {
      heading: "Privacy Policy",
      date: "Effective as of 12/08/2020",
      body: "Our commitment to transparency applies not only to the food we source, but also to the data we collect about you, how it is used and with whom it is shared. This Privacy Policy describes how Grocery Delivery E-Services USA, INC. dba Chefspice (“Chefspice”, “we”, “us” or “our”) collect, use and share your personal information in connection with your use of our websites (collectively, the “Site”), mobile applications (collectively, the “App”), and social media pages that link to this Privacy Policy (together with the “Site” and “App”, the “Service”); and in the context of certain offline activities described in this notice.",
      listHeading:
        "We provide important information for California residents here.",
    },
  ];

  const list = [
    "Table of Contents",
    "Personal information we collect",
    "How we use your personal information",
    "How we share your personal information",
    "Your choices ",
    "Other sites and services ",
    "Security practices",
    "International data transfers ",
    "Children",
    "Important information for California residents",
    "Personal information we collect",
    "Information you provide to us",
  ];

  const second = [
    {
      head: "Personal information you may provide to us through the Service or otherwise includes:",
      list: "- Contact data, such as your first and last name, email and mailing addresses, postal code, and phone number.\n- Profile data, such as your username and password that you set to establish an online account with us, and other information you include in your account profile.\n- Communications that we exchange when you communicate with us, such as when you request support, contact us with questions or feedback or complete our surveys.\n- Content, such comments, text, images, audio, video or other content you post to or provide through the Service.\n- Payment and transactional data, such as the information needed to complete your orders on or through the Service (including name, credit card information, billing and shipping information), information about your payment transactions, and your order history.\n- Marketing data, such as your preferences for receiving communications about our products, activities, events, and publications; details about how you engage with our communications; and information you provide when you participate in an event, contest or promotion.\n- Other information that we may collect which is not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.",
    },
    {
      list: "Other sources. We may combine personal information we receive from you with personal information we obtain from other sources, such as:\n- Data providers, such as information services and data licensors.\n- Public sources, such as public social media platforms.\n- Business partners, such as joint marketing partners and event co-sponsors.",
    },
    {
      list: "- Automatic collection. We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your activity over time on the Sites and other online services, including:\n- Device data, such as your computer or mobile device as your computer operating system type and version number, manufacturer and model, browser type, screen resolution, IP address, the website you visited before browsing to our website, and general location information such as city, state or geographic area.\n- Online activity data, , such as pages or screens you viewed, how long you spent on a page or screen, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access. Precise geolocation data, such as when you authorize our mobile application to access your location.\n- Security data, such security camera footage recorded at our offices or facilities.",
    },
    {
      list: "- Contact data, such as your first and last name, email and mailing addresses, postal code, and phone number.\n- Profile data, such as your username and password that you set to establish an online account with us, and other information you include in your account profile.\n- Communications that we exchange when you communicate with us, such as when you request support, contact us with questions or feedback or complete our surveys.\n- Content, such comments, text, images, audio, video or other content you post to or provide through the Service.\n- Payment and transactional data, such as the information needed to complete your orders on or through the Service (including name, credit card information, billing and shipping information), information about your payment transactions, and your order history.\n- Marketing data, such as your preferences for receiving communications about our products, activities, events, and publications; details about how you engage with our communications; and information you provide when you participate in an event, contest or promotion.\n- Other information that we may collect which is not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.",
    },
    {
      list: "- Contact data, such as your first and last name, email and mailing addresses, postal code, and phone number.\n- Profile data, such as your username and password that you set to establish an online account with us, and other information you include in your account profile.\n- Communications that we exchange when you communicate with us, such as when you request support, contact us with questions or feedback or complete our surveys.\n- Content, such comments, text, images, audio, video or other content you post to or provide through the Service.\n- Payment and transactional data, such as the information needed to complete your orders on or through the Service (including name, credit card information, billing and shipping information), information about your payment transactions, and your order history.\n- Marketing data, such as your preferences for receiving communications about our products, activities, events, and publications; details about how you engage with our communications; and information you provide when you participate in an event, contest or promotion.\n- Other information that we may collect which is not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.",
    },
  ];

  return (
    <div>
      <div className="bg-privacy bg-no-repeat z-10  -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center xl:h-[740px] h-[400px]  relative xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] pt-[150px] pb-[100px] md:py-[150px] lg:py-[230px] 2xl:py-[350px] flex justify-center items-center text-[40px] md:text-[60px] xl:text-[100px] font-semibold text-white">
        Privacy
      </div>

      <div className="xl:px-[300px] 2xl:px-[400px] lg:px-[200px] px-[15px] md:px-[100px] xl:py-[54px] py-[20px] md:py-[30px] ">
        {privacies.map((privacy, i) => (
          <div key={i}>
            <h4 className="text-[24px] font-semibold md:w-[50px] md:leading-[30px] mb-[24px] md:mb-[0px] mt-[24px]">
              {privacy.heading}
            </h4>
            <h4 className="mb-[24px] md:mb-[12px] lg:text-[18px] text-[16px]">
              {privacy.date}
            </h4>
            <h4 className="mb-[24px] md:mb-[12px] lg:text-[18px] text-[16px]">
              {privacy.body}
            </h4>
            <h4 className="mb-[24px] md:mb-[12px] lg:text-[20px] text-[18px] font-semibold">
              {privacy.listHeading}
            </h4>
            {list.map((lists, i) => (
              <h4 className="mb-[24px] md:mb-[12px] lg:text-[18px] text-[16px] font-medium">
                {lists}
              </h4>
            ))}
          </div>
        ))}

        {second.map((second, i) => (
          <div>
            <h4 className="text-[16px] font-bold">{second.head}</h4>
            <h4 className=" whitespace-pre-line mt-[24px] md:mt-[20px] lg:text-[18px] text-[16px]">
              {second.list}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
