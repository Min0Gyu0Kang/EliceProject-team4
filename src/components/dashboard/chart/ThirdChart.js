/**
File Name : FirstChart
Description : 데이터 스토리 3번째 데이터 시각화 차트
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
2024.06.12  김유림   Modified    전체 코드 수정
*/
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

const data = [
    {
        name: '데이터없음',
        percentage: 10,
        date: '',
    },
    {
        name: '30년 이하',
        percentage: 65,
        date: '2024-06-08',
    },
    {
        name: '31년이상',
        percentage: 25,
        date: '2024-06-08',
    },
    {
        name: '',
        percentage: '',
        date: '',
    },
    {
        name: '31년 이상',
        percentage: 40,
        date: '2034-06-08',
    },
]

const ThirdChart = () => {
    return (
        <BarChart
            width={600}
            height={500}
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
            <Label value="(%)" dy={20} dx={30} position="insideTop" />
            <Tooltip />
            <Legend
                payload={[
                    {value: '', type: 'square', id: 'ID01', color: '#82ca9d'},
                    {
                        value: '　노후화율(%)',
                        type: 'square',
                        id: 'ID02',
                        color: '#FF8F8F',
                    },
                ]}
            />
            <ReferenceLine x="" stroke="black" strokeDasharray="3 3" />
            <ReferenceArea
                x1="데이터없음"
                x2="31년이상"
                strokeOpacity={0}
                fillOpacity={0}
                label={{
                    value: '2024년 기준',
                    position: 'top',
                    fill: 'black',
                    fontSize: 15,
                    dy: 40,
                }}
            />
            <ReferenceArea
                x1="31년 이상"
                x2="31년 이상"
                strokeOpacity={0}
                fillOpacity={0}
                label={{
                    value: '2034년 기준',
                    position: 'top',
                    fill: 'black',
                    fontSize: 15,
                    dy: 40,
                }}
            />

            <Bar dataKey="percentage" name="도시공원 노후화율(%)" barSize={60}>
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={index < 2 ? '#82ca9d' : '#FF8F8F'}
                    />
                ))}
            </Bar>
        </BarChart>
    )
}

export default ThirdChart
