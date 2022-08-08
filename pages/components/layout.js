import React from "react";
import Attention from "./attention";
import Billing from "./billing";
import History from "./history";
import Payment from "./payment";
import Profile from "./profile";

function Layout() {
  return (
    <>
      <div className="">
          <Profile />
          <div className="mt-10"><Attention/></div>
          <div className="mt-10"><Payment/></div>
      </div>
    </>
  );
}

export default Layout;
