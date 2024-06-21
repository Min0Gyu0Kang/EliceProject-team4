/**
File Name : CommunityReports.js
Description : 공원 민원 페이지
Author : 강민규

History
Date        Author   Status    Description
2024.06.19  강민규   Created
2024.06.19  강민규   Modified
2024.06.20  강민규   Modified  민원으로 구청 불러오기(초기값에 공원이 없다고 뜸, 아이콘 버튼으로 연동 안 됨)
*/

import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'
import axios from 'axios'

import IconMegaphone from '../../assets/images/megaphone.svg'
import IconLinkto from '../../assets/images/linkto.svg'
import IconSearch1 from "../../assets/images/IconSearch1.svg"
import {Stack,TextField, Autocomplete} from '@mui/material';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; /* 추가 */
    padding: 10px 240px; /* 수정된 패딩 */
    margin-top: 10px; /* 수정된 상단 여백 */
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
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
    margin-left: 60px;
    margin-top: 30px;
    text-align:left;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1rem;
    color: #555;
`

const StyledLink = styled.a`
    color: #252525;
    cursor: pointer;
    text-decoration: none;
`;

const CommunityReports = () => {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [parkComplaint, setParkComplaint] = useState([]);
    const [resultValue, setResultValue] = useState(null);

    const handleInputChange = (event, value) => {
        setTextFieldValue(value);
    };

    useEffect(() => {
        if (textFieldValue !== ' ') {
        axios.get(`http://localhost:3000/community/complaint/${textFieldValue}`)
          .then(function (response) {
            setParkComplaint(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }, [textFieldValue]);

    const park = parkComplaint.find(park => park.name === textFieldValue);

    useEffect(() => {
        if (park) {
            setResultValue(
                <ContentWrapper>
                    <ParkSearchContainer>
                        <Stack direction = 'row'>
                        <img
                            src={IconLinkto}
                            alt="Linkto"
                            height='20px'
                            style={{ }}
                        />
                        {park.name}{park.management}
                        </Stack>
                    </ParkSearchContainer>
                    <StyledLink href={park.link}  >{park.link}</StyledLink>
                </ContentWrapper>
            );
        } else {
            setResultValue(
                <div style={{ textAlign: 'center', marginRight: '30%', marginTop: '10%' }}>
                    찾을 수 없는 공원을 입력하셨어요.
                    공원 이름을 다시 확인해주세요.
                </div>
            );
        }
    }, [park]);

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
                            value={textFieldValue}
                            freeSolo
                            options={parkComplaint.map((option) => option.name)}
                            onChange={handleInputChange}
                            renderInput={(params) => <TextField {...params} label="공원 이름을 검색해보세요" />}
                        />
                        <img
                            src={IconSearch1}
                            alt="Search"
                            height='40px'
                            style={{ marginRight: '30px',}}
                        />
                    </Stack>
                </SearchBar>
                {/* 공원이 있음/없음 */}
                {resultValue}
            </ContentWrapper>
        </PageContainer>
    );
};

export default CommunityReports;