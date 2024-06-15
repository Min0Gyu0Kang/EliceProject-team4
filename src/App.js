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
2024.06.13  강민규   Modified   지도 (임시) svg 추가
2024.06.14  강민규   Modified   Park.js로 분리

*/

import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Park from './components/map/Park';
function App() {
  return (
    <Div>
      <Router>
      <Header />
      </Router>
      <Park />
      <Router>
      <Footer />
      </Router>
    </Div>
  );
}
const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
`;

export default App;