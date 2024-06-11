import React from 'react'
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
} from 'recharts'
import {scaleOrdinal} from 'd3-scale'
import {schemeCategory10} from 'd3-scale-chromatic'

const colors = scaleOrdinal(schemeCategory10).range()

const data = [
    {
        name: '데이터없음',
        percentage: 10,
    },
    {
        name: '30년이하\n2020.7.1 기준',
        percentage: 65,
    },
    {
        name: '31년이상',
        percentage: 25,
    },
    {
        // 구분선
        name: '',
        percentage: 0,
    },
    {
        name: '31년 이상\n2030.7.1 기준',
        percentage: 40,
    },
]

const ThirdBarChart = () => {
    return (
        <BarChart
            width={600}
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
                    value: '2020년 현재',
                    position: 'top',
                    fill: 'black',
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
                    value: '10년 후\n2030년',
                    position: 'top',
                    fill: 'black',
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
    )
}

export default ThirdBarChart

// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, ReferenceLine, ReferenceArea, Label } from 'recharts';
// import { scaleOrdinal } from 'd3-scale';
// import { schemeCategory10 } from 'd3-scale-chromatic';

// const colors = scaleOrdinal(schemeCategory10).range();

// // DB에서 받아온 데이터를 가정
// const dbData = { "none": 0, "noOldness": 50.56, "yesOldness": 19.12, "yesOldnessLater": 30.32 };

// const ThirdBarChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // DB 데이터를 그래프 데이터로 변환
//     const convertedData = [
//       {
//         name: '데이터없음',
//         percentage: dbData.none,
//       },
//       {
//         name: '30년이하\n2020.7.1 기준',
//         percentage: dbData.noOldness,
//       },
//       {
//         name: '31년이상',
//         percentage: dbData.yesOldness,
//       },
//       { // 구분선을 위한 데이터, 그래프에 직접 표시되지 않음
//         name: '',
//         percentage: 0,
//       },
//       {
//         name: '31년 이상\n2030.7.1 기준',
//         percentage: dbData.yesOldnessLater,
//       },
//     ];

//     setData(convertedData);
//   }, []);

//   return (
//     <BarChart
//       width={600}
//       height={400}
//       data={data}
//       margin={{
//         top: 30,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <XAxis dataKey="name" />
//       <YAxis domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
//       <Label value="(%)" dy={20} dx={30} position="insideTop" />
//       <Tooltip />
//       <Legend />
//       <ReferenceLine x="" stroke="black" strokeDasharray="3 3" />
//       <ReferenceArea x1="데이터없음" x2="31년이상" strokeOpacity={0} fillOpacity={0} label={{ value: '2020년 현재', position: 'top', fill: 'black', fontSize: 15, dy: 40, }} />
//       <ReferenceArea x1="2030.7.1 기준" x2="2030.7.1 기준" strokeOpacity={0} fillOpacity={0} label={{ value: '10년 후\n2030년', position: 'top', fill: 'black', fontSize: 15, dx: 0, dy: 40, }} />
//       <Bar dataKey="percentage" fill="#8884d8" barSize={60}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// };

// export default ThirdBarChart;
