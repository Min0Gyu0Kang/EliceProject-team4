/**
File Name : InfoPark
Description : 공원 정보 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   내주변 공원 컴포넌트
2024.06.14  임지영    Modified  Empty 컨테이너 추가, 스타일 수정
2024.06.15  김유림    Modified  ButtonWrapper 마진 수정
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Empty from '../../common/Empty'
import Rating from '@mui/material/Rating'
import InfoList from './InfoList'
import '../../../assets/fonts/font.css'
import Button from './Button'

const RightSection = styled.div`
    background-color: #ffffff; /* 예제용 배경색 */
    display: flex;
    flex: 1;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    width: 950%;
`
const ParkNameContainer = styled.div`
    font-family: 'Pretendard';
    width: 100%;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: space-between; /* 자식 요소 간의 공간을 최대화하여 양 끝에 정렬 */
`

const Name = styled.div`
    font-size: 15pt;
    margin: 10px 10px;
    align-items: flex-start; /* 수직 상단 정렬 */
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    margin-top: 10px; /* 위쪽 여백 추가 */
`
const InfoPark = () => {
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="공원 정보" />
                <ParkNameContainer>
                    <Name>늘벗공원</Name>
                    <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={0.5}
                        readOnly
                    />
                </ParkNameContainer>
                {/* <Empty text="공원을 검색해보세요" /> */}
                <InfoList></InfoList>
                <ButtonWrapper>
                    <Button></Button>
                </ButtonWrapper>
            </ContentWrapper>
        </RightSection>
    )
}

export default InfoPark