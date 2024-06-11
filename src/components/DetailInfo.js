/**
File Name : DetailInfo.js
Description : 검색한 결과 및 리뷰 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 분리
2024.06.11  강민규   Modified  
*/

import * as React from "react";
import styled from "styled-components";

function DetailInfo() {
    return (
        <Div47>
              <Div48>내주변 공원</Div48>
              <Div49>공원을 검색해보세요</Div49>
              <Div50>공원 정보</Div50>
              <Div51>공원을 선택해 주세요</Div51>
        </Div47>
    );
}

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

export default DetailInfo;