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

const ReviewDetail = ({park, onBackClick}) => {
    return (
        <RightSection>
            <ContentWrapper>
                <button onClick={onBackClick}>Back</button>
                <Keyword text={`${park.name}에 대한 리뷰`} />
            </ContentWrapper>
        </RightSection>
    )
}

export default ReviewDetail
