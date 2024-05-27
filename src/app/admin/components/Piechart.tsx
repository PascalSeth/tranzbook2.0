'use client'
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { name: "Completed", value: 400, color: "#0088FE" },
  { name: "Cancelled ", value: 300, color: "#00C49F" },
  { name: "Pending", value: 300, color: "#FFBB28" },
];

const PieChartBox: React.FC = () => {
  return (
    <div className="flex items-center ">

      <div className="chart">
        <ResponsiveContainer width={250} height={250}>
          <PieChart className="pt-0" >
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
            className="p-2 w-full"
              data={data}
              innerRadius={"40%"}
              outerRadius={"90%"}
              paddingAngle={8}
              dataKey="value"
            >
              {data.map((item: DataItem) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item: DataItem) => (
          <div className=" text-center" key={item.name}>
            <div className="">
              <div
                className="w-full h-3"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="bg-gradient-to-l font-semibold from-blue-500 to-red-500 text-transparent bg-clip-text">{item.name}</span>
            </div>
            <span className="font-bold text-gray-400">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
