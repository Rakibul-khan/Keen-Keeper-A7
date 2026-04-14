import React from "react";
import InstagramImg from "../../assets/instagram.png";
import FacebookImg from "../../assets/facebook.png";
import TwitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white p-5 ">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-6xl font-bold ">KeenKeeper </h1>
        <p className="text-gray-100! my-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h5 className="font-medium text-lg">Social Links</h5>
        <div className="w-full  border-b-2 border-gray-50 flex items-center justify-center gap-3 my-5 pb-4">
          <img src={InstagramImg} alt="instagram" />
          <img src={FacebookImg} alt="facebook" />
          <img src={TwitterImg} alt="twitter.com" />
        </div>
        <div className="flex items-center justify-between gap-30">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex gap-2 items-center">
            <li>Privacy Policy</li>
            <li>Terms of Service </li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
