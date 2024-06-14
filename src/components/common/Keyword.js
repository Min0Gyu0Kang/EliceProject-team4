/**
File Name : Keyword
Description : 키워드 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림   Created
*/
import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css' // 글꼴 CSS 파일

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start; /* 수직 상단 정렬 */
`

const KeywordText = styled.div`
    font-size: 27px; /* 폰트 크기 */
    font-family: 'Pretendart';
    font-weight: 500;
    color: #333; /* 글자색 */
`

const Keyword = ({text}) => {
    return (
        <ContentWrapper>
            <KeywordText>{text}</KeywordText>
        </ContentWrapper>
    )
}

export default Keyword
