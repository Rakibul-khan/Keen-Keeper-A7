import React, { useContext } from "react";
import { TimeLineContext } from "../contexts/TimeLineContext";

const TimeLinePage = () => {
  const { timeLineData } = useContext(TimeLineContext);
  console.log(timeLineData);

  return (
    <div className="bg-gray-100 min-h-[53vh] ">
      <h1 className="font-bold text-4xl w-10/12 mx-auto pt-3 px-3">Timeline</h1>

      {timeLineData.length == 0 ? (
        "Time line section does not have any data"
      ) : (
        <div className=" space-y-3 w-10/12 mx-auto p-5">
          <div>
            <select defaultValue="Filter timeline" className="select ">
              <option disabled={true}>Filter Timeline</option>
              <option>Filter by Call</option>
              <option>Filter by Text</option>
              <option>Filter by Video</option>
            </select>
          </div>
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
