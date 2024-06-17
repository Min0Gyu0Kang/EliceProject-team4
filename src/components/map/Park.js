/**
File Name : Park.js
Description : 지도 패이지 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created
2024.06.14  강민규   Modified   App에서 분리
2024.06.14  강민규   Modified   Left Right으로 Content 분리
*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
//지역 설정 직접 검색 토글 탭
import LeftContent from "./input/Left/LeftContent"; 
import Map from "./Map"
import RightContent from "./output/Right/RightContent"; 

// svg에 필요한 파일
// import Maptemp from "./assets/Maptemp.svg";

const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  width: 100vw; /* 화면 전체 너비를 차지하도록 설정 */
  padding-top: 44px;
`;

const Display = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 100vw) {
    flex-direction: row;
  }
`;

function Park() {
  return (
    <Content>
          {/* 검색 탭 */}
          <Display>
            <LeftContent />
          {/* 지도 API */}
          <Map />
          {/* 검색결과, 리뷰 탭 */}
            <RightContent />
          </Display>
    </Content>
  );
}



export default Park;