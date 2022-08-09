import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";

function Payment() {
  return (
    <>
      <div className="bg-white lg:mx-40 md:mx-8 rounded-lg">
        <div className="p-5 md:flex  justify-between">
          <div className="text-[24px] font-semibold">Payment Methods</div>
          <div className="text-gray-400 font-bold">
            Cradit/Debit Card Paypal
          </div>
        </div>
        <hr></hr>

        <div className="p-5">
          <div className="text-[24px] font-semibold">My Card</div>
          <div className="md:flex gap-5  justify-between p-2">
            <div className="border-dashed border-2 p-5 mb-4">
              <div className="flex gap-2 ">
                <div className="font-semibold">Marcus Moris</div>
                <div>
                  <button className="bg-green-100 font-[Rubik] md:p-[1px] text-green-500 rounded-lg hover:bg-green-500 hover:text-white ">
                    Primary
                  </button>
                </div>
              </div>
              <div className=" md:flex flex-wrap gap-10">
                <div className="flex gap-5 mt-4">
                  <div className=" ">
                    <img src="./visa.svg" alt="loading" />
                  </div>
                  <div className="">
                    <div className="font-semibold">Visa****1679</div>
                    <div className="font-semibold text-gray-300">
                      Card expires at 09/24
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 gap-5">
                  <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                    Delete
                  </div>
                  <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                    Edit
                  </div>
                </div>
              </div>
            </div>

            <div className="border-dashed border-2 p-5 mb-4">
              <div className="flex gap-2 ">
                <div className="font-semibold">Jacob Holder</div>
              </div>
              <div className=" md:flex flex-wrap gap-10">
                <div className="flex gap-5 mt-4 ">
                  <div className="">
                    <img src="./american-express.svg" alt="loading..." />
                  </div>
                  <div className="">
                    <div className="font-semibold">Mastercard****2040</div>
                    <div className="font-semibold text-gray-300">
                      Card expires at 10/22
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 gap-5">
                  <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                    Delete
                  </div>
                  <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                    Edit
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/** Master card  */}
            <div className="md:flex gap-5  justify-between ">
              <div className="border-dashed border-2 p-4 mb-4">
                <div className="flex gap-2 ">
                  <div className="font-semibold">Jhon Larson</div>
                </div>
                <div className=" md:flex flex-wrap gap-10">
                  <div className="flex gap-5 mt-4">
                    <div className=" ">
                      <img
                        className="px-2 "
                        src="./mastercard.svg"
                        alt="loading..."
                      />
                    </div>
                    <div className="">
                      <div className="font-semibold">Mastercard****2019</div>
                      <div className="font-semibold text-gray-300">
                        Card expires at 03/23
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-4 gap-5">
                    <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                      Delete
                    </div>
                    <div className="bg-gray-100 rounded-lg p-5 md:px-8 text-gray-500 hover:text-blue-400 hover:bg-blue-100">
                      Edit
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-dashed border-2 ">
                <div className="p-5">
                  <div className="font-semibold ">
                    This is a very important note!
                  </div>
                  <div className="md:flex gap-5">
                    <div>
                      Writing headlines for blog posts is much science <br />
                      and probably cool audience
                    </div>
                    <div className="flex flex-wrap mt-4 gap-5">
                      <div className="bg-sky-500 rounded-lg p-5 md:px-5 text-white ">
                        New Address
                      </div>
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

export default Payment;
