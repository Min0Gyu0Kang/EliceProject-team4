/**
File Name : CommunityGallery.js
Description : 갤러리 페이지
Author : 강민규

History
Date        Author   Status    Description
2024.06.20  강민규   Created
2024.06.20  강민규   Modified
*/

import {React,useState} from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
    padding: 10px 240px; /* 수정된 패딩 */
    margin-top: 10px; /* 수정된 상단 여백 */
`

const CommunityGallery = () => {

    return(
        <PageContainer>
            갤러리
        </PageContainer>
    )
}

export default CommunityGallery