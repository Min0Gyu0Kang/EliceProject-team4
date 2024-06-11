/**
File Name : FirstChart
Description : 데이터 스토리 3번째 데이터 시각화 차트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
*/
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  ReferenceLine,
  ReferenceArea,
  Label,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "데이터없음",
    percentage: 10,
  },
  {
    name: "30년이하\n2020.7.1 기준",
    percentage: 65,
  },
  {
    name: "31년이상",
    percentage: 25,
  },
  {
    // 구분선
    name: "",
    percentage: 0,
  },
  {
    name: "31년 이상\n2030.7.1 기준",
    percentage: 40,
  },
];

const ThirdChart = () => {
  return (
    <BarChart
      width={650}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis
        domain={[0, 100]}
        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
      />
      {/* (%) 라벨을 오른쪽으로 조금 이동 */}
      <Label value="(%)" dy={20} dx={30} position="insideTop" />
      <Tooltip />
      <Legend />
      <ReferenceLine x="" stroke="black" strokeDasharray="3 3" />
      <ReferenceArea
        x1="데이터없음"
        x2="31년이상"
        strokeOpacity={0}
        fillOpacity={0}
        label={{
          value: "2020년 현재",
          position: "top",
          fill: "black",
          fontSize: 15,
          dy: 40,
        }}
      />
      <ReferenceArea
        x1="2030.7.1 기준"
        x2="2030.7.1 기준"
        strokeOpacity={0}
        fillOpacity={0}
        label={{
          value: "10년 후\n2030년",
          position: "top",
          fill: "black",
          fontSize: 15,
          dx: 0,
          dy: 40,
        }}
      />
      <Bar dataKey="percentage" fill="#8884d8" barSize={60}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default ThirdChart;
