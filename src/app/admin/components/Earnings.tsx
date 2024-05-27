'use client'
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTheme } from 'next-themes';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#7FFF00', '#FF1493', '#4169E1', '#FF4500', '#8A2BE2', '#32CD32'];
interface  Dataitem{
    name: string
    uv: number
    pv: number
    amt: number
}
const data: Dataitem[] = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'September',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'October',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'November',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'December',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  

const getPath = (x:string, y:string, width:number, height:number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props:any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Earnings() {
      const {theme}= useTheme()
return (
    <ResponsiveContainer width="100%" className='overflow-x-scroll' height={350}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={theme === 'dark' ? 'white' : colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
  );
}

Earnings.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
