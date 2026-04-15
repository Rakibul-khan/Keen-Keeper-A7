import Home from "../pages/Home";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { TimeLineContext } from "../contexts/TimeLineContext";
import { useState } from "react";

const HomeLayout = () => {
  const [timeLineData, setTimeLineData] = useState([]);
  return (
    <TimeLineContext.Provider value={{ timeLineData, setTimeLineData }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </TimeLineContext.Provider>
  );
};

export default HomeLayout;
