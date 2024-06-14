import React from 'react'
import styled from 'styled-components'

const LeftContainer = styled.div`
    flex: 1; /* 왼쪽 섹션이 부모의 1/6을 차지 */
    background-color: #f6f5f2;
    /* 추가적인 스타일링 */
`

const LeftComponent = () => {
    return (
        <LeftContainer>
            {/* 여기에 왼쪽 컴포넌트의 내용을 추가 */}
            <h2>왼쪽 컴포넌트</h2>
            <p>왼쪽 컴포넌트의 내용</p>
        </LeftContainer>
    )
}

export default LeftComponent
