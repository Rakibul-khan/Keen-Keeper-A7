import React, { Suspense } from "react";
import Banner from "../components/Banner";
import Friends from "../components/Friends";

const fetchPromise = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-[#f8fafc]">
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center my-8">
            <span className="loading loading-spinner loading-xl "></span>
          </div>
        }
      >
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense>
    </div>
  );
};

export default Home;
