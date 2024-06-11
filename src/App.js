/**
File Name : App.js
Description : 메인 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.10  강민규   Created
2024.06.10  강민규   Modified   지도 초안
2024.06.11  강민규   Modified   Header 분리
2024.06.11  강민규   Modified   지도 찾기 분리
2024.06.11  강민규   Modified   헤더 Router 추가

*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
//지역 설정 직접 검색 토글 탭
import LocationSearch from "./components/LocationSearch"; 
import DirectSearch from "./components/DirectSearch"; 

function App() {
  return (
    <Div>
      <Router>
      <Header />
      </Router>
      <Div9>
        <Div10>
          <Column>
            <LocationSearch />
          </Column>
          <Column5>
            <Img3
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
            />
          </Column5>
          <Column6>
            <Div47>
              <Div48>내주변 공원</Div48>
              <Div49>공원을 검색해보세요</Div49>
              <Div50>공원 정보</Div50>
              <Div51>공원을 선택해 주세요</Div51>
            </Div47>
          </Column6>
        </Div10>
      </Div9>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
`;


const Div9 = styled.div`
  margin-top: 29px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 44%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 0.87;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div47 = styled.div`
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 0.45);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  width: 100%;
  padding: 43px 44px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div48 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  line-height: 213%;
  align-self: start;
`;

const Div49 = styled.div`
  align-self: center;
  margin-top: 104px;
  font: 20px/213% Aguafina Script, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div50 = styled.div`
  font-family: Aguafina Script, sans-serif;
  color: rgba(38, 38, 39, 1);
  align-self: start;
  margin-top: 129px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div51 = styled.div`
  align-self: center;
  margin-top: 135px;
  font: 20px/213% Aguafina Script, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;




export default App;