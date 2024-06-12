/**
File Name : DashBoard
Description : 대시보드 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
*/
import React from 'react';
import styled from 'styled-components';
import FirstChart from './chart/FirstChart';
import SecondChart from './chart/SecondChart';
import ThirdChart from './chart/ThirdChart';

const DashboardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 90px;
    width: 1200px;  /* 고정 너비 */
    height: 800px;  /* 고정 높이 */
    margin: 0 auto;  /* 중앙 정렬 */
`;

const ChartContainer = styled.div`
    flex: 1;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ChartWrapper = styled.div`
    flex: 1;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 150px 0px; /* 패딩 조정 */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
`;

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <ChartContainer>
                <ChartWrapper>
                    <FirstChart />
                </ChartWrapper>
                <ChartWrapper>
                    <SecondChart />
                </ChartWrapper>
                <ChartWrapper>
                    <ThirdChart />
                </ChartWrapper>
            </ChartContainer>
            <TextContainer>
                <p>
                    도시 환경에서 공원과 녹지는 환경적인 측면과
                    <br /> 삶의 질 향상에 중요한 역할을 해요
                    <br />
                    <br /> 이에 따라 1인당 도시 공원 조성 면적은 매년 증가하고
                    있으며 <br />
                    녹지 환경에 대한 시민의 만족도도 증가하고 있어요
                </p>
            </TextContainer>
        </DashboardWrapper>
    );
};

export default Dashboard;
