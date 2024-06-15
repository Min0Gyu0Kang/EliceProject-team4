/**
 * File Name : Home
 * Description : 홈화면
 * Author : 임지영
 *
 * History
 * Date        Author   Status    Description
 * 2024.06.10  임지영   Created
 */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Intro from '../components/main/Intro'
import MainPage from '../components/main/MainPage'
import StartMainPage from '../components/main/StartMainPage'

const Container = styled.div`
    height: 100vh; /* 부모 컨테이너의 높이를 전체 화면으로 설정 */
`

const MainPageStyled = styled.div`
    width: 45%; /* 화면의 40% 차지 */
    position: fixed; /* 스크롤해도 고정된 위치 */
    left: 0;
    height: 100vh; /* 전체 화면 높이로 설정 */
    overflow-y: auto; /* 내용이 많을 경우 스크롤 가능 */
`

const IntroStyled = styled.div`
    width: 55%; /* 화면의 60% 차지 */
    margin-left: 45%; /* MainPageStyled의 오른쪽에 위치 */
    height: 100vh; /* 전체 화면 높이로 설정 */
    overflow-y: auto; /* 내용이 많을 경우 스크롤 가능 */
`

const Home = () => {
    // <StartMainPage /> 먼저 보이고, 나중에 <MainPage />가 보이도록
    const [showStart, setSetStart] = useState(true)
    const [showMain, setShowMain] = useState(false)

    useEffect(() => {
        // 5초 후에 <MainPage /> 등장!
        const timer = setTimeout(() => {
            setSetStart(false)
            setShowMain(true)
        }, 5000)

        // 컴포넌트가 등장할 때 타이머 삭제
        return () => clearTimeout(timer)
    }, [])

    return (
        <Container>
            {showStart && (
                <MainPageStyled>
                    <StartMainPage />
                </MainPageStyled>
            )}
            {showMain && (
                <MainPageStyled>
                    <MainPage />
                </MainPageStyled>
            )}
            <IntroStyled>
                <Intro />
            </IntroStyled>
        </Container>
    )
}

export default Home
