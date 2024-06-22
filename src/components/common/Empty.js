/**
File Name : Empty
Description : 빈탭 문구 컴포넌트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영   Created
*/

import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const EmptyTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
`

const EmptyText = styled.div`
    text-align: center;
    opacity: 0.5;
    font-size: 12pt;
    font-family: 'Pretendard';
`

const Empty = ({text}) => {
    return (
        <EmptyTextContainer>
            <EmptyText>{text}</EmptyText>
        </EmptyTextContainer>
    )
}

export default Empty
