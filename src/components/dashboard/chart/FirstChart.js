/**
File Name : FirstChart
Description : 데이터 스토리 1번째 데이터 시각화 차트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created    
2024.06.12  김유림   Modified  Y축 라벨 추가
*/
import React from 'react'
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Scatter,
} from 'recharts'

const data = [
    {
        year: 2010,
        satisfaction: 42.0,
        capita: 8.4,
        line: 8.4,
    },
    {
        year: 2011,
        capita: 8.3,
    },
    {
        year: 2012,
        satisfaction: 43.8,
        capita: 8.9,
    },
    {
        year: 2013,
        capita: 8.6,
    },
    {
        year: 2014,
        satisfaction: 41.2,
        capita: 8.6,
    },
    {
        year: 2015,
        capita: 8.8,
    },
    {
        year: 2016,
        satisfaction: 41.3,
        capita: 9.2,
    },
    {
        year: 2017,
        capita: 9.6,
    },
    {
        year: 2018,
        satisfaction: 50.2,
        capita: 10.1,
    },
    {
        year: 2019,
        capita: 10.5,
    },
    {
        year: 2020,
        satisfaction: 58.7,
        capita: 11.0,
    },
    {
        year: 2021,
        capita: 11.6,
    },
    {
        year: 2022,
        satisfaction: 59.1,
        capita: 12.3,
        line: 12.3,
    },
]

const FirstChart = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
                width={1200} 
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="year" />
                <YAxis
                    yAxisId="left"
                    label={{
                        value: '(m²)',
                        angle: 0,
                        position: 'insideLeft',
                        dx: 0,
                        dy: -230 
                    }}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{
                        value: '(%)',
                        angle: 0,
                        position: 'insideRight',
                        dx: 0,
                        dy: -230 
                    }}
                    domain={[0, 70]}
                />
                <Tooltip />
                <Legend
                    payload={[
                        {
                            value: '1인당 도시공원 면적(m²)',
                            type: 'square',
                            id: 'ID01',
                            color: '#82ca9d',
                        },
                        {
                            value: '녹지환경 만족도(%)',
                            type: 'circle',
                            id: 'ID02',
                            color: '#0088FE',
                        },
                    ]}
                />
                <Bar
                    yAxisId="left"
                    dataKey="capita"
                    name="1인당 도시공원 면적(m²)"
                    barSize={30}
                    fill="#82ca9d"
                    barCategoryGap={20}
                />
                <Scatter
                    yAxisId="right"
                    dataKey="satisfaction"
                    name="녹지환경 만족도(%)"
                    fill="#4F98CA"
                />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="line"
                    stroke="#808080"
                    strokeWidth={3}
                    connectNulls
                    strokeDasharray="3 3"
                    dot={false}
                    name=""
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default FirstChart
