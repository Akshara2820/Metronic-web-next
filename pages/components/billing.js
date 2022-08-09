import React from 'react'

function Billing() {
  return (
    <>
    <div className="bg-white lg:mx-40 md:mx-8 rounded-lg">
    <div className="p-5 md:flex  justify-between">
      <div className="text-[24px] font-semibold">Billing Address</div>
    </div>
    <hr></hr>

    <div className="p-5">
      
      <div className="md:flex gap-5  justify-between p-2">
        <div className="border-dashed border-2 p-5 mb-4">
          <div className="flex gap-2 ">
            <div className="font-semibold">Address 1</div>
            <div>
              <button className="bg-green-100 font-[Rubik] md:p-[1px] text-green-500 rounded-lg hover:bg-green-500 hover:text-white ">
                Primary
              </button>
            </div>
          </div>
          <div className=" md:flex flex-wrap gap-10">
            <div className="flex gap-5 mt-4">
              <div className="text-gray-400 font-semibold ">
              Ap #285-7193 Ullamcorper<br/> Avenue
              Amesbury HI 93373
              US
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
            <div className="font-semibold">Address 2</div>
          </div>
          <div className=" md:flex flex-wrap gap-10">
            <div className="flex gap-5 mt-4">
              <div className="text-gray-400 font-semibold ">
              Ap #285-7193 Ullamcorper<br/> Avenue
              Amesbury HI 93373
              US
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
        <div className="border-dashed border-2 p-5 mb-4">
        <div className="flex gap-2 ">
          <div className="font-semibold">Address 3</div>
        </div>
        <div className=" md:flex flex-wrap gap-10">
          <div className="flex gap-5 mt-4">
            <div className="text-gray-500 font-semibold ">
            Ap #285-7193 Ullamcorper<br/> Avenue
            Amesbury HI 93373
            US
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

      <div className="md:flex gap-5  justify-between ">
      <div className="border-dashed border-2 p-2 mb-4">
      <div className="flex gap-2 ">
        <div className="font-semibold mt-3">This is a very important note!</div>
      </div>
      <div className=" md:flex flex-wrap gap-10">
        <div className="flex gap-5 mt-4">
          <div className="text-gray-500 font-semibold ">
          Writing headlines for blog posts is much science<br/> and probably cool audience
           
          </div>
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
  )
}

export default Billing
