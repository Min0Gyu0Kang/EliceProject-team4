/**
File Name : FirstChart
Description : 데이터 스토리 3번째 데이터 시각화 차트
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
2024.06.12  김유림   Modified    전체 코드 수정
2024.06.16  김유림   Modified    api 연동 완료
*/
import React, {useEffect, useState} from 'react'
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

const ThirdChart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dashboard')
                const result = await response.json()
                setData(result.tinybar)
            } catch (error) {
                console.error('Error fetching the data', error)
            }
        }

        fetchData()
    }, [])
    let dataWithout = data.find(item => item.name === '')
    let data2024 = data.find(
        item => item.name === '31년 이상' && item.date === '2024-06-08',
    )
    let data2034 = data.find(
        item => item.name === '31년 이상' && item.date === '2034-06-08',
    )

    let indexWithout = data.indexOf(dataWithout)
    let index2024 = data.indexOf(data2024)
    let index2034 = data.indexOf(data2034)

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
            <ReferenceLine
                x={indexWithout}
                stroke="black"
                strokeDasharray="3 3"
            />
            <ReferenceArea
                x1={indexWithout}
                x2={index2024}
                strokeOpacity={0}
                fillOpacity={0}
                label={{
                    position: 'top',
                    value: '2024년 기준',
                    fill: 'black',
                    fontSize: 15,
                    dy: 50,
                    dx: -146,
                }}
            />

            {/* 2034년 기준 ReferenceArea */}
            <ReferenceArea
                x1={index2024}
                x2={index2034}
                strokeOpacity={0}
                fillOpacity={0}
                label={{
                    position: 'top',
                    value: '2034년 기준',
                    fill: 'black',
                    fontSize: 15,
                    dy: 50,
                    dx: 99,
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
