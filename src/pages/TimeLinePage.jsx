import React, { useContext } from "react";
import { TimeLineContext } from "../contexts/TimeLineContext";

const TimeLinePage = () => {
  const { timeLineData } = useContext(TimeLineContext);

  return (
    <div className="bg-gray-100 h-[53vh] ">
      {timeLineData.length == 0 ? (
        "Time line section does not have any data"
      ) : (
        <div className=" space-y-3 w-10/12 mx-auto p-5">
          {timeLineData.map((item, index) => (
            <div className="bg-white shadow rounded-lg p-3 " key={index}>
              <div className="flex items-center gap-1 ">
                <img src={item.icon} alt="" />
                <h1>{item.text}</h1>
              </div>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeLinePage;
