/**
File Name : CommunityReports.js
Description : 공원 민원 페이지
Author : 강민규

History
Date        Author   Status    Description
2024.06.19  강민규   Created
2024.06.19  강민규   Modified
*/

import {React,useState} from 'react'
import styled from 'styled-components'
import '../assets/fonts/font.css'

import IconMegaphone from '../assets/images/megaphone.svg'
import IconLinkto from '../assets/images/linkto.svg'
import IconSearch1 from "../assets/left/IconSearch1.svg"
import {Stack,TextField, Autocomplete} from '@mui/material';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 240px; /* 수정된 패딩 */
    flex-direction: column;
    justify:center;
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
    vertical-align: middle; /* 이미지의 수직 정렬 추가 */
    margin-right:50px; //텍스트박스 안에 넣기 위해 조정
`
const Title = styled.h1`
    margin: 50px; /* 이미지와 제목 사이의 간격 조정 */
    margin-bottom: 22px;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 2rem; /* 수정된 제목의 글꼴 크기 */
    color: #262627; /* 검은색으로 변경 */
`

const Subtitle = styled.p`
    margin-left: 50px;
    margin-top:-30px;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1rem;
    color: #555;
`

const SearchBar = styled.div`
    appearance: auto;
    box-sizing: border-box;
    padding-block: 1px;
    padding-inline: 2px;
`;

const ParkSearchContainer = styled.p`
    margin-left: 50px;
    margin-top:-30px;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1rem;
    color: #555;
`

// list from backend
const parkComplaint= [ 
    { title: '하늘빛공원', url: 'link' },
    { title: '늘봄공원', url: 'link' },
    
];

const CommunityReports = () => {
    const [TextFieldValue, setTextFieldValue] = useState('');
    const [resultValue, setResultValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value; // Get current input value
        setTextFieldValue(inputValue); // Update TextFieldValue state
    
        // Check if input value matches any park title in parkComplaint
        const park = parkComplaint.find((park) => park.title === inputValue);
    
        if (park) {
          setResultValue(`Park Entered: ${park.title}`);
        } else {
          setResultValue(`찾을 수 없는 공원을 입력하셨어요. 공원 이름을 다시 확인해주세요.`);
        }
      };

    return (
        <PageContainer>
            <ContentWrapper>
            <Icon src={IconMegaphone} alt="icon" />
            <Subtitle>공원에 불편함이 있으셨나요? 링크로 이동해 민원을 넣어보세요 공원 발전에 큰 도움이 됩니다.</Subtitle>
            <Title>이름 검색</Title>
            <SearchBar>
            <Stack direction="row" spacing={1} sx={{ width: 900 }}>
            <Autocomplete
            sx={{
                width: '610px',
                borderRadius: '30px',
                borderColor: '#555',
            }}
            value={TextFieldValue}
            freeSolo
            options={parkComplaint.map((option) => option.title)}
            onChange={(e) => setTextFieldValue(e.target.value)}
            renderInput={(params) => <TextField {...params} label="공원 이름을 검색해보세요" />}
            />
            <img
            src={IconSearch1}
            alt="Search"
            height='40px'
            style={{ marginRight: '30px', cursor: 'pointer' }}
            onClick={handleInputChange}
            />
            </Stack>
            </SearchBar>
            {/* 공원이 있음/없음 */}
            <ParkSearchContainer value={resultValue} />
            </ContentWrapper>
        </PageContainer>
    )
}

export default CommunityReports
