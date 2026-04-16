import React, { useContext, useState } from "react";
import { TimeLineContext } from "../contexts/TimeLineContext";

const TimeLinePage = () => {
  const { timeLineData } = useContext(TimeLineContext);
  const [filter, setFilter] = useState("all");

  const filterText = timeLineData.filter((item) => item.type == "text");
  const filterCall = timeLineData.filter((item) => item.type == "call");
  const filterVideo = timeLineData.filter((item) => item.type == "video");

  return (
    <div className="bg-gray-100 min-h-[53vh] ">
      <h1 className="font-bold text-4xl w-10/12 mx-auto pt-3 px-3">Timeline</h1>

      {timeLineData.length == 0 ? (
        <h1 className="text-4xl font-semibold flex items-center justify-center h-[40vh]">
          Timeline section is Empty
        </h1>
      ) : (
        <div className=" space-y-3 w-10/12 mx-auto p-5">
          <div>
            <select defaultValue="Filter timeline" className="select ">
              <option disabled={true}>Filter Timeline</option>
              <option onClick={() => setFilter("all")}>All</option>
              <option onClick={() => setFilter("call")}>Filter by Call</option>
              <option onClick={() => setFilter("text")}>Filter by Text</option>
              <option onClick={() => setFilter("video")}>
                Filter by Video
              </option>
            </select>
          </div>
          {filter == "all" &&
            timeLineData.map((item, index) => (
              <div className="bg-white shadow rounded-lg p-3 " key={index}>
                <div className="flex items-center gap-1 ">
                  <img src={item.icon} alt="" />
                  <h1>{item.text}</h1>
                </div>
                <p>{item.date}</p>
              </div>
            ))}

          {filter == "text" &&
            filterText.map((item, index) => (
              <div className="bg-white shadow rounded-lg p-3 " key={index}>
                <div className="flex items-center gap-1 ">
                  <img src={item.icon} alt="" />
                  <h1>{item.text}</h1>
                </div>
                <p>{item.date}</p>
              </div>
            ))}
          {filter == "video" &&
            filterVideo.map((item, index) => (
              <div className="bg-white shadow rounded-lg p-3 " key={index}>
                <div className="flex items-center gap-1 ">
                  <img src={item.icon} alt="" />
                  <h1>{item.text}</h1>
                </div>
                <p>{item.date}</p>
              </div>
            ))}
          {filter == "call" &&
            filterCall.map((item, index) => (
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
