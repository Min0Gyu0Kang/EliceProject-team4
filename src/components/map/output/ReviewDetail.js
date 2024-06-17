/**
File Name : ReviewDetail
Description : 리뷰 상세보기 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created    
*/
import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import ParkList from './ParkList'

const RightSection = styled.div`
    flex: 3;
    background-color: #ffffff;
    display: flex;
    flex: 1;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    width: 100%;
`

const ReviewDetail = ({parkId, onBackClick}) => {
    // api로 변경 예정
    const park = {
        id: parkId,
        name: '늘벗공원', // 예시로 고정된 공원 이름
        nickname: '하하하',
        content: '로로로',
    }
    return (
        <RightSection>
            <ContentWrapper>
                <button onClick={onBackClick}>Back</button>
                <Keyword text={`${park.name}에 대한 리뷰`} />
                <div>
                    <p>닉네임: {park.nickname}</p>
                    <p>내용: {park.content}</p>
                </div>
            </ContentWrapper>
        </RightSection>
    )
}

export default ReviewDetail
