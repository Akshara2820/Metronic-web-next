import React from "react";
import Card from "./card";
import { FcApproval } from "react-icons/fc";
import { TbUserCircle } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import {
  AiFillMail,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

function Profile() {
  return (
    <>
      <div className="bg-white lg:mx-40 md:mx-8 rounded-lg">
        <div className="p-6 mt-12 ">
          <div className=" lg:flex gap-5 xl:flex-wrap md:flex">
            <div>
              <img
                className="xl:w-60 xl:h-60 rounded-lg lg:w-60 lg:h-60  md:w-32 md:h-32 h-24 w-24 "
                src="./profile.jpg"
                alt="loding.."
              />
            </div>
            <div className="flex">
              <div className="mt-4">
                <div className="lg:flex flex gap-2 ">
                  <h3 className=" font-bold md:text-[24px] text-[16px] ">
                    Max Smith
                  </h3>
                  <p className="md:text-[25px] mt-1">
                    <FcApproval />
                  </p>
                  <button className="bg-green-100 font-[Rubik] md:p-[5px] text-green-500 rounded-lg hover:bg-green-500 hover:text-white ">
                    Upgrade to Pro
                  </button>
                </div>

                <div className="lg:flex flex-wrap">
                  <div className="flex flex-wrap pt-4 gap-5">
                    <h3 className="text-gray-400 flex hover:text-sky-500">
                      <TbUserCircle className="mt-1" /> Developer
                    </h3>
                    <h3 className="text-gray-400 flex hover:text-sky-500">
                      <GoLocation className="mt-1 flex gap-3" /> SF, bay Area
                    </h3>
                    <h3 className="text-gray-400 flex hover:text-sky-500">
                      <AiFillMail className="mt-1" /> max@kt.com
                    </h3>
                  </div>

                  <div className="flex gap-5 md:mt-0 mt-5 items-center">
                    <div className="bg-gray-100 p-2 rounded-lg font-semibold text-[12px] text-gray-500">
                      follow
                    </div>
                    <div className="bg-sky-500 text-white p-2  rounded-lg font-semibold text-[12px]">
                      Hire Me
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">...</div>
                  </div>
                </div>

                <div className=" pt-6">
                  <div className="flex gap-5 md:flex-wrap flex-wrap">
                    <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex gap-2 text-[20px]">
                        <AiOutlineArrowUp className="mt-2 text-green-500" />
                        <h3 className="font-bold text-[25px] md:w-[100px]">
                          $4,500
                        </h3>
                      </div>
                      <p className="text-gray-400 ">Earnings</p>
                    </div>

                    <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex gap-2 text-[20px]">
                        <AiOutlineArrowDown className="mt-2 text-red-500" />
                        <h3 className="font-bold text-[25px] md:w-[100px] w-[50px]"> 75</h3>
                      </div>
                      <p className="text-gray-400 ">Projects</p>
                    </div>

                    <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex gap-2 text-[20px]">
                        <AiOutlineArrowUp className="mt-2 text-green-500" />
                        <h3 className="font-bold text-[25px] md:w-[100px]">
                          %60
                        </h3>
                      </div>
                      <p className="text-gray-400 ">success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Profile;