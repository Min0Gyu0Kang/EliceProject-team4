/**
File Name : FirstChart
Description : 데이터 스토리 2번째 데이터 시각화 차트
Author : 김유림

History
Date        Author   Status    Description
2024.06.12  김유림   Created
2024.06.12  김유림   Modified  필요없는 값 제거 및 원 위치 변경
2024.06.12  김유림   Modified  컬러 변경
*/
import React from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Label,
} from 'recharts'

const data = [
    {city: '서울', satisfaction: 55.9, park_area_per_thousand: 4.7},
    {city: '부산', satisfaction: 59.0, park_area_per_thousand: 17.3},
    {city: '대구', satisfaction: 53.3, park_area_per_thousand: 7.2},
    // {city: '인천', satisfaction: 46.7, park_area_per_thousand: 13.6},
    {city: '광주', satisfaction: 54.8, park_area_per_thousand: 12.4},
    {city: '대전', satisfaction: 60.1, park_area_per_thousand: 12.4},
    {city: '울산', satisfaction: 58.8, park_area_per_thousand: 10.3},
    // {city: '세종', satisfaction: 69.0, park_area_per_thousand: 63.3},
    {city: '경기', satisfaction: 59.4, park_area_per_thousand: 11.2},
    // {city: '강원', satisfaction: 74.2, park_area_per_thousand: 15.8},
    {city: '충북', satisfaction: 59.2, park_area_per_thousand: 13.7},
    {city: '충남', satisfaction: 60.4, park_area_per_thousand: 11.5},
    {city: '전북', satisfaction: 59.6, park_area_per_thousand: 24.6},
    // {city: '전남', satisfaction: 71.0, park_area_per_thousand: 26.4},
    {city: '경북', satisfaction: 60.3, park_area_per_thousand: 16.4},
    // {city: '경남', satisfaction: 68.0, park_area_per_thousand: 15.8},
    {city: '제주', satisfaction: 60.0, park_area_per_thousand: 16.6},
]

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid #ccc',
                }}
            >
                <p style={{color: '#8884d8'}}>
                    {`지역: `}
                    <span style={{color: 'black'}}>{`${data.city}`}</span>
                </p>
                <p style={{color: '#0088FE'}}>
                    {`녹지환경 만족도(%): `}
                    <span
                        style={{color: 'black'}}
                    >{`${data['satisfaction']}`}</span>
                </p>
                <p style={{color: '#82ca9d'}}>
                    {`인구천명당 도시공원조성면적(천㎡): `}
                    <span
                        style={{color: 'black'}}
                    >{`${data['park_area_per_thousand']}`}</span>
                </p>
            </div>
        )
    }

    return null
}

const SecondChart = () => {
    return (
        <ScatterChart
            width={550}
            height={500}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                type="number"
                dataKey="park_area_per_thousand"
                domain={[0, 70]}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            >
                <Label
                    value="인구천명당 도시공원조성면적(천㎡)"
                    position="bottom"
                    offset={0}
                    style={{textAnchor: 'middle'}}
                />
            </XAxis>
            <YAxis
                type="number"
                dataKey="satisfaction"
                domain={[40, 80]}
                ticks={[40, 50, 60, 70, 80]}
            >
                <Label
                    value="녹지환경 만족도(%)"
                    position="left"
                    angle={-90}
                    offset={0}
                    style={{textAnchor: 'middle'}}
                />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Scatter
                name="A scatter"
                data={data}
                fill="#EEF296"
                stroke="#9ADE7B"
                strokeWidth={1.5}
            />
            <ellipse
                cx={170}
                cy={270}
                rx={85}
                ry={60}
                stroke="#FF8F8F"
                fill="none"
                strokeWidth={5}
            />
        </ScatterChart>
    )
}

export default SecondChart
