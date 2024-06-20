/**
File Name : DashboardPage
Description : 커뮤니티 페이지
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림     Created
2024.06.19  김유림     Modified  헤더 삭제 app.js에서 관리
*/

import React from 'react'
import Navigation from '../components/common/Navigation'
import communityIcon from '../assets/images/community.svg'
import Footer from '../components/common/Footer'
import styled from 'styled-components'

//커뮤니티 탭들
import CommunityHeader from "./CommunityHeader"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const DashboardPage = () => {
    return (
        <PageContainer>
            <Navigation
                title="커뮤니티"
                subtitle="공원에 대해 다양한 소통을 해보세요"
                icon={communityIcon}
            />
            <ContentWrapper>
                <CommunityHeader />
            </ContentWrapper>
            <Footer />
        </PageContainer>
    )
}

export default DashboardPage
