/**
File Name : NearPark
Description : 내 주변 공원 컴포넌트
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
    padding: 10px 10px;
    width: 100%;
`
const NearPark = () => {
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="내 주변 공원" />
                <Empty text="공원을 검색해보세요" />
            </ContentWrapper>
        </RightSection>
    )
}

export default NearPark
