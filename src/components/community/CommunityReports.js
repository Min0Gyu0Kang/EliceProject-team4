/**
File Name : CommunityReports.js
Description : 공원 민원 페이지
Author : 강민규

History
Date        Author   Status    Description
2024.06.19  강민규   Created
2024.06.19  강민규   Modified
2024.06.20  강민규   Modified  민원으로 구청 불러오기(초기값에 공원이 없다고 뜸, 아이콘 버튼으로 연동 안 됨)
2024.06.21  강민규   Modified  초기값에 공원이 없다고 안 뜸, 아이콘 버튼으로 연동 안 됨, 결과 CSS 수정, 새탭으로 구청 열림
2024.06.21  김유림   Modified  위치 center 이동, 디자인 수정
*/

import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'
import axios from 'axios'
import IconLinkto from '../../assets/images/linkto.svg'
import IconSearch1 from '../../assets/images/IconSearch1.svg'
import {Stack, TextField, Autocomplete} from '@mui/material'

const PageContainer = styled.div`
    flex-direction: column;
    min-height: 100vh;
    margin-left: 540px;
    margin-top: 60px; /* 수정된 상단 여백 */
`

const ContentWrapper = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: center; /* 중앙 정렬 추가 */
`

const Title = styled.h1`
    margin-left: 5px;
    margin-bottom: 22px;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1.5rem; /* 수정된 제목의 글꼴 크기 */
    color: #262627; /* 검은색으로 변경 */
`

const SearchBar = styled.div`
    box-sizing: border-box;
    padding-block: 1px;
    padding-inline: 2px;
    justify-content: center;
`

const ParkSearchContainer = styled.p`
    margin-left: 60px;
    margin-top: 30px;
    text-align: left;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1rem;
    color: #555;
`

const ParkSearchName = styled.p`
    font-size: 1.3rem;
    font-family: 'Pretendard';
    font-weight: 700;
`

const ParkSearchManagement = styled.p`
    position: relative;
    top: 4px;
    font-weight: 500;
`

const StyledLink = styled.a`
    color: #252525;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
`

const CommunityReports = () => {
    // 확인할 공원 이름
    const [textFieldValue, setTextFieldValue] = useState('')
    // axios get으로 불러진 공원 이름
    const [parkComplaint, setParkComplaint] = useState([])
    // 공원 유/무에 따라 추가할 div
    const [resultValue, setResultValue] = useState(null)

    const handleInputChange = (event, value) => {
        setTextFieldValue(value)
    }

    //이미지 클릭 시 검색 보내기
    // const handleSearchClick = (event,value) => {
    //     if (textFieldValue.trim() !== '') {
    //         handleInputChange(value); // Explicitly set the state to trigger useEffect
    //     }
    // };

    //검색 결과 axios get
    const delay = 1500 //입력 시 2초 후 결과 목록 가져오기
    useEffect(() => {
        if (textFieldValue !== '') {
            const fetchData = () => {
                axios
                    .get(
                        `http://localhost:3000/community/complaint/${textFieldValue}`,
                    )
                    .then(response => {
                        setParkComplaint(response.data.slice(0, 10)) //get only up to 10 park data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

            const timeoutId = setTimeout(fetchData, delay)

            // 지연 초기화
            return () => clearTimeout(timeoutId)
        }
    }, [textFieldValue])

    //해당되는 공원 목록 있으면 출력, 없으면 대체 텍스트 띄우기
    useEffect(() => {
        const park = parkComplaint.find(park => park.name === textFieldValue)
        //아예 공원정보를 안 주고 검색하면
        if (park) {
            console.log('park exists')
            setResultValue(
                <ContentWrapper>
                    <ParkSearchContainer>
                        <Stack direction="row" spacing={1}>
                            <img
                                src={IconLinkto}
                                alt="Linkto"
                                height="25 px"
                                style={{paddingBottom: '1px'}}
                            />
                            <ParkSearchName>{park.name}</ParkSearchName>{' '}
                            <ParkSearchManagement>
                                {park.management}
                            </ParkSearchManagement>
                        </Stack>
                        <StyledLink
                            href={park.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {park.link}
                        </StyledLink>
                    </ParkSearchContainer>
                </ContentWrapper>,
            )
        } else {
            if (!park && textFieldValue.trim() !== '') {
                console.log('Park not exist')
                setResultValue(
                    <div
                        style={{
                            textAlign: 'center',
                            marginRight: '45%',
                            marginTop: '10%',
                        }}
                    >
                        찾을 수 없는 공원을 입력하셨어요. 공원 이름을 다시
                        확인해주세요.
                    </div>,
                )
            } else {
                //입력 지웠을 때 초기화
                setResultValue(' ')
            }
        }
    }, [parkComplaint, textFieldValue])
    return (
        <PageContainer>
            <ContentWrapper>
                <Title>이름 검색</Title>
                <SearchBar>
                    <Stack direction="row" spacing={1}>
                        <Autocomplete
                            sx={{
                                width: '610px',
                                borderRadius: '50px',
                                borderColor: '#555',
                            }}
                            value={textFieldValue}
                            onInputChange={handleInputChange}
                            freeSolo
                            options={parkComplaint.map(option => option.name)}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="공원 이름을 검색해보세요"
                                />
                            )}
                        />
                        <img
                            src={IconSearch1}
                            alt="Search"
                            height="40px"
                            // onClick={handleSearchClick}
                            style={{
                                marginRight: '30px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                        />
                    </Stack>
                </SearchBar>
                {/* 공원이 있음/없음 */}
                {resultValue}
            </ContentWrapper>
        </PageContainer>
    )
}

export default CommunityReports
