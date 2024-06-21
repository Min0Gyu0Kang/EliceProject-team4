/**
File Name : DashboardPage
Description : 커뮤니티 페이지
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림     Created
2024.06.19  김유림     Modified  헤더 삭제 app.js에서 관리
2024.06.20  강민규     Modified  커뮤니티용 탭 추가
2024.06.20  강민규     Modified  게시판, 갤러리 헤더 지움
2024.06.22  김유림     Modified  레이아웃 수정

*/

import React, {useState} from 'react'
import Navigation from '../components/common/Navigation'
import communityIcon from '../assets/images/community.svg'
import Footer from '../components/common/Footer'
import styled from 'styled-components'
import {Tabs, Tab} from '@mui/material'

// 커뮤니티 탭들
import CommunityBoard from '../components/community/CommunityBoard'
import CommunityGallery from '../components/community/CommunityGallery'
import CommunityReports from '../components/community/CommunityReports'

import * as InputStyles from '../components/inputs/InputStyles'

const LoginContent = styled(InputStyles.LoginContent)`
    height: 550px;
    margin: 100px;
`

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

const CommunityPage = () => {
    const [value, setValue] = useState('three')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <PageContainer>
                <Navigation
                    title="민원넣기"
                    subtitle="공원에 불편함이 있으셨나요? 해당 구청으로 건의해보세요 공원 발전에 큰 도움이 됩니다"
                    icon={communityIcon}
                />
                <ContentWrapper>
                    <CommunityReports />
                    {/* 
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    textColor="primary"
                    indicatorColor="none"
                    sx={{minWidth: '50%'}}
                >
                    <Tab
                        value="three"
                        label="민원넣기"
                        sx={{
                            bgcolor: value === 'three' ? '#30cb6e' : '',
                            color: value === 'three' ? '#fff' : '#252525',
                            border: '10',
                            borderRadius: '40%',
                            fontFamily: 'Pretendard',
                        }}
                    />
                </Tabs>
                {renderTabComponent(value)} 
                */}
                </ContentWrapper>
                <Footer />
            </PageContainer>
        </div>
    )
}

export default CommunityPage
