import React from 'react';
import { FcApproval } from "react-icons/fc";
import { TbUserCircle } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import {
  AiFillMail,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

function Attention() {
  return (
    <div>
    <div className="bg-white rounded-lg flex p-[20px] mt-10 gap-5">
    <div className="profile flex gap-5 ">
      <img
        className="rounded-lg padding-[10px] w-[200px]"
        src="./profile.jpg"
        alt="Loading..."
      />

      <div className="">
        <div className="flex gap-2">
          <h3 className="font-[Rubik] font-bold text-[24px] ">Max Smith</h3>
          <p className="text-[25px] ">
            <FcApproval />
          </p>
          <button className="bg-green-100 font-[Rubik] p-[5px] text-green-500 rounded-lg hover:bg-green-500 hover:text-white ">
            Upgrade to Pro
          </button>
        </div>
        <div className="flex pt-4 gap-5">
          <h3 className="text-gray-400 flex hover:text-sky-500">
            <TbUserCircle className="mt-1" /> Developer
          </h3>
          <h3 className="text-gray-400 flex hover:text-sky-500">
            <GoLocation className="mt-1 flex gap-3" /> SF, bay Area
          </h3>
          <h3 className="text-gray-400 flex hover:text-sky-500">
            <AiFillMail className="mt-1" /> max@kt.com
          </h3>

          <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
            Follow
          </div>
          <div className="bg-sky-400 p-2 rounded-lg text-white">
            Hire Me
          </div>
          <div className="bg-gray-100 p-2 rounded-lg text-gray-500 ">
            ...
          </div>
        </div>

        <div className="flex pt-6 gap-5">
          <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
            <div className="flex gap-2 text-[20px]">
              <AiOutlineArrowUp className="mt-2 text-green-500" />
              <h3 className="font-bold text-[25px] "> $4,500</h3>
            </div>
            <p className="text-gray-400 ">Earnings</p>
          </div>

          <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
            <div className="flex gap-2 text-[20px]">
              <AiOutlineArrowDown className="mt-2 text-red-500" />
              <h3 className="font-bold text-[25px] "> 75</h3>
            </div>
            <p className="text-gray-400 ">Projects</p>
          </div>

          <div className=" border-dashed border-2 border-gray-200 rounded-lg p-4">
            <div className="flex gap-2 text-[20px]">
              <AiOutlineArrowUp className="mt-2 text-green-500" />
              <h3 className="font-bold text-[25px] "> %60</h3>
            </div>
            <p className="text-gray-400 ">success Rate</p>
          </div>

          <div>
          <div className="flex justify-around gap-10">
          <p>Profile Compleation</p>
          <h2>50%</h2>
          </div>
            <input type="range" className=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default Attention
