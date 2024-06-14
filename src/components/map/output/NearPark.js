/**
File Name : NearPark
Description : 내 주변 공원 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   내주변 공원 컴포넌트
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'

const RightSection = styled.div`
    flex: 3; /* 부모의 전체 너비를 차지하도록 함 */
    background-color: #f6f5f2; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentWrapper = styled.div`
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    margin-bottom: 10px; /* 아래 여백 */
`
const NearPark = () => {
    return (
        <div>
            <RightSection>
                <ContentWrapper>
                    <Keyword text="내 주변 공원" />
                </ContentWrapper>
            </RightSection>
        </div>
    )
}

export default NearPark
