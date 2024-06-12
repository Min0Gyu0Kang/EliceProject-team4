/**
File Name : DashboardPage
Description : 대시보드 페이지
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
*/

import React from 'react';
import Header from '../components/common/Header';
import DashBoard from '../components/dashboard/DashBoard';
import Navigation from '../components/dashboard/Navigation';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const DashboardPage = () => {
    return (
        <PageContainer>
            <Header />
            <Navigation />
            <ContentWrapper>
                <DashBoard />
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default DashboardPage;