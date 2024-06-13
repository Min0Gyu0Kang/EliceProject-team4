/**
File Name : Header.js
Description : 메뉴창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 Header 분리
2024.06.11  강민규   Modified  지영님 format 사용
*/
import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  font-family: 'GmarketSansMedium';
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  letter-spacing: -0.07em;
  font-size: 20pt;
  color: #30cb6e;
  font-weight: 900;
  text-shadow: -0.5px 0px #30cb6e, 0px 0.5px #30cb6e, 0.5px 0px #30cb6e,
    0px -0.5px #30cb6e;

  &:hover {
    color: #30cb6e;
  }
`;

const Nav = styled(Link).attrs(props => ({
  isActive: props.isActive,
}))`
  letter-spacing: -0.1em;
  margin: 0 10px;
  font-weight: 900;
  font-size: 11pt;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#30cb6e' : '#262627')};

  &:hover {
    color: #30cb6e;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo to="/">도시의 오아시스</Logo>
      <div>
        <Nav to="/map" isActive={location.pathname === '/map'}>
          공원 찾기
        </Nav>
        <Nav to="/dataStory" isActive={location.pathname === '/dataStory'}>
          데이터 스토리
        </Nav>
        <Nav to="/community" isActive={location.pathname === '/community'}>
          커뮤니티
        </Nav>
        <Nav to="/login" isActive={location.pathname === '/login'}>
          로그인
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;