/**
File Name : RightContent.js
Description : 오른쪽 창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created   검색한 정보 총괄
2024.06.14  강민규   Modified  
*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import DetailInfo from "./DetailInfo"; 
import Result from "./Result"

const Content = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
  max-width: 30%;
  max-height: 30%;
`;
function RightContent() {
  return (
    <Content>
      <DetailInfo />
      <Result />
        
    </Content>
  );
}

export default RightContent;