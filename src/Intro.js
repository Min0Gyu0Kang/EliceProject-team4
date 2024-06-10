/**
File Name : Intro
Description : 서비스 소개 글
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
*/

import React from 'react';
import styled from 'styled-components';
import HowToUse from './HowToUse';
import tag from '../src/images/tag.png';
import map from '../src/images/지도.jpeg';
import review from '../src/images/리뷰.png';

const FixedContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  margin-left: 20px;
`;

const IntroContainer = styled.div`
  padding: 20px 20px;
  letter-spacing: -0.07em;
  flex-wrap: wrap;
`;

const Content = styled.p`
  font-size: 18pt;
  line-height: 32px;
  font-family: 'Gowun Dodum', sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const ContentUrbanOasis = styled.span`
  font-family: 'GmarketSansMedium';
  font-weight: 900;
  color: #30cb6e;
  font-size: 26pt;
  letter-spacing: -0.07em;
  text-shadow: -0.5px 0px #30cb6e, 0px 0.5px #30cb6e, 0.5px 0px #30cb6e,
    0px -0.5px #30cb6e;
`;

const Service = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
`;

const ServiceItem = styled.div`
  flex: 1;
  margin: 10px;
`;

const ServiceImage = styled.img`
  width: 172px;
  height: auto;
`;

const ServiceImageSmall = styled.img`
  width: 180px;
  height: auto;
`;

const ServiceContent = styled.p`
  font-family: 'Gowun Dodum', sans-serif;
`;

const Intro = () => {
  return (
    <FixedContainer>
      <IntroContainer>
        <div>
          <Content>
            <ContentUrbanOasis>도시의 오아시스</ContentUrbanOasis>는 <br />
            이런 서비스를 지원하고 있어요
          </Content>
          <Service>
            <ServiceItem>
              <ServiceImage src={map} alt="지도 아이콘" />
              <ServiceContent>
                위치 및 이름으로 <br />
                공원 검색
              </ServiceContent>
            </ServiceItem>
            <ServiceItem>
              <ServiceImage src={tag} alt="태그 아이콘" />
              <ServiceContent>
                추천 태그로 <br />
                공원 시설 검색
              </ServiceContent>
            </ServiceItem>
            <ServiceItem>
              <ServiceImageSmall src={review} alt="리뷰 아이콘" />
              <ServiceContent>
                공원 이용객의 <br />
                리뷰•평점 제공
              </ServiceContent>
            </ServiceItem>
          </Service>
        </div>
        <HowToUse />
      </IntroContainer>
    </FixedContainer>
  );
};

export default Intro;
