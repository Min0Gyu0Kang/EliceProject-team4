import React from 'react'
import {
    ScatterChart,
    ComposedChart,
    Scatter,
    Line,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'
const data = [
    {x: 349068, y: 22098, z: 63.3},
    {x: 613564, y: 10201, z: 16.6},
    {x: 1108668, y: 11367, z: 10.3},
    {x: 1274319, y: 20165, z: 15.8},
    {x: 1286778, y: 22098, z: 13.7},
]
// 나중에 백으로부터 실제 값 받기

const SecondChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <h1>천 명당 공원 면적 대비 지역 별 녹지환경 만족도</h1>
            {/* SimpleScatterChart */}
            <ScatterChart
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis
                    type="number"
                    dataKey="x"
                    name="도시지역인구"
                    unit="명"
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="총도시공원면적"
                    unit="m²"
                />
                <Tooltip cursor={{strokeDasharray: '3 3'}} />

                <Legend
                    width={700}
                    wrapperStyle={{
                        bottom: 0,
                        left: 300,
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #d5d5d5',
                        borderRadius: 3,
                        lineHeight: '40px',
                    }}
                />
                <ScatterChart dataKey="x" fill="#f5f5f5" barSize={30} />
                <Scatter name="도시지역인구" data={data} fill="#3fdea9" />
                <Scatter name="총도시공원면적" data={data} fill="#38bb96" />
                <Scatter
                    name="인구 천명당 도시공원조성면적"
                    data={data}
                    fill="#31a383"
                />
                <Line fill="#0e2e25" />
            </ScatterChart>
            {/* ComposedChart for 군집화 */}
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <Tooltip />
                <Legend />

                <XAxis
                    type="number"
                    dataKey="x"
                    name="도시지역인구"
                    unit="명"
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="총도시공원면적"
                    unit="m²"
                />
                <ZAxis
                    type="number"
                    dataKey="z"
                    name="인구 천명당 도시공원조성면적"
                    unit="m²"
                />
                <Scatter name="도시지역인구" dataKey="x" fill="#3fdea9" />
                <Scatter name="총도시공원면적" dataKey="y" fill="#38bb96" />
                <Scatter
                    name="인구 천명당 도시공원조성면적"
                    dataKey="z"
                    fill="#31a383"
                />
                {/* <Line type="monotone" dataKey="x" stroke="#3fdea9" strokeDasharray="5 5" legendType="none" /> */}
                <Line
                    type="monotone"
                    dataKey="y"
                    name=" "
                    stroke="#38bb96"
                    strokeDasharray="5 5"
                    legendType="none"
                />
                {/* <Line type="monotone" dataKey="z" stroke="#31a383" strokeDasharray="5 5" legendType="none" /> */}
                {/* 타원형 클러스터 */}
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default SecondChart
