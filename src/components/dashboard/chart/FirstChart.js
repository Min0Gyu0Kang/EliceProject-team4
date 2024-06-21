/**
File Name : FirstChart
Description : 데이터 스토리 1번째 데이터 시각화 차트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created    
2024.06.12  김유림   Modified   Y축 라벨 추가
2024.06.13  김유림   Modified   디자인 수정
2024.06.16  김유림   Modified   api 연동 완료
*/

import React, {useEffect, useState} from 'react'
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

const FirstChart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dashboard')
                const result = await response.json()
                setData(result.linebar)
            } catch (error) {
                console.error('Error fetching the data', error)
            }
        }

        fetchData()
    }, [])
    return (
        <ResponsiveContainer width={600} height={500}>
            <ComposedChart
                width={600} // 너비를 조정합니다.
                height={500}
                data={data}
            >
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 70]} />
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
                    fill="#0088FE"
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
