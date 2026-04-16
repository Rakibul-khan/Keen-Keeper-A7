import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLineContext } from "../contexts/TimeLineContext";

const Stats = () => {
  const { timeLineData } = useContext(TimeLineContext);
  console.log(timeLineData);
  const textData = timeLineData.filter((item) => item.type == "text");
  const callData = timeLineData.filter((item) => item.type == "call");
  const videoData = timeLineData.filter((item) => item.type == "video");
  const data = [
    { name: "Text", value: textData.length, fill: "#244d3f" },
    { name: "Call", value: callData.length, fill: "#7f37f5" },
    { name: "Video", value: videoData.length, fill: "#37a163" },
  ];
  return (
    <div className="flex justify-center items-center min-h-[70vh] ">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
        />
        <Tooltip></Tooltip>

        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default Stats;
