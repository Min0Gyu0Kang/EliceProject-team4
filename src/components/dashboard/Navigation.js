// src/components/dashboard/Navigation.js
import React from "react";
import styled from "styled-components";
import goalIcon from "../../assets/images/goal.svg";

const NavigationWrapper = styled.div`
  background-color: #fff;
  padding: 15px 150px; /* 수정된 패딩 */
  border-bottom: 1px solid #e0e0e0;
  margin-top: 10px; /* 수정된 상단 여백 */
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
  vertical-align: middle; /* 이미지의 수직 정렬 추가 */
`;

const Title = styled.h1`
  margin-left: 13px; /* 이미지와 제목 사이의 간격 조정 */
  margin-bottom: 15px;
  font-family: "GmarketSansMedium";
  font-size: 24pt;
  color: #262627; /* 검은색으로 변경 */
`;

const Subtitle = styled.p`
  margin-top: -5px; /* 부제목과 제목 사이의 간격 조정 */
  margin-left: 5px; /* 제목과 부제목 사이의 간격 조정 */
  font-size: 16pt;
  color: #555;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ContentWrapper>
        <Icon src={goalIcon} alt="goal icon" />
        <Title>데이터 스토리</Title>
      </ContentWrapper>
      <Subtitle>데이터 시각화를 통해 도시의 오아시스가 전하는 이야기</Subtitle>
    </NavigationWrapper>
  );
};

export default Navigation;
