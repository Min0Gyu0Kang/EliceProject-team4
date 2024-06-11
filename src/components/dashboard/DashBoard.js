import React from "react";
import styled from "styled-components";
import FirstChart from "./chart/FirstChart";
import ThirdChart from "./chart/ThirdChart";

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 90px;
`;

const ChartContainer = styled.div`
  flex: 1;
  margin: 0px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 150px 0px; /* 패딩 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <ChartContainer>
        <FirstChart />
        <ThirdChart />
      </ChartContainer>
      <TextContainer>
        <p style={{ textAlign: "center" }}>
          도시 환경에서 공원과 녹지는 환경적인 측면과
          <br /> 삶의 질 향상에 중요한 역할을 해요
          <br />
          <br /> 이에 따라 1인당 도시 공원 조성 면적은 매년 증가하고 있으며{" "}
          <br />
          녹지 환경에 대한 시민의 만족도도 증가하고 있어요
        </p>
      </TextContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
