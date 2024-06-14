/**
File Name : LeftContent.js
Description : 왼쪽 창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created   지역 검색 직접 검색 총괄
2024.06.14  강민규   Modified  if-else
*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import LocationSearch from "./LocationSearch"; 
import DirectSearch from "./DirectSearch"; 

function LeftContent() {
  return (
    <Div>
        {/* if (1){ */}
            <Router>
            <LocationSearch />
            </Router>
        {/* } */}
        {/* else{
            <Router>
            <DirectSearch />
            </Router>
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

export default LeftContent;