/**
File Name : Navigation
Description : 내비게이션 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
2024.06.12  김유림   Modified    위치조정
2024.06.13  김유림   Modified    폴더 위치 변경: common

*/
import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const NavigationWrapper = styled.div`
    background-color: #fff;
    padding: 10px 240px; /* 수정된 패딩 */
    border-bottom: 1px solid #e0e0e0;
    margin-top: 10px; /* 수정된 상단 여백 */
`

const ContentWrapper = styled.div`
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
    vertical-align: middle; /* 이미지의 수직 정렬 추가 */
`

const Title = styled.h1`
    margin-left: 10px; /* 이미지와 제목 사이의 간격 조정 */
    margin-bottom: 22px;
    font-family: 'Pretendard';
    font-weight: 800;
    color: #262627; /* 검은색으로 변경 */
`

const Subtitle = styled.p`
    margin-top: -15px; /* 부제목과 제목 사이의 간격 조정 */
    margin-left: 5px; /* 제목과 부제목 사이의 간격 조정 */
    font-family: 'Pretendard';
    font-weight: 600;
    color: #555;
`

const Navigation = ({title, subtitle, icon}) => {
    return (
        <NavigationWrapper>
            <ContentWrapper>
                <Icon src={icon} alt="icon" />
                <Title>{title}</Title>
            </ContentWrapper>
            <Subtitle>{subtitle}</Subtitle>
        </NavigationWrapper>
    )
}

export default Navigation
