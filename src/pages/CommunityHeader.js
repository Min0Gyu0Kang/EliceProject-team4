/**
File Name : CommunityHeader.js
Description : 커뮤니티 전환 탭
Author : 강민규

History
Date        Author   Status    Description
2024.06.19  강민규   Created
2024.06.19  강민규   Modified
*/
import {React,useState} from 'react'
import styled from 'styled-components'
import '../assets/fonts/font.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//커뮤니티 페이지들
import Community from "./CommunityPage"

import CommunityReports from './CommunityReports'


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
`

const CommunityHeader=()=>{
    return (
        <PageContainer>
        <BrowserRouter>
            <Routes direction = "row">
                <Route path="/community" element={<Community />}>게시판</Route>
                {/* <Route path="/" element={<CommunityGallery />} >갤러리</Route> */}
                <Route path="/community/reports" element={<CommunityReports />} >민원넣기</Route>
            </Routes>
        </BrowserRouter>
        </PageContainer>
    )
}

export default CommunityHeader