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
2024.06.11  강민규   Modified   결과 / 리뷰 분리

*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
//지역 설정 직접 검색 토글 탭
import LocationSearch from "./components/LocationSearch"; 
import DirectSearch from "./components/DirectSearch"; 
import Map from "./services/Map"
import DetailInfo from "./components/DetailInfo"; 

function App() {
  return (
    <Div>
      <Router>
      <Header />
      </Router>
      <Div9>
        <Div10>
          {/* 검색 탭 */}
          <Column>
            <LocationSearch />
          </Column>
          <Column5>
          {/* 지도 API */}
          {/* <Map /> */}
            <Img3
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
            />
          </Column5>
          {/* 검색결과, 리뷰 탭 */}
          <Column6>
            <DetailInfo />
            
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

export default App;