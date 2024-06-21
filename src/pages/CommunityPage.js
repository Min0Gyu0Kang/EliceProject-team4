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

*/

import {React,useState} from 'react'
import Navigation from '../components/common/Navigation'
import communityIcon from '../assets/images/community.svg'
import Footer from '../components/common/Footer'
import styled from 'styled-components'
import { Tabs, Tab  } from '@mui/material'

//커뮤니티 탭들
import CommunityBoard from '../components/community/CommunityBoard'
import CommunityGallery from '../components/community/CommunityGallery'
import CommunityReports from '../components/community/CommunityReports'

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
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const renderTabComponent = (tabValue) => {
        switch (tabValue) {
          // case 'one':
          //   return <CommunityBoard />;
          // case 'two':
          //   return <CommunityGallery />;
          case 'three':
            return <CommunityReports />;
          default:
            return null;
        }
      };
    return (
        <PageContainer>
            <Navigation
                title="커뮤니티"
                subtitle="공원에 대해 다양한 소통을 해보세요"
                icon={communityIcon}
            />
            <ContentWrapper>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                textColor='primary'
                indicatorColor="none"
                sx={{minWidth:'50%'}}
            >
                {/* <Tab value="one" label="게시판" sx={{bgcolor: value === 'one' ? '#30cb6e' : '',color: value === 'one' ? '#fff' : '#252525', border:'10',borderRadius:'40%',fontFamily:"Pretendard"}}/> */}
                {/* <Tab value="two" label="갤러리" sx={{bgcolor: value === 'two' ? '#30cb6e' : '',color: value === 'two' ? '#fff' : '#252525', border:'10',borderRadius:'40%',fontFamily:"Pretendard"}}/> */}
                <Tab value="three" label="민원넣기" sx={{bgcolor: value === 'three' ? '#30cb6e' : '',color: value === 'three' ? '#fff' : '#252525', border:'10',borderRadius:'40%',fontFamily:"Pretendard"}}/>
            </Tabs>
            {renderTabComponent(value)}
            </ContentWrapper>
            <Footer />
        </PageContainer>
    )
}

export default CommunityPage
