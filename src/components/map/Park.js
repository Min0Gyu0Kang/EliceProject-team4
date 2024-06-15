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
import RightContent from "./input/Right/RightContent"; 

// svg에 필요한 파일
// import Maptemp from "./assets/Maptemp.svg";

function Park() {
  return (
    <Div>
      <Div9>
        <Div10>
          {/* 검색 탭 */}
          <Column>
            <LeftContent />
          </Column>
          <Column5>
          {/* 지도 API */}
          <Map />
            {/* <Img3>
            </Img3> */}
          </Column5>
          {/* 검색결과, 리뷰 탭 */}
          <Column6>
            <RightContent />
            
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

const Img3 = styled.div`
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

export default Park;