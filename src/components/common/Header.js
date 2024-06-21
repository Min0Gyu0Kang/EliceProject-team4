/**
File Name : Header
Description : 공통 헤더
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영    Created
2024.06.15  임지영    Modified   웹폰트 적용
2024.06.19  김유림    Modified   로그인 로그아웃 시 함수 생성
2024.06.21  박수정   Modified    회원 Index 페이지 기능 추가
*/

import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import logoutUser from '../../api/Logout' // 로그아웃 함수 import

const HeaderWrapper = styled.div`
    font-family: 'gmarket Medium';
    padding-left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
`

const Logo = styled(Link)`
    text-decoration: none;
    letter-spacing: -0.07em;
    font-size: 20pt;
    color: #30cb6e;
    font-weight: 900;
    text-shadow:
        -0.5px 0px #30cb6e,
        0px 0.5px #30cb6e,
        0.5px 0px #30cb6e,
        0px -0.5px #30cb6e;

    &:hover {
        color: #30cb6e;
    }
`

const Nav = styled(Link)`
    letter-spacing: -0.1em;
    margin: 0 10px;
    font-weight: light;
    font-size: 11pt;
    text-decoration: none;
    color: ${({isActive}) => (isActive ? '#30cb6e' : '#262627')};

    &:hover {
        color: #30cb6e;
    }
`

const Header = ({isLoggedIn, onLogout}) => {
    const location = useLocation()

    const handleLogout = async () => {
        try {
            await logoutUser() // logoutUser 함수 호출

            // 클라이언트 측 로그아웃 처리
            onLogout() // 부모 컴포넌트에서 로그아웃 상태 업데이트
        } catch (error) {
            console.error('로그아웃 실패:', error)
            // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        }
    }

    return (
        <HeaderWrapper>
            <Logo to="/">도시의 오아시스</Logo>
            <div>
                <Nav to="/map" isActive={location.pathname === '/map'}>
                    공원 찾기
                </Nav>
                <Nav
                    to="/dataStory"
                    isActive={location.pathname === '/dataStory'}
                >
                    데이터 스토리
                </Nav>
                <Nav
                    to="/community"
                    isActive={location.pathname === '/community'}
                >
                    민원넣기
                </Nav>
                {isLoggedIn ? (
                    <>
                        <Nav
                            to="/users/index"
                            isActive={location.pathname === '/index'}
                        >
                            회원 페이지
                        </Nav>
                        <Nav to="/login" onClick={handleLogout}>
                            로그아웃
                        </Nav>
                    </>
                ) : (
                    <Nav to="/login" isActive={location.pathname === '/login'}>
                        로그인
                    </Nav>
                )}
            </div>
        </HeaderWrapper>
    )
}

export default Header
