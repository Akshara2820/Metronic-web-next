import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

function Attention() {
  return (
    <>
      <div className="bg-white lg:mx-40 md:mx-8 rounded-lg">
        <div className="p-8">
          <div className="p-5 bg-yellow-50 rounded-lg border-dashed border-2 border-yellow-300 ">
            <div className="flex gap-5 font-bold text-[22px]">
              <div>
                <RiErrorWarningFill className="text-[24px] text-yellow-300" />
              </div>
              <div>We need your attention!</div>
            </div>
            <div className="text-gray-500 md:flex gap-2">
              Your payment was declined. To start using tools, please
              <div className="text-blue-400 hover:text-gray-500">
                Add Payment Method.
              </div>
            </div>
          </div>

          <div className="md:flex flex-wrap justify-between mt-5">
            <div>
              <div className="font-bold md:text-[24px] text-[20px]">
                Actice until Dec 09,2022
              </div>
              <div className="text-gray-500">
                We will send you a notification upon Subscription expiration
              </div>
            </div>

            <div>
              <div className="text-gray-500">
                14 Users remaining until your plan requires update
              </div>
            </div>
          </div>

          <div className="md:flex flex-wrap justify-between mt-5">
            <div>
              <div className="flex gap-2">
                <div className="text-gray-700 font-bold">$24.99</div>
                <div className="text-gray-400 ">Per Month</div>
              </div>
              <div className="text-gray-500 mt-4">
                Extended Pro Package. Up to 100 Agents & 25 Projects
              </div>
            </div>

            <div className="md:flex flex-wrap  gap-5 p-5">
            <div className="flex flex-wrap mt-4 gap-5">
            <div className="bg-gray-100 rounded-lg p-5 md:px-5 text-gray-400 ">
              Cancle Subscription
            </div>
          </div>
          <div className="flex flex-wrap mt-4 gap-5">
          <div className="bg-sky-500 rounded-lg p-5 md:px-5 text-white ">
           Upgrade plan
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attention;
