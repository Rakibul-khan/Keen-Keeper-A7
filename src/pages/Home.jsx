import React, { useState } from "react";
import Banner from "../components/Banner";
import Friends from "../components/Friends";

const fetchPromise = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-[#f8fafc]">
      <Banner></Banner>
      <Friends fetchPromise={fetchPromise}></Friends>
    </div>
  );
};

export default Home;
