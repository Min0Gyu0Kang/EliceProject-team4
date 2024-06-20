/**
File Name : CommunityBoard
Description : 커뮤니티 게시판
Author : 강민규

History
Date        Author   Status    Description
2024.06.20  강민규   Created   
2024.06.20  강민규   Modified  Not need header
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

const CommunityBoard = () =>{
    return(
        <PageContainer> 
            게시판
        </PageContainer>
    );
}

export default CommunityBoard
