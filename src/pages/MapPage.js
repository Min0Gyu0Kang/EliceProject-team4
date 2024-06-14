/**
File Name : MapPage
Description : 지도 레이아웃
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림   Created
2024.06.14  임지영   Modified   RightTop 스타일 수정, 주변 공원 컴포넌트 추가
*/

import React from 'react'
import Header from '../components/common/Header'
import NearPark from '../components/map/output/NearPark'
import styled from 'styled-components'
import '../assets/fonts/font.css'

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
`

const LeftSection = styled.div`
    flex: 2.5; /* 왼쪽 섹션이 부모의 1/6을 차지하도록 설정 */
    background-color: #f6f5f2; /* 예제용 배경색 */
    display: flex;
    flex-direction: column; /* 세로로 요소 배치 설정 */
`

const LeftTop = styled.div`
    flex: 1; /* 상위 섹션의 1/2를 차지하도록 설정 */
    background-color: #d9e6dc; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const LeftBottom = styled.div`
    flex: 1; /* 하위 섹션의 1/2를 차지하도록 설정 */
    background-color: #e0edc6; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const MiddleSection = styled.div`
    flex: 5; /* 가운데 섹션이 부모의 4/6을 차지하도록 설정 */
    background-color: #e0e0e0; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightSection = styled.div`
    flex: 2.5; /* 오른쪽 섹션이 부모의 2/6을 차지하도록 설정 */
    background-color: #f6f5f2; /* 예제용 배경색 */
    display: flex;
    flex-direction: column; /* 세로로 요소 배치 설정 */
`

const RightTop = styled.div`
    flex: 1; /* 상위 섹션의 1/2를 차지하도록 설정 */
    display: flex;
    margin: 10px;
`

const RightBottom = styled.div`
    flex: 1; /* 하위 섹션의 1/2를 차지하도록 설정 */
    background-color: #f5e1da; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const MapPage = () => {
    return (
        <div>
            <MainLayout>
                <Header />
                <ContentWrapper>
                    <LeftSection>
                        <LeftTop>Left Top Content</LeftTop>
                        <LeftBottom>Left Bottom Content</LeftBottom>
                    </LeftSection>
                    <MiddleSection>Middle Content</MiddleSection>
                    <RightSection>
                        <RightTop>
                            <NearPark />
                        </RightTop>
                        <RightBottom>Right Bottom Content</RightBottom>
                    </RightSection>
                </ContentWrapper>
            </MainLayout>
        </div>
    )
}

export default MapPage
