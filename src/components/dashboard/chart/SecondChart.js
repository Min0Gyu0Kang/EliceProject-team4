/**
File Name : FirstChart
Description : 데이터 스토리 2번째 데이터 시각화 차트
Author : 김유림

History
Date        Author   Status    Description
2024.06.12  김유림   Created
2024.06.12  김유림   Modified  필요없는 값 제거 및 원 위치 변경
2024.06.13  김유림   Modified  컬러 변경, ellipse 좌표 변경
2024.06.16  김유림   Modified  api 연동 완료
*/
import React, {useEffect, useState} from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Label,
} from 'recharts'

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
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dashboard')
                const result = await response.json()
                const filteredData = result.scatter.filter(
                    item =>
                        item.city !== '인천광역시' &&
                        item.city !== '세종특별자치시' &&
                        item.city !== '전라남도' &&
                        item.city !== '강원특별자치도' &&
                        item.city !== '경상남도',
                )
                setData(filteredData)
            } catch (error) {
                console.error('Error fetching the data', error)
            }
        }

        fetchData()
    }, [])
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
