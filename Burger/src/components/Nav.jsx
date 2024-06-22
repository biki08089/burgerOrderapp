import React from "react";

const Nav = () => {
  return (
    <div className="h-[4rem] bg-black flex justify-between items-center px-[5rem] sticky top-0">
      <img
        className="rounded-full w-[65px] h-[50px]"
        src="logo2.png"
        alt="No image"
      />
      <div className="flex items-center text-black font-semibold ">
        <button className="bg-cust-bg mx-2 w-[6rem] h-[2.5rem] rounded-full">
          Cart
        </button>
        <button className="bg-cust-bg mx-2 w-[6rem] h-[2.5rem] rounded-full">
          Orders
        </button>
      </div>
    </div>
  );
};

export default Nav;
