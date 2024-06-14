/**
File Name : InfoPark
Description : 공원 정보 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   내주변 공원 컴포넌트
2024.06.14  임지영    Modified  Empty 컨테이너 추가, 스타일 수정
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Empty from '../../common/Empty'
import InfoList from './InfoList'
import '../../../assets/fonts/font.css'

const RightSection = styled.div`
    flex: 3; /* 부모의 전체 너비를 차지하도록 함 */
    background-color: #f6f5f2; /* 예제용 배경색 */
    display: flex;
    flex: 1;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    width: 100%;
`

const InfoPark = () => {
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="공원 정보" />
                {/* <Empty text="공원을 검색해보세요" /> */}
                <InfoList></InfoList>
            </ContentWrapper>
        </RightSection>
    )
}

export default InfoPark
