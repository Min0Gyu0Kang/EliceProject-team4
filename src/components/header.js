/**
File Name : header.js
Description : 메뉴창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 Header 분리
2024.06.11  강민규   Modified   
*/

import * as React from "react";
import styled from "styled-components";


function header() {
    return (
<Div2>
        <Div3>도시의 오아시스</Div3>
        <Div4>
          <Div5>공원 찾기</Div5>
          <Div6>데이터 스토리</Div6>
          <Div7>커뮤니티</Div7>
          <Div8>로그아웃</Div8>
        </Div4>
      </Div2>
    );
}

const Div2 = styled.div`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1822px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  -webkit-text-stroke-width: 3;
  -webkit-text-stroke-color: #30cb6e;
  border-color: rgba(48, 203, 110, 1);
  border-style: solid;
  border-width: 3px;
  justify-content: center;
  color: #30cb6e;
  padding: 0 20px;
  font: 500 36px Gmarket Sans TTF, sans-serif;
`;

const Div4 = styled.div`
  align-self: start;
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: #262627;
  font-weight: 400;
  line-height: 213%;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  justify-content: center;
  color: #30cb6e;
`;

const Div6 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  justify-content: center;
`;

const Div7 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  justify-content: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  justify-content: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default header;