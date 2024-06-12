/**
File Name : Navigation
Description : 내비게이션 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
2024.06.12  김유림   Modified  위치조정
*/
import React from 'react'
import styled from 'styled-components'
import goal from '../../assets/images/goal.svg'

const NavigationWrapper = styled.div`
    background-color: #fff;
    padding: 0px 150px; /* 수정된 패딩 */
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
    font-size: 2rem; /* 수정된 제목의 글꼴 크기 */
    color: #262627; /* 검은색으로 변경 */
`

const Subtitle = styled.p`
    margin-top: -15px; /* 부제목과 제목 사이의 간격 조정 */
    margin-left: 5px; /* 제목과 부제목 사이의 간격 조정 */
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 600;
    color: #555;
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <ContentWrapper>
                <Icon src={goal} alt="goal icon" />
                <Title>데이터 스토리</Title>
            </ContentWrapper>
            <Subtitle>
                데이터 시각화를 통해 도시의 오아시스가 전하는 이야기
            </Subtitle>
        </NavigationWrapper>
    )
}

export default Navigation
