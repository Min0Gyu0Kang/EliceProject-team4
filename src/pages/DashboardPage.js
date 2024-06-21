/**
File Name : DashboardPage
Description : 대시보드 페이지
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림     Created
2024.06.13  김유림     Modified  네비게이션 컴포넌트 재사용하도록 수정 
2024.06.14  김유림     Modified  웹폰트 적용
2024.06.18  이유민     Modified  DashBoard 경로 수정
*/

import React from 'react'
import Header from '../components/common/Header'
import DashBoard from '../components/dashboard/DashBoard'
import Navigation from '../components/common/Navigation'
import goalIcon from '../assets/images/goal.svg'
import Footer from '../components/common/Footer'
import styled from 'styled-components'
import '../assets/fonts/font.css'

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
        <div>
            <PageContainer>
                <Navigation
                    title="데이터 스토리"
                    subtitle="데이터 시각화를 통해 도시의 오아시스가 전하는 이야기"
                    icon={goalIcon}
                />
                <ContentWrapper>
                    <Dashboard />
                </ContentWrapper>
                <Footer />
            </PageContainer>
        </div>
    )
}

export default DashboardPage
