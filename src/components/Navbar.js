import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import down from "../assets/down.png";
import burger from "../assets/burger.png";
import cancel from "../assets/cancel.png";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const Navbar = ({ show, setShow }) => {
  const [fix, setFix] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  function setFixed() {
    if (window.scrollY >= 600) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  function handleMouseEnter(e) {
    setIsHovering(true);
  }

  useEffect(() => {
    handleMouseEnter();
  }, []);

  return (
    <div
      className={
        fix
          ? "fixed w-full 2xl:mt-[200px] lg:mt-[100px]  z-40 mt-[70px]"
          : "sticky z-40 "
      }
    >
      <div
        className={
          show
            ? "hidden  2xl:pt-[72px] 2xl:pb-[40px] py-[20px] xl:flex justify-between items-center xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] backdrop-blur-[7px]"
            : "  2xl:pt-[72px] 2xl:pb-[40px] py-[20px] flex justify-between items-center xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] backdrop-blur-[7px]"
        }
      >
        <div
          className={
            show
              ? "hidden xl:inline w-[153px] lg:w-[200px] 2xl:w-[300px]"
              : " w-[153px] lg:w-[200px] 2xl:w-[300px] "
          }
        >
          {fix ? (
            <NavLink to="#">
              <img src={logo2} />
            </NavLink>
          ) : (
            <NavLink to="#">
              <img src={logo} />
            </NavLink>
          )}
        </div>
        <div className="xl:flex hidden">
          <div className=" flex items-center px-[16px]">
            <h4
              className={
                fix
                  ? "text-black text-[12px] md:text-[16px] 2xl:text-[22px] font-normal"
                  : "text-white text-[12px] md:text-[16px] 2xl:text-[22px] font-normal  "
              }
            >
              <NavLink to="/">Home</NavLink>
            </h4>
          </div>
          <h4
            className={
              fix
                ? "text-black text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] px-[16px]"
                : "text-white text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] px-[16px]"
            }
          >
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                borderBottom: isActive && fix ? "3px solid black" : "white",
                paddingLeft: isActive ? 5 : 0,
                paddingRight: isActive ? 5 : 0,
              })}
            >
              About Us
            </NavLink>
          </h4>

          <div className="right-menu">
            <div
              onMouseEnter={handleMouseEnter}
              className=" flex items-center px-[16px] button"
            >
              <h4
                className={
                  fix
                    ? "text-black text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] "
                    : "text-white text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] "
                }
              >
                <NavLink
                  to="/#"
                  //   style={({ isActive }) => ({
                  //     borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                  //     paddingLeft: isActive ? 5 : 0,
                  //     paddingRight: isActive ? 5 : 0,
                  //   })}
                >
                  Companies
                </NavLink>
              </h4>
              <div className={isHovering ? "" : "rotate-90"}>
                <img
                  className={fix ? "w-[10px] invert" : "w-[10px]"}
                  src={down}
                />
              </div>
            </div>
            <div className="dropdown-menu rounded-[10px]">
              <h4 className="text-black p-[15px] hover:rounded-t-[10px] hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer">
                <NavLink
                  to="/capital"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                    borderBottom: isActive && fix ? "3px solid black" : "white",
                    paddingLeft: isActive ? 5 : 0,
                    paddingRight: isActive ? 5 : 0,
                  })}
                >
                  TransAlliance Capital
                </NavLink>
              </h4>
              <h4 className="text-black p-[15px]  hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer">
                <NavLink
                  to="/mineral"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                    paddingLeft: isActive ? 5 : 0,
                    paddingRight: isActive ? 5 : 0,
                  })}
                >
                  TransAlliance Mineral
                </NavLink>
              </h4>
              <h4 className="text-black p-[15px]  hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer">
                <NavLink
                  to="/travels"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                    borderBottom: isActive && fix ? "3px solid black" : "white",
                    paddingLeft: isActive ? 5 : 0,
                    paddingRight: isActive ? 5 : 0,
                  })}
                >
                  Fazo Travels
                </NavLink>
              </h4>
              <h4 className="text-black p-[15px] hover:rounded-b-[10px] hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer">
                <NavLink
                  to="/energy"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                    borderBottom: isActive && fix ? "3px solid black" : "white",
                    paddingLeft: isActive ? 5 : 0,
                    paddingRight: isActive ? 5 : 0,
                  })}
                >
                  TransAlliance Energy
                </NavLink>
              </h4>
            </div>
          </div>

          <h4
            className={
              fix
                ? "text-black text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] px-[16px]"
                : "text-white text-[12px] md:text-[16px] 2xl:text-[22px] font-normal mr-[8px] px-[16px]"
            }
          >
            <NavLink
              to="/invest"
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                borderBottom: isActive && fix ? "3px solid black" : "white",
                paddingLeft: isActive ? 5 : 0,
                paddingRight: isActive ? 5 : 0,
              })}
            >
              Invest in TAG
            </NavLink>
          </h4>
        </div>
        <div className="xl:flex hidden items-center">
          <div className=" flex items-center px-[16px] mr-[22px]">
            <div>
              <img
                className={fix ? "w-[19px] invert" : "w-[19px] "}
                src={mail}
              />
            </div>
            <h4
              className={
                fix
                  ? "text-black text-[12px] md:text-[16px] lg:text-[16px] font-normal ml-[8px] "
                  : "text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal ml-[8px] "
              }
            >
              <NavLink
                to="info@translliance.com"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                  borderBottom: isActive && fix ? "3px solid black" : "white",
                  paddingLeft: isActive ? 5 : 0,
                  paddingRight: isActive ? 5 : 0,
                })}
              >
                info@translliance.com
              </NavLink>
            </h4>
          </div>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              background: isActive ? "black" : "#fff",
              //   background: isActive && fix ? "#fff" : "black",
              color: isActive ? "white" : "#0B1CBA",
              //   color: isActive && fix ? "#0B1CBA" : "white",
              borderRadius: isActive ? "8px" : "8px",
            })}
          >
            <button className=" hover:gray-blue-400 flex items-center px-[29px] py-[14px] rounded-[8px]  text-[12px] md:text-[16px] lg:text-[16px] font-semibold">
              Contact Us{" "}
            </button>
          </NavLink>
        </div>
        <div className={show ? "hidden" : "xl:hidden hover:cursor-pointer"}>
          <img
            className={fix ? "w-[25px] invert" : "w-[25px]"}
            onClick={() => setShow(!show)}
            src={burger}
          />
        </div>
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] ">
        <div
          className={`top-0 left-0 z-40 absolute w-full h-screen xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:hidden  ${
            show ? "translate-y-0" : "-translate-y-[1300px]"
          } ease-in-out duration-500`}
        >
          <div className=" lg:py-[16px] py-[20px] flex justify-between items-center xl:hidden">
            <div className="  z-40">
              <img
                className=" w-[153px] lg:w-[200px] 2xl:w-[300px]"
                src={logo}
              />
            </div>
            <div className="hover:cursor-pointer">
              <img
                className="w-[25px] invert"
                onClick={() => setShow(!show)}
                src={cancel}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <div className=" xl:hidden">
              <div className="  lg:px-[16px] h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal  hover:cursor-pointer flex justify-center "
                >
                  <NavLink to="/">Home</NavLink>
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
                >
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "3px solid white" : "#f0f0f0",

                      paddingLeft: isActive ? 5 : 0,
                      paddingRight: isActive ? 5 : 0,
                    })}
                  >
                    About us
                  </NavLink>
                </h4>
              </div>

              <div className="  lg:px-[16px]  min-h-fit">
                <h4
                  onClick={() => setShow2(!show2)}
                  className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal mr-[8px] hover:cursor-pointer flex justify-center"
                >
                  Companies
                </h4>
              </div>
              <div className={show2 ? "" : "hidden"}>
                <div className="bg-white rounded-[10px]">
                  <h4
                    onClick={() => setShow(!show)}
                    className="text-black p-[15px] hover:rounded-t-[10px] hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer flex justify-center"
                  >
                    <NavLink
                      to="/capital"
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "black 3px solid" : " ",

                        paddingLeft: isActive ? 5 : 0,
                        paddingRight: isActive ? 5 : 0,
                      })}
                    >
                      TransAlliance Capital
                    </NavLink>
                  </h4>
                  <h4
                    onClick={() => setShow(!show)}
                    className="text-black p-[15px]  hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer flex justify-center"
                  >
                    <NavLink
                      to="/mineral"
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "black 3px solid" : " ",

                        paddingLeft: isActive ? 5 : 0,
                        paddingRight: isActive ? 5 : 0,
                      })}
                    >
                      TransAlliance Mineral
                    </NavLink>
                  </h4>
                  <h4
                    onClick={() => setShow(!show)}
                    className="text-black p-[15px]  hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer flex justify-center"
                  >
                    <NavLink
                      to="/travels"
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "black 3px solid" : " ",

                        paddingLeft: isActive ? 5 : 0,
                        paddingRight: isActive ? 5 : 0,
                      })}
                    >
                      Fazo Travels
                    </NavLink>
                  </h4>
                  <h4
                    onClick={() => setShow(!show)}
                    className="text-black p-[15px] hover:rounded-b-[10px] hover:text-white hover:bg-black  text-[12px] md:text-[16px]  font-normal cursor-pointer flex justify-center"
                  >
                    <NavLink
                      to="/energy"
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "black 3px solid" : " ",

                        paddingLeft: isActive ? 5 : 0,
                        paddingRight: isActive ? 5 : 0,
                      })}
                    >
                      TransAlliance Energy
                    </NavLink>
                  </h4>
                </div>
              </div>

              <div className="h-[70px] mt-[50px]  min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  <NavLink
                    to="/invest"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "3px solid white" : "#f0f0f0",

                      paddingLeft: isActive ? 5 : 0,
                      paddingRight: isActive ? 5 : 0,
                    })}
                  >
                    Invest in TAG
                  </NavLink>
                </h4>
              </div>
              <div
                onClick={() => setShow(!show)}
                className="h-[70px] min-h-fit"
              >
                <div className=" flex items-center px-[16px]">
                  <div>
                    <img className="w-[19px]" src={mail} />
                  </div>
                  <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal ml-[8px] ">
                    <NavLink
                      to="/info@translliance.com"
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "3px solid white" : "#f0f0f0",
                        borderBottom:
                          isActive && fix ? "3px solid black" : "white",
                        paddingLeft: isActive ? 5 : 0,
                        paddingRight: isActive ? 5 : 0,
                      })}
                    >
                      info@translliance.com
                    </NavLink>
                  </h4>
                </div>
              </div>

              <NavLink
                onClick={() => setShow(!show)}
                to="/contact"
                style={({ isActive }) => ({
                  //   backgroundc: isActive ? "#0B1CBA" : "white",
                  //   background: isActive && fix ? "#fff" : "black",
                  color: isActive ? "white" : "#0B1CBA",
                  //   color: isActive && fix ? "#0B1CBA" : "white",
                  borderRadius: isActive ? "8px" : "8px",
                })}
              >
                <button className=" hover:gray-blue-400 flex mx-auto justify-center px-[80px] py-[14px] rounded-[8px]  text-[12px] md:text-[16px] lg:text-[16px] font-semibold bg-white">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
