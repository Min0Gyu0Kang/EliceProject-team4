/**
File Name : HowToUse
Description : 이렇게 사용해요 
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
*/

import React from 'react';
import styled from 'styled-components';
import main from '../src/images/기본화면.png';
import searchPark from '../src/images/공원이름검색.png';
import parkList from '../src/images/지역검색.png';
import review from '../src/images/다른사람리뷰.png';
import myReview from '../src/images/리뷰작성.png';

const Container = styled.div`
  margin-top: 120px;
`;

const Title = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 44px;
`;

const Highlight = styled.span`
  color: #30cb6e;
`;

const Section = styled.div`
  font-family: 'Gowun Dodum', sans-serif;
  text-align: center;
  font-size: 15pt;
  line-height: 34px;
  letter-spacing: -0.07em;
  margin-bottom: 120px;
`;

const HorizontalSection = styled(Section)`
  display: flex;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 709px;
  height: 386px;
  margin-top: 30px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
`;

const HalfImage = styled.img`
  width: 385px;
  height: 304px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
`;

const TextContainer = styled.div`
  letter-spacing: -0.07em;

  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  margin: 0;
`;

const Description = styled.p`
  font-family: 'Gowun Dodum', sans-serif;
  text-align: center;
  font-size: 15pt;
  line-height: 34px;
  letter-spacing: -0.07em;
  margin-bottom: 30px;
`;

const HowToUse = () => {
  return (
    <Container>
      <Title>이렇게 사용해요</Title>
      <Section>
        <Description>
          <Highlight>지역 검색</Highlight>으로 내가 원하는 지역의 공원을 찾아
          보세요.
          <br /> 더 상세한 검색을 원한다면 <Highlight>추천 태그</Highlight>를
          이용해도 좋아요.
        </Description>
        <Image src={main} alt="기본화면" />
      </Section>
      <HorizontalSection>
        <HalfImage src={searchPark} alt="공원이름검색" />
        <TextContainer>
          <Text>
            <Highlight>공원이름</Highlight>으로 직접 검색할 수 있어요.
          </Text>
        </TextContainer>
      </HorizontalSection>
      <Section>
        <Description>
          내가 검색한 지역 <Highlight>주변 공원 리스트</Highlight>와
          <br /> 선택한 <Highlight>공원의 정보</Highlight>를 한눈에 파악할 수
          있어요.
        </Description>
        <Image src={parkList} alt="지역검색 이미지" />
      </Section>
      <HorizontalSection>
        <HalfImage src={review} alt="사용자리뷰" />
        <TextContainer>
          <Text>
            다른 이용객이 남긴 <Highlight>리뷰와 별점</Highlight>을 확인해
            보세요.
          </Text>
        </TextContainer>
      </HorizontalSection>
      <HorizontalSection>
        <HalfImage src={myReview} alt="리뷰작성" />
        <TextContainer>
          <Text>
            내가 이용한 공원에 대한 <Highlight>리뷰</Highlight>를 남길 수
            있어요.
          </Text>
        </TextContainer>
      </HorizontalSection>
    </Container>
  );
};

export default HowToUse;
