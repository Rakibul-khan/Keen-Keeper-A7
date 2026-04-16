import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-3">
      <h1 className="font-bold text-8xl text-[#244d3f]">404</h1>
      <h2 className="font-semibold text-2xl">Page not found</h2>
      <p className="text-gray-600">
        The page you are looking for doesn't exist or has been moved
      </p>
      <Link to={"/"} className="btn bg-[#244d3f] text-white">
        <Home></Home> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
