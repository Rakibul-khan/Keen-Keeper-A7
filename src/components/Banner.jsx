import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="font-bold text-3xl text-center md:text-left md:text-5xl ">
          Friends to keep close in your life
        </h1>
        <p className="text-center my-3 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the<br></br> relationships that matter most.
        </p>
        <button className=" mt-3 btn bg-green-800 text-white">
          + Add a Friend
        </button>
      </div>
      <div className="grid  md:grid-cols-4 gap-6 w-10/12 mx-auto py-15">
        <div className="bg-white shadow  rounded-lg flex flex-col items-center py-5">
          <h1 className="font-semibold text-4xl my-1 ">10</h1>
          <span className="text-[18px]">Total Friends</span>
        </div>
        <div className="bg-white shadow  rounded-lg flex flex-col items-center py-5">
          <h1 className="font-semibold text-4xl my-1 ">3</h1>
          <span className="text-[18px]">On Track</span>
        </div>
        <div className="bg-white shadow  rounded-lg flex flex-col items-center py-5">
          <h1 className="font-semibold text-4xl my-1 ">6</h1>
          <span className="text-[18px]">Need Attention</span>
        </div>
        <div className="bg-white shadow  rounded-lg flex flex-col items-center py-5">
          <h1 className="font-semibold text-4xl my-1 ">12</h1>
          <span className="text-[18px]">Interaction This Month</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
