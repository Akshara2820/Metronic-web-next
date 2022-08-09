import React from "react";

const Items = [
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
  {
    date: "Nov 01, 2020",
    description: "	Invoice for Ocrober 2022",
    Amount: "$123.79",
    invoice: "PDF",
    voice: "View",
  },
];

function History() {
  return (
    <>
      <div className="bg-white lg:mx-40 md:mx-8 rounded-lg">
        <div className="flex justify-between p-5">
          <div>history</div>
          <div>history</div>
        </div>
        <hr></hr>
        <div  className="lg:overflow-x-hidden overflow-x-scroll ">
        <div className="flex justify-between bg-gray-100 p-5  text-gray-700 font-semibold">
          <div>Date</div>
          <div>Description</div>
          <div>Amount</div>
          <div>Invoice</div>
          <div>View</div>
        </div>
      
      <hr />
      {Items.map((item) => {
        return(
        <div className="" key={item.Amount} >
          <div className="flex justify-between p-5 ">
            <div className="text-gray-500 font-semibold">{item.date}</div>
            <div className="text-sky-400">{item.description}</div>
            <div className="text-gray-500 font-semibold">{item.Amount}</div>
            <div className="text-gray-500 font-semibold bg-gray-200 rounded-lg p-2">{item.invoice}</div>
            <div className="text-gray-500 font-semibold bg-gray-200 rounded-lg p-2">{item.voice}</div>
          </div>
          <hr/>
        </div>
        )
      })}
      </div>
      </div>
     </>
  );
}

export default History;
