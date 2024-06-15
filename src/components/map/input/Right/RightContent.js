/**
File Name : RightContent.js
Description : 오른쪽 창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created   검색한 정보 총괄
2024.06.14  강민규   Modified  if-else
*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import DetailInfo from "./DetailInfo"; 

function RightContent() {
  return (
    <Div>
        {/* if(true){ */}
            <DetailInfo />
        {/* } */}
        {/* else{
            
        } */}
        
    </Div>
  );
}
const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
`;

export default RightContent;